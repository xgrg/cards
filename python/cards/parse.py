from preamble import *
from table import *

def clean_json(j):
    ''' From a JSONified Markdown file, reformats selected bits of the JSON when
    necessary e.g. turning Quality/Choices tables to dictionaries '''
    log.info('* Cleaning JSON.')
    from collections import OrderedDict
    res = OrderedDict()
    # then appends scenes

    # Checking not-dict json
    if not isinstance(j, OrderedDict):
        log.error('%s not a valid OrderedDict'%str(j))
        return {}

    for k, v in j.items():
        sc = {}

        # Checking empty cards
        if isinstance(v, unicode):
            log.error('%s, %s is not a valid card.'%(k, v))
            continue

        # Starts with Qualities: looks for either one table or a function or both
        if 'Conditions' in v.keys():
            sc['conditions'] = parse_dict(v['Conditions'])
        if 'Action' in v.keys():
            sc.setdefault('conditions', []).append(('@action', 'eq', v['Action']))

        # Image and Text do not need to be touched at this stage
        for each in ['Image', 'Text', 'Code', 'Audio']:
            if each in v.keys():
                sc[each.lower()] = v[each]

        # Ends with Choices: looks for either one table or a function or both
        # NB: the function is identified using @if
        if 'Choices' in v.keys():
            ch = OrderedDict()
            for k1, v1 in v['Choices'].items():
                choice_parts = split_choice(v1)
                choice_dict = parse_dict(choice_parts[0])
                if len(choice_parts) > 1:
                    choice_dict.append(('@if', parse_dict(choice_parts[1])))

                ch[k1] = choice_dict
            sc['choices'] = ch
        res[k] = sc

    return res


def jsonify_markdown(md):
    ''' Reads a Markdown file and parses it to build a first JSON object'''
    import sys
    reload(sys)
    sys.setdefaultencoding('utf-8')

    import markdown_to_json
    from markdown_to_json.vendor.docopt import docopt
    from markdown_to_json.vendor import CommonMark
    from markdown_to_json.markdown_to_json import Renderer, CMarkASTNester

    def jsonify_markdown(md):
        nester = CMarkASTNester()
        renderer = Renderer()
        ast = CommonMark.DocParser().parse(md)
        nested = nester.nest(ast)
        rendered = renderer.stringify_dict(nested)
        return rendered

    log.info('* Jsonifying Markdown...')
    if md == '':
        log.error('Markdown is empty. Check input data.')
        return None
    res = jsonify_markdown(md)
    return res


def regenerate_md(preamble, body):
    ''' From a JSON regenerates a Markdown file'''

    def beautify_table(d):
        ''' From a dictionary to a Markdown table'''
        import tabulate
        res = tabulate.tabulate(d, ['variable', 'function', 'value'], tablefmt="pipe")
        return res

    # first copy preamble
    log.info(preamble)
    md = ''

    # then appends scenes

    from copy import deepcopy
    j = deepcopy(body)

    for k, v in j.items():
        md = md + '# %s\n'%k

        if 'conditions' in v.keys():
            md = md + '## Conditions\n'
            d = v['conditions']
            if d != {}:
                md = md + beautify_table(d) +'\n\n'

        for each in ['action', 'image', 'text', 'code', 'audio']:
            if each in v.keys():
                md = md + '## %s\n%s\n'%(each.capitalize(), v[each])

        # if section is choice check for tables
        if 'choices' in v.keys():
            md = md + '## Choices\n'
            for k1, v1 in v['choices'].items():
                md = md + '### %s\n'%k1
                qual_f = ''
                if_bit = find_if(v1)
                if not if_bit is None:
                    qual_f =  qual_f + '\n@if\n\n'\
                        + beautify_table(if_bit[1]) + '\n'
                    v1.pop(if_bit[0])
                if v1 != []:
                    md = md + beautify_table(v1) + '\n'
                md = md + qual_f

        # adds a breaking line
        md = md + '\n******\n\n'

    return md



def markdown_to_json(md_fp, rebuild_md=False):
    ''' Creates a new .md file without lines full of --------
    This new file is named [markdown_file].md1
    If `rebuild_md` is True then the Markdown file is rewritten nicely (with
    beautified tables)'''
    md = open(md_fp).read()

    md_wo_breaklines = remove_minuslines(md)
    #jsvn.beautify_md(md_fp)
    preamble, body = get_preamble(md_wo_breaklines)

    # Creates a Json from Markdown
    j = jsonify_markdown(body)

    # Improves a few bits in the json
    j = clean_json(j)

    md = regenerate_md(preamble, j)

    if rebuild_md:
        md_fp2 = md_fp.replace('.md','.beautified.md')
        log.info('* Rebuild MD and writing %s'%md_fp2)
        with open(md_fp2, 'w') as w:
            w.write(md)

    return preamble, j



def json_to_javascript(j, preamble={}):
    if preamble == {}:
        log.info('* No preamble provided.')

    js = ''
    for sc_name, sc in j.items():

        # Start with conditions (adds conditions from preamble if any)
        conditions = sc['conditions'] \
            if 'conditions' in sc.keys() else []
        preamble_cond = preamble['conditions'] \
            if 'conditions' in preamble.keys() else []

        log.info('%s - %s conditions'%(sc_name, len(conditions)))
        if len(preamble_cond) != 0:
            log.info('%s preamble conditions'%len(preamble_cond))

        conditions.extend(preamble_cond)
        qual_code = gen_conditions_code(conditions)

        # Generate the sequence for text, the image
        storylet_code = gen_storylet_code(sc['text']) \
            if 'text' in sc.keys() else 'playSequence([%s%s    [choice, 0]])'
        image = '[function(){displayImage("%s")}, 1000],\n'%sc['image'] \
            if 'image' in sc.keys() else ''
        extra_code = '     ,[%s, 0],\n'%sc['code'] \
            if 'code' in sc.keys() else ''
        audio = '  audio:"%s",\n'%sc['audio'] \
            if 'audio' in sc.keys() else ''

        # Works with Choices
        choices_code = gen_choice(sc['choices']) \
            if 'choices' in sc.keys() else ''

        # Compiles everything
        sc_code = '  name: \'%s\',\n%s'\
            '  conditions:function(){\n    %s\n  },\n'\
            '  storylet:function(choice){\n  %s\n  },\n%s'\
            %(sc_name, audio, qual_code, storylet_code%(image, extra_code), choices_code)
        scene_js = '%s = {\n%s\n}'%(sc_name, sc_code)
        js = js + scene_js + '\n\n'

    # Ends with listing all the scenes in the `ready` function
    pushlist = ''
    for sc_name, _ in j.items():
        pushlist = pushlist + 'storylets.push(%s);\n'%sc_name

    # Adds a list with all iamges/audio resources (preload)
    preload_list = gen_preload_code(j)
    js = js + preload_list + '\n\n'

    js = js + pushlist
    return js
