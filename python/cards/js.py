import logging as log

def gen_conditions_code(conditions):
    ''' From a JSON dict generates JS code for Conditions.
    `conditions` is a list of 2-uples built from dictionary/@function and
     preamble.'''
    f = []
    res = ''

    vardict = {'@dice': 'Math.floor(Math.random() * 100)'}

    fdict = {'eq': '== "%s"',
             'neq' : '!= "%s"',
             'get': '>= %s',
             'gt': '> %s'}

    for var, func, val in conditions:
        f.append('a%s'%(len(f)+1))
        res =  res + 'function %s(){ return (%s%s); };'\
            %(f[-1], vardict.get(var, 'vartable["%s"]'%var), fdict[func]%val)

    #res = '\n%s'%res
    c = ' && '.join(['%s()'%e for e in f]) if len(f) != 0 else 'true'
    res = res + 'return (%s);'%c

    return res

def gen_choice_effect_code(conditions, cond_dict=[]):
    def cond_to_str(d):
        res = '[%s]'%(','.join(['[%s]'%','.join(['"%s"'%each for each in e]) for e in d]))
        return res

    f = []
    fdict = {'eq': '='}
    for var, func, val in conditions:
        f.append('t["%s"] %s "%s";'%(var, fdict[func], val))
    if len(f) == 0: return 'function(t){}';
    res = 'function(t){\n       %s\n      cond_dict=%s;\nreturn cond_dict;}'\
        %('\n       '.join(f), cond_to_str(cond_dict))
    return res


def gen_choice(code):
    ''' From a JSON dict generates JS code for Choices'''
    import json
    from preamble import find_if
    res = ''
    for label, option in code.items():
        # label is the text of the choice, option is the assigned code
        if_func = ''
        if_bit = find_if(option)
        cond_dict = []
        if not if_bit is None:
            cond_dict = if_bit[1]
            if_func = ', ' + 'function(){%s} '%gen_conditions_code(if_bit[1])
            option.pop(if_bit[0])

        res = res + '   ["%s", \n      %s%s],\n'\
            %(label, gen_choice_effect_code(option, cond_dict), if_func)

    return '  choices:[\n%s]'%res


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

    storylet_code = 'playSequence([\n%s%s%s    [choice, 0]],\n    0, instantly)'\
        %("%s", gen_playsequence(code), "%s")
    return storylet_code

def gen_preload_code(j):
    res = []
    for sc_name, sc in j.items():
        if 'image' in sc.keys():
            res.append('images/%s.jpg'%sc['image'])
        if 'audio' in sc.keys():
            res.append('audio/%s.mp3'%sc['audio'])

    code = 'preload_list = [%s]'%', '.join(['"%s"'%e for e in res])
    return code

def json_to_javascript(j): #, preamble={}):
    #if preamble == {}:
    #    log.info('* No preamble provided.')

    js = ''
    for sc_name, sc in j.items():

        # Start with conditions (adds conditions from preamble if any)
        conditions = sc['conditions'] \
            if 'conditions' in sc.keys() else []
        #preamble_cond = preamble['conditions'] \
        #    if 'conditions' in preamble.keys() else []

        log.info('%s - %s conditions'%(sc_name, len(conditions)))
        #if len(preamble_cond) != 0:
        #    log.info('%s preamble conditions'%len(preamble_cond))

        #conditions.extend(preamble_cond)
        qual_code = gen_conditions_code(conditions)

        # Generate the sequence for text, the image
        storylet_code = gen_storylet_code(sc['text']) \
            if 'text' in sc.keys() else 'playSequence([%s%s    [choice, 0]],\n'\
            ' 0, instantly)'
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
            '  storylet:function(choice, instantly){\n'\
            '  if (instantly == undefined) undefined = false;\n   %s\n  },\n%s'\
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
