from __future__ import print_function
import logging as log


def split_choice(text):
    ''' Some choices can have associated conditions identified by @if.
    This function splits both parts and returns both tables if relevant'''
    lines = [e for e in text.split('\n')]

    # Splitting preamble
    split = []
    i = 0
    prev = -1
    curr = 0
    while i < len(lines):
        each = lines[i]
        if clean_line(each) == '':
            i = i + 1
            continue
        if each.startswith('@if'):
            prev = curr
            curr = i
            if prev != -1:
                split.append('\n'.join(lines[prev:curr]))
        i = i + 1

    if len(split) == 0 and curr != 0:
        split.append('\n'.join(lines[:curr]))
    split.append('\n'.join(lines[curr:i]))

    if (len(split) > 1):
        log.info('%s parts in this choice : %s'%(len(split), split))

    res = [split[0]]
    if len(split) > 1:
        res.append(clean_line(split[1].split('@if')[1]))
    return res

def find_if(v):
    for i, e in enumerate(v):
        if e[0] == '@if':
            return i, e[1]
    return None

def remove_minuslines(text):
    ''' Creates a new file with same content minus lines full of ------'''
    log.info('* Removing minus lines.')

    res = []
    for each in text.split('\n'):
        is_line = False
        clean = clean_line(each)
        if len(set(clean)) == 1:
            for s in ['---', '***', '###']:
                if clean.startswith(s):
                    is_line = True
                    break
        if not is_line:
            res.append(each)
    return '\n'.join(res)

def clean_line(line):
    ''' removes any space and convert to lowercase'''
    return ''.join(line.split(' ')).rstrip('\n')

def does_start_by_preamble_key(line, preamble_keys):
    for each in preamble_keys:
        if line.lower().startswith(each):
            return each
    return False

def get_preamble(text):
    ''' Returns the current version of the Markdown-based language used
    Note: actually runs on the .md1 file so that these optional lines get removed
    as are breaking lines.'''

    preamble_keys = ['version', 'conditions', 'extensions']
    preamble = {}

    log.info('* Fetching preamble.')
    # Splitting preamble
    split = []
    i = 0
    prev = -1
    curr = 0
    lines = text.split('\n')
    while i < len(lines):
        each = lines[i]
        if each.startswith('#'): break
        if each == '':
            i = i + 1
            continue
        k = does_start_by_preamble_key(each, preamble_keys)
        if not k is False:
            prev = curr
            curr = i
            if prev != -1:
                split.append(''.join(lines[prev:curr]))
        i = i + 1
    split.append(''.join(lines[curr:i]))

    body = '\n'.join([each for each in lines[i:]])

    # Processing split preamble
    for each in split:
        if each == '': continue
        each = clean_line(each).lower()
        k, v = each[:each.find(':')], each[each.find(':')+1:]
        if k == 'conditions':
            v = v.strip('\n').rstrip('\n')
            d = parse_dict(v)
            preamble[k] = d
        elif k == 'extensions':
            preamble[k] = v.split(',')
        else:
            if k in preamble_keys:
                preamble[k] = v
            else:
                raise Exception('%s unknown (%s)'%(k, ', '.join(preamble_keys)))

    log.info('Found preamble:')
    log.info(preamble)

    return preamble, body
