function clearDialog(effect){
  if (effect === undefined) effect = "fadeOut";
  function clear(){
    $('#dialogbox').html("");
  }
  function fadeAll(effect, clear){
    $("#dialogbox div").each(function(){
      $(this).animateCss(effect);
    })
    clear();
  };
  fadeAll(effect, clear);
}

function addDialog(line, effect, clear){
   if (effect === undefined) effect = "fadeIn"
   if (clear !== undefined && clear == true){
     clearDialog();
   }

   html = $('#dialogbox').html();
   $('#dialogbox').html(html + "<div class=\"last\">"
      + line+ "</div>");
   $(".last").animateCss(effect);
   $(".last").removeClass("last");
}

function getJsonFromUrl(url) {
  var query = url;
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function addLink(text, choice_effect_function, id){
  var newtable = copyMap(vartable);
  choice_effect_function(newtable);
  console.log('new')
  console.log(newtable)

  b64 = unescape(encodeURIComponent(Base64.encode(JSON.stringify(newtable))))
  line = "<div><span>" + text +
      "</span></div> <br><div class=\"gobtn\"><a href=\"?f="
      + scenefile + "&d=" + b64 + "\">Go.</a></div>";

  $("div#choice"+id).html(line);
  $("div#choice"+id).addClass("choice")
  $('#choice'+id).animateCss('fadeIn');
  $("div#choice"+id).click(function(e){
      e.preventDefault();
      url = $(this).find('a')[0].href;
      b64 = getJsonFromUrl(url).d;
      console.log(b64)
      d = Base64.decode(decodeURIComponent(escape(b64)));
      d = d.replaceAll('\0', '')
      console.log(d)
      vartable = JSON.parse(d);
      run_machine();
  })
}

function playSequence(sequence, i){
  if (i===undefined)
    i=0;

  var accelerate = false;
  interval = sequence[i][1]
  if (accelerate == true) interval = 1000;
  sequence[i][0]();
  if (i < sequence.length - 1){
    window.setTimeout(
      function(){
        playSequence(sequence, i+1)
      }, interval);
  }
}

function displayChoice(choices, i, interval){
  if (i===undefined)
    i=0;
  if (interval ===undefined)
    interval = 300;

  console.log(choices[i][1])
  addLink(choices[i][0], choices[i][1], i+1);
  if (i < choices.length - 1){
    window.setTimeout(
      function(){
        displayChoice(choices, i+1)
      }, interval);
  }
  else if (i == choices.length - 1){
      card_in_progress = false;
  }
}

function initChoice(choices){
  var nb=choices.length;
  availChoices = [];
  for (var i=1;i<nb+1;i++){
    if (choices[i-1].length == 2 || choices[i-1][2]() == true){
      availChoices.push(choices[i-1]);
      html = $('#choicebox').html();
      j = availChoices.length;
      html = html + "<div id=\"choice"+ j +"\"></div>";
      $('#choicebox').html(html);
    }
  }
  displayChoice(availChoices)
}

function displayImage(img){
  html = "<img src=\"./images/"+img+"\">"

  $("#imagebox").html(html);
  adjustimg();
  $("#imagebox img").animateCss("fadeIn")

}

function loadScene(scene){
  if (card_in_progress == true) return undefined;
  else card_in_progress = true;

  console.log(scene);
  reset_scenebox();
  if (scene['audio'] != undefined && audio != scene['audio']){
    // load audio
    audio = scene['audio'];
    fn = 'audio/' + scene['audio'] + '.mp3';
    $('audio').attr('src', fn);
    console.log($('audio')[0]);
    $('audio').trigger('play');
  }
  scene['storylet'](function(){
    addDialog("&nbsp");
    if (scene['choices'] !== undefined){
      initChoice(scene['choices']);
    }
  })
}

function update_cards(){
  // Available cards are re-evaluated at every turn
  cards_to_play = [];

  // Conditions of every card are assessed
  for (var i=0;i<storylets.length;i++){
    if (storylets[i]['conditions']() == true){
          console.log(storylets[i]['name'] + ' is played')
          cards_to_play.push(i);
    }
  }
}

function update_availbox(){
   html = ''
   if (cards_to_play.length == 1) {
     $('#availbox').html(html);
     return
   }
   for (var i = 0 ; i < cards_to_play.length ; i++){
      card = storylets[cards_to_play[i]]
      html = html + '<span cardIndex='+ cards_to_play[i]+
        '>' + card.name + '</span>'
   }
   $('#availbox').html(html);
   $('#availbox span').click(function(){
       cardIndex = $(this).attr('cardIndex')
       console.log(cardIndex);
       card = storylets[cardIndex]
       loadScene(card)
   })
}

function run_machine() {
  update_cards();
  update_availbox();
  delete vartable['@action']
  console.log(cards_to_play)
  if (cards_to_play.length != 0){
    random = 0;// Math.floor((Math.random() * cards_to_play.length));
    card = storylets[cards_to_play[random]];
    loadScene(card)
    cards_to_play.splice(random, 1);
  }
}
