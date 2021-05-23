import markdown
import pandas as pd
import logging as log


def clean_line(s):
    ''' removes any space and convert to lowercase'''
    return s.strip(' ').strip('\n')


def markdown_table_to_dict(code):
    ''' From a Markdown table to a dictionary '''
    from markdown.extensions import tables
    html = markdown.markdown(code, extensions=[tables.makeExtension()])
    df = pd.read_html(html, converters={'value': str})[0]
    booleanDictionary = {True: 'true', False: 'false'}
    df = df.replace(booleanDictionary)
    rec = [(e[1], e[2], e[3]) for e in df.to_records()]
    return rec


def get_dict(text):
    ''' From simple text to list of lists.
    ex: sc:gte:0
        lang:eq:fr
    '''
    res = []
    for each in text.split('\n'):
        if each == '':
            continue  # ignore blank lines
        each = clean_line(each)
        bits = each.split(':')
        if len(bits) == 2:
            res.append((bits[0], 'eq', bits[1]))
        else:
            res.append(bits)
    return res


def parse_dict(code):
    ''' From Markdown code to a dictionary (used for Qualities/Choices).
    Can be either simple text or Markdown table'''
    def is_markdown(code):
        is_md = 0
        for each in code.split('\n'):
            if ('variable' in each and 'value' in each) or \
               len(set(each).intersection(set('-|:'))) > 2:
                is_md = is_md + 1
        return is_md == 2
    # log.info('is_markdown:%s'%is_markdown(code))
    if is_markdown(code):
        d = markdown_table_to_dict(code)
        return d
    else:
        if clean_line(code) == '':
            return []
        d = get_dict(code)
        return d
