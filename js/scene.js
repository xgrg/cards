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
    dict = {eq: 'equal to',
            get: 'higher or equal than',
            let: 'lower or equal than',
            gt: 'higher than',
            lt: 'lower than'}
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
  if (dict === undefined) return -1;
  var res = [];
  for (var i=0; i< dict.length; i++){
    res.push(dict[i][0]);
  }
  return res.indexOf('@time');
}


function countdown(time, index){// timerkey){
  interval = 1000;
  if (timing == false) return;
  $('span#time' + index).text(' (' + time + ')');
  if (time !=0){
    if (timing == true)
      window.setTimeout(function(){ countdown(time-1, index); }, interval);
  }
  else {
    timing = false;
    $('div#choice' + index).fadeOut(300);
    $('#availbox').show();
    $('#availbox').addClass("animated");
    $("#availbox").animateCss("fadeIn");
    console.log('Timer ended. Removing the following choice:')
    console.log($('div#choice' + index));
  }
}


function addLink(text, choice_effect_function, id, cond_function){
  var is_satisfied = true;
  var newtable = copyMap(vartable);
  cond_dict = choice_effect_function(newtable);

  time = is_time_in_choice(cond_dict)
  if (time != -1) { // choix chronométré
    cd = cond_dict[time][2];
    console.log('chrono: ' + cd);
    cond_dict.splice(time)
  }

  if (cond_function !== undefined)
    is_satisfied = cond_function();

  condition = ''
  if (cond_dict != undefined && cond_dict.length != 0) {
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
      console.log('b64:', b64)
      d = Base64.decode(decodeURIComponent(escape(b64)));
      d = d.replaceAll('\0', '')
      console.log('d: ', d)
      vartable = JSON.parse(d);
      timing = false;
      cardIndex = $('#dialogbox').attr('cardIndex');
      card_to_remove = cards_to_play.indexOf(parseInt(cardIndex));

      console.log('Closing ' + cardIndex + ' ' + storylets[cardIndex]['name']
                  + ' (choice ' + id + ')' + card_to_remove)
      cards_to_play.splice(card_to_remove, 1);

      console.log(cards_to_play);
      run_machine();

  })

  if (time != -1){
    timing = true;
    countdown(cd, id); //, timerkey);
  }
}


function playSequence(sequence, i, instantly){
  if (i===undefined)
    i=0;
  if (instantly == undefined)
    instantly = false;

  interval = sequence[i][1]
  if (instantly == true) interval = 0;
  console.log('instantly: ' + instantly)
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
    i = 0;
  if (interval === undefined || interval === false){
    interval = 300;
    instantly = false;
  }
  else {
    interval = 0;
  }
  console.log('Displaying choice ' + i)
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
      console.log('timing: ' + timing)
      if (timing == false){
          update_availbox();
          $('#availbox').show();
          $('#availbox').addClass("animated");
          $("#availbox").animateCss("fadeIn");
      }
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

function loadScene(cardIndex, instantly){
  if (card_in_progress == true) return undefined;
  else card_in_progress = true;
  if (instantly == undefined) instantly = false;

  scene = storylets[cardIndex];
  console.log('** Loading card ' + cardIndex + ' ' + storylets[cardIndex]['name']);
  console.log(scene);
  reset_scenebox(cardIndex);
  if (scene['audio'] != undefined && audio != scene['audio']){
    // load audio
    audio = scene['audio'];
    fn = 'audio/' + scene['audio'];
    $('audio').attr('src', fn);
    console.log('Audio:');
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


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


function update_cards(){
  // Available cards are re-evaluated at every turn
  // cards_to_play = [];

  // Conditions of every card are assessed
  for (var i = 0 ; i < storylets.length ; i++){
    if (storylets[i]['conditions']() == true){
          console.log('* ' + storylets[i]['name'] + ' is satisfied')
          cards_to_play.push(i);
    }
  }
  cards_to_play = cards_to_play.filter(onlyUnique)
}


function update_availbox(){
   html = ''
   console.log("update_availbox");
   //if (cards_to_play.length == 1) {
  //   $('#availbox').html(html);
  //   return
   //}
   for (var i = 0 ; i < cards_to_play.length ; i++){
      card = storylets[cards_to_play[i]]
      html = html + '<span cardIndex=' + cards_to_play[i] +
        '>' + card.name + '</span>'
   }
   $('#availbox').html(html);
   $('#availbox').show();

   $('#availbox span').click(function(){
       $('#availbox').hide();
       cardIndex = $(this).attr('cardIndex');
       console.log('Following card was picked from availbox: ' + cardIndex);
       console.log('Availbox: ' + cards_to_play);

       loadScene(cardIndex, accelerate)

   })
}


function run_machine() {
  update_cards();
  update_availbox();
  $('#availbox').hide();
  delete vartable['@action']
  console.log('cards_to_play: ' + cards_to_play)
  if (cards_to_play.length != 0){
    random = 0;// Math.floor((Math.random() * cards_to_play.length));
    cardIndex = cards_to_play[random];
    loadScene(cardIndex, accelerate)

  }
}
