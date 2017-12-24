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

function dict_to_text(cond_dict, is_satisfied){

    if (is_satisfied == true)
      res = '<div><b>You see this for having </b>'
    else
      res = '<div><b>You need </b>'
    dict = {eq: 'equal to'}
    for (var i = 0 ; i < cond_dict.length ; i++){
      res = res + '<i>' + cond_dict[i][0] + '</i>';
      res = res + ' <b>' + dict[cond_dict[i][1]] + '</b> ';
      res = res + '<i>' + cond_dict[i][2] + '</i>';
      if (i < cond_dict.length - 1) res = res + ' <b>and</b> ';
    }
    if (is_satisfied == false)
      res = res + '<b> to unlock this</b>'
    return res + '.';
}

function is_time_in_choice(dict){
  var res = [];
  for (var i=0; i< dict.length; i++){
    res.push(dict[i][0]);
  }
  return res.indexOf('@time');
}

function countdown(time, index){
  interval = 1000;
  $('span#time'+index).text(' ('+time+')');
  if (time !=0){
    window.setTimeout(function(){ countdown(time-1, index); }, interval);
  }
  else {
    $('div#choice'+index).fadeOut(300);
    console.log($('div#choice'+index));
  }
}

function addLink(text, choice_effect_function, id, cond_function){
  var is_satisfied = true;
  if (cond_function !== undefined)
     is_satisfied = cond_function();

  var newtable = copyMap(vartable);
  cond_dict = choice_effect_function(newtable);

  time = is_time_in_choice(cond_dict)
  if (time != -1) {
    cd = cond_dict[time][2];
    console.log(cd);
    cond_dict.splice(time)
  }

  condition = ''
  if (cond_dict.length != 0) {
    condition = dict_to_text(cond_dict, is_satisfied)
  }
  b64 = unescape(encodeURIComponent(Base64.encode(JSON.stringify(newtable))))
  line = "<div><span>" + text + "</span></div> <br>" + condition;
  if (is_satisfied == true) {
    line = line + "<div class=\"gobtn\"><a href=\"?f="
      + scenefile + "&d=" + b64 + "\">Go.</a><span id='time"+id+"'></span></div>";
  }
  else {
    line = line + '<div class=\"gobtn\">Go.</div>';
  }

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

  if (time != -1)
    countdown(cd, id);

}

function playSequence(sequence, i, instantly){
  if (i===undefined)
    i=0;
  if (instantly == undefined)
    instantly = false;

  interval = sequence[i][1]
  if (instantly == true) interval = 0;
  console.log(instantly)
  sequence[i][0]();
  if (i < sequence.length - 1){
    window.setTimeout(
      function(){
        playSequence(sequence, i + 1, instantly)
      }, interval);
  }
}

function displayChoice(choices, i, instantly, interval){
  if (i === undefined)
    i=0;
  if (interval === undefined || interval === false){
    interval = 300;
    instantly = false;
  }
  else {
    interval = 0;
  }
  console.log(choices[i][1])
  addLink(choices[i][0], choices[i][1], i+1, choices[i][2]);
  if (i < choices.length - 1){
    window.setTimeout(
      function(){
        displayChoice(choices, i+1, instantly, interval)
      }, interval);
  }
  else if (i == choices.length - 1){
      card_in_progress = false;
      $('#availbox').show();
      $('#availbox').addClass("animated");
      $("#availbox").animateCss("fadeIn");

  }
}

function initChoice(choices, instantly){
  if (instantly == undefined) instantly = false;
  var nb = choices.length;
  availChoices = [];
  for (var i = 1 ; i < nb + 1 ; i++){

    //if (choices[i-1].length == 2){
      availChoices.push(choices[i-1]);
      html = $('#choicebox').html();
      j = availChoices.length;
      html = html + "<div id=\"choice"+ j +"\"></div>";
      $('#choicebox').html(html);
    //}
  }
  displayChoice(availChoices, 0, instantly)
}

function displayImage(img){
  html = "<img src=\"./images/"+img+"\">"

  $("#imagebox").html(html);
  adjustimg();
  $("#imagebox img").animateCss("fadeIn")

}

function loadScene(scene, instantly){
  if (card_in_progress == true) return undefined;
  else card_in_progress = true;
  if (instantly == undefined) instantly = false;

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
      initChoice(scene['choices'], instantly);
    }
  }, instantly)
}

function update_cards(){
  // Available cards are re-evaluated at every turn
  cards_to_play = [];

  // Conditions of every card are assessed
  for (var i = 0 ; i < storylets.length ; i++){
    if (storylets[i]['conditions']() == true){
          console.log(storylets[i]['name'] + ' is played')
          cards_to_play.push(i);
    }
  }
}

function update_availbox(){
   html = ''
   console.log("update_availbox");
   if (cards_to_play.length == 1) {
     $('#availbox').html(html);
     return
   }
   for (var i = 0 ; i < cards_to_play.length ; i++){
      card = storylets[cards_to_play[i]]
      html = html + '<span cardIndex=' + cards_to_play[i] +
        '>' + card.name + '</span>'
   }
   $('#availbox').html(html);
    $('#availbox').hide();
   $('#availbox span').click(function(){
       cardIndex = $(this).attr('cardIndex')
       console.log(cardIndex);
       card = storylets[cardIndex]
       loadScene(card, true)
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
    loadScene(card, accelerate)
    cards_to_play.splice(random, 1);
  }
}
