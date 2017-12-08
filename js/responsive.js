function adjustimg(){
  console.log("adjust2")
    $('#imagebox img').css({'max-height': h/2, 'width':w})
                            //'border': '1px solid white'})
}

h = window.innerHeight
w = window.innerWidth
if (w<h){ orientation = 'vertical'; }
else { orientation = 'horizontal' }
if (orientation == 'horizontal'){
  h = h - 150;
  w = h/1.5;
}
else {
  w = w - 10;
  h = w*1.4;
}

var img = document.getElementById('imagebox').firstChild;
$('#request').click(function () {
  screenfull.request($('#bodybox')[0]);
});



$("#orientation").text(orientation + ' ' + w + ' / ' + h)

if (orientation == 'horizontal'){
  $('#bodybox').css({'width': w})
  $('body').css({'font-size':'20px',
                 'width':w})
  $('#textbox').css({'padding': '20px',
                     'height': h/2,
                     'width': w*.94})
  $('#imagebox').css({'width': w*.98,
                      'height': h/2})
}
else if (orientation == 'vertical' || orientation == '0'){
  $('#bodybox').css({'width': w-15,
                  'margin':'0px'})
  $('body').css({'font-size':'11px',
                 'width':w-10})
  $('#imagebox').css({'width': w-14,
                      'height': h/2})
  $('#textbox').css({'padding': '10px',
                     'height': h/2,
                     'width': w-34})
}
