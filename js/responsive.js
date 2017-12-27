function adjustimg(){
  console.log("adjust2")
    $('#imagebox img').css({'max-height': h * 0.4, 'width':w})
                            //'border': '1px solid white'})
}


function reset_scenebox(){
   $('#imagebox').html('');
   $('#dialogbox').html('');
   $('#choicebox').html('');
   if (fullscreen == 1)
    screenfull.request($('#bodybox')[0]);
}

function set_bodybox(){
   html ='<div id="imagebox"></div>'+
         '<div id="textbox">'+
         '<div id="dialogbox"></div>'+
         '<div id="choicebox"></div>'+
         '</div><div id="availbox">'+
         '</div>'
   $('#bodybox').html(html)
   config_bodybox();



   console.log("reset bodybox")
}

function preload(callback){
    html = 'loading...'
    $('#bodybox').html(html);
    var array = []; //, 'media/bg.mp3']
    $(array).each(function(i){   // Note the argument
        html = html + array[i] + ' ';
        console.log(array[i]);
        if (array[i].indexOf('.mp3')!==-1)
          var res = document.createElement('source');
        else
          var res = document.createElement('img');
        res.setAttribute('src', array[i]);
        $('#bodybox').html(html);
    });
    console.log('preload done')
    set_bodybox();
    callback();
}

function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

function config_bodybox(){
    console.log('config bodybox')
    h = screen.height - 200;
    w = screen.width;
    if (w<h){ orientation = 'vertical'; }
    else { orientation = 'horizontal' }
    if (orientation == 'horizontal'){
      h = h - 150;
      w = h / 1.5;
    }
    else {
      w = w - 10;
      h = w * 1.4;
    }
    console.log('width' + w);
    console.log('height' + h);

    $("#orientation").text(orientation + ' ' + w + ' / ' + h)

    if (orientation == 'horizontal'){
        $('#bodybox').css({'width': w})
        $('body').css({'font-size':'20px',
                       'width':w,
                       'padding':'20px'})
        $('#textbox').css({'padding': '20px',
                           'height': h * 0.6,
                           'width': w * .94})
        $('#imagebox').css({'width': w * .98,
                            'height': h * 0.4})
    }
    else if (orientation == 'vertical' || orientation == '0'){
        $('#bodybox').css({'width': w - 15,
                        'margin':'0px'})
        if (w < 400){
          $('body').css({'font-size':'13px'})
        }
        $('body').css({'width':w - 10})

        $('#imagebox').css({'width': w - 14,
                            'height': h * 0.4})
        $('#textbox').css({'padding': '10px',
                           'height': h * 0.6,
                           'width': w - 34})
    }
}
