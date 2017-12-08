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


def gen_conditions_code(conditions):
    ''' From a JSON dict generates JS code for Conditions.
    `conditions` is a list of 2-uples built from dictionary/@function and
     preamble.'''
    f = []
    res = ''
    for k, v in conditions:
        f.append('a%s'%(len(f)+1))
        res =  res + 'function %s(){ return (vartable["%s"]=="%s"); };'%(f[-1], k, v)

    res = '\n%s'%res
    c = ' && '.join(['%s()'%e for e in f]) if len(f) != 0 else 'true'
    res = res + 'return (%s);\n'%c

    return res

def gen_choice(code):
    ''' From a JSON dict generates JS code for Choices'''
    import json
    res = ''
    for label, option in code.items():
        # label is the text of the choice, option is the assigned code
        if_func = ''
        if '@if' in option.keys():
            if_func = ', ' + 'function(){%s}'%gen_conditions_code(option['@if'].items())
            option.pop('@if')

        res = res + '["%s", %s%s],'%(label, json.dumps(option), if_func)

    return 'choices:[%s]'%res


def gen_storylet_code(code):
    ''' Turns the Text section in a JS playable sequence.
    By default, every bit appears with a 'fadeIn' effect in 1000 ms.'''

    def gen_playsequence(code):
        import markdown
        seq = ''
        for each in code.split('\n'):
            each = markdown.markdown(each)
            eachcode = '{addDialog("%s", "fadeIn")}, 1000'%each
            seq = seq + '    [function()%s],\n'%(eachcode)
        return seq

    storylet_code = '  playSequence([%s%s%s    [choice, 0]])'\
        %("%s", gen_playsequence(code), "%s")
    return storylet_code


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

    preamble_keys = ['conditions'] #'version': None, 'qualities':None, 'extensions':None}
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
        if k == 'qualities':
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

def gen_preload_code(j):
    res = []
    for sc_name, sc in j.items():
        if 'image' in sc.keys():
            res.append('images/%s.jpg'%sc['image'])
        if 'audio' in sc.keys():
            res.append('audio/%s.mp3'%sc['audio'])

    code = 'preload_list = [%s]'%', '.join(['"%s"'%e for e in res])
    return code
