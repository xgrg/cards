import os, sys
sys.path.append('./python')
import md_to_js
import cards
import logging as log
log.basicConfig(format="%(levelname)s: %(message)s", level=log.INFO)


def test_all_md():
    from glob import glob
    md_files = glob('md/tests/*.md')
    log.info(md_files)
    for each in md_files:
        js_fp = each.replace('.md', '.js')
        log.info('Reading %s...'%each)
        md_to_js.markdown_to_js(each, js_fp)
        log.info('Writing %s...'%js_fp)
