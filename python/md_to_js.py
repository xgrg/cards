#! /usr/bin/env python
import logging as log


def markdown_to_js(md_fp, js_fp, beautify=False):
    import cards
    import json
    import os.path as osp

    log.info('Markdown file: %s' % md_fp)
    log.info('JS file: %s' % js_fp)

    preamble, body = cards.markdown_to_json(md_fp, rebuild_md=beautify)

    # Extending the JSON with possible extensions
    body = cards.add_preamble_conditions(body, preamble.get('conditions', []))
    extensions = preamble.get('extensions', [])
    log.info('* %s extensions included (%s)' % (len(extensions), extensions))
    for each in extensions:
        log.info('* Processing extension %s' % each)
        fp = osp.join(osp.dirname(md_fp), each)
        p, b = cards.markdown_to_json(fp, rebuild_md=beautify)
        b = cards.add_preamble_conditions(b, p.get('conditions', []))
        for k, v in b.items():
            if k in body.keys():
                log.warning('%s is a duplicate key in JSON object' % k)
            else:
                body[k] = v

    # # save to JSON if necessary
    # json_fp = md_fp.replace('.md','.json')
    # json.dump(body, open(json_fp, 'w'), indent=2, ensure_ascii=False,
    #           encoding ='utf-8')

    # Generates JS from Json
    js = cards.json_to_javascript(body)

    with open(js_fp, 'w') as w:
        w.write(js)


def __parse_args__(args=None):
    import argparse

    desc = 'Converts Markdown code to Javascript that can run as scenes'
    usage = '%(prog)s markdown_file [json_file] [js_file]\n\n'\
            'If omitted json_file and js_file are made up from '\
            'markdown_file'
    # Parsing options
    parser = argparse.ArgumentParser(description=desc, prog='md_to_js2',
                                     usage=usage)
    parser.add_argument('md', help='Markdown file')
    parser.add_argument('js', nargs='?', help='JS file')
    parser.add_argument('--verbose', action='store_true', help='verbosity')
    parser.add_argument('--beautify', action='store_true',
                        help='beautify Markdown')

    args = parser.parse_args(args)
    if args.verbose:
        log.basicConfig(format="%(levelname)s: %(message)s", level=log.INFO)
    else:
        log.basicConfig(format="%(levelname)s: %(message)s")
    return args


if __name__ == '__main__':
    args = __parse_args__()
    md_fp = args.md

    js_fp = args.js if args.js is not None else md_fp.replace('.md', '.js')

    markdown_to_js(md_fp, js_fp, args.beautify)
