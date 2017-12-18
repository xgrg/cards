CaScene1 = {
  name: 'CaScene1',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "0"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallter.jpg")}, 1000],
    [function(){addDialog("<p><em>Dos quarts de un, carretera de Vallter, Pirineus Catalans</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Els graus devallen a mesura que es segueixin les corbes. A prop del parquing casi buit de la estació de Vallter 2000, el termometre indica 4 petits graus.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Desprès de que em posés unes capes més, que fes una ultima verificació de la motxilla i un ràpid entrepà, i estaré llest per sortir.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Portaré la meva jaqueta tallavent.", 
      function(t){
       t["sc"] = "1";
       t["equip"] = "coupevent";
      cond_dict=[];
return cond_dict;}],
   ["Portaré el forro polar, abric i jaqueta tallavent.", 
      function(t){
       t["sc"] = "1";
       t["equip"] = "polaire";
      cond_dict=[];
return cond_dict;}],
   ["Ho he pensat, i finalment surto amb la samarreta.", 
      function(t){
       t["sc"] = "1";
       t["equip"] = "tshirt";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene2 = {
  name: 'CaScene2',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "1"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallter2.jpg")}, 1000],
    [function(){addDialog("<p><em>Son les dues de la tarda, hora de la sortida de Vallter.</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>El camí comença amb una pujada seguint el GR10.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>L'estació s’allunya poc a poc darrere.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Encara que les remuntades mecàniques fossin apagades, unes manxes de neu semblen avisar que la temporada de esqui s’està apropant.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La pujada es fa sense cap dificultat.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["La pujada dona calor. Trec el meu forro polar.", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[["equip","eq","polaire"]];
return cond_dict;}, function(){function a1(){ return (vartable["equip"]== "polaire"); };return (a1());} ],
   ["Endavant", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene_croise_marcheurs = {
  name: 'CaScene_croise_marcheurs',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "scene_croise_marcheurs"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Saludo a uns excursionistes que ja estan baixant. Efectivament sembla més una hora per baixar que per pujar.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Un d’ells, que portava un vestit vermell de socorrista, es dirigeix a mi:</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p><em>\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"</em></p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Si, puja i baixa (mentida)", 
      function(t){
       t["sc"] = "mensonge";
      cond_dict=[];
return cond_dict;}],
   ["No, cap al refugi del Alemany (veritat)", 
      function(t){
       t["sc"] = "verite";
      cond_dict=[];
return cond_dict;}],
   ["No respondre i seguir el camí.", 
      function(t){
       t["sc"] = "nepasrepondre";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene_mensonge = {
  name: 'CaScene_mensonge',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "mensonge"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>L’home em dirigeix una mirada escèptica i continua la seva baixada.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Continuo la pujada.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "2";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene_nepasrepondre = {
  name: 'CaScene_nepasrepondre',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "nepasrepondre"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "2";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene_verite = {
  name: 'CaScene_verite',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "verite"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p><em>\"- Que tinguis bona ruta.\"</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Segueixo amb la pujada.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "2";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene3 = {
  name: 'CaScene3',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "2"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("borne.jpg")}, 1000],
    [function(){addDialog("<p>Arribant a la Porteille de Mentet, una fita senyala la frontera amb França. El rellotge marca les 3.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Es massa tard per passar al Nord. Torno cap a Vallter.", 
      function(t){
       t["sc"] = "back-to-vallter";
      cond_dict=[];
return cond_dict;}],
   ["Segueixo.", 
      function(t){
       t["sc"] = "3";
      cond_dict=[];
return cond_dict;}],
   ["El vent bufa al coll. Em poso la meva jaqueta talla-vent per seguir el camí.", 
      function(t){
       t["sc"] = "3";
      cond_dict=[["equip","eq","tshirt"]];
return cond_dict;}, function(){function a1(){ return (vartable["equip"]== "tshirt"); };return (a1());} ],
]
}

CaScene3b = {
  name: 'CaScene3b',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "back-to-vallter"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Seguretat abans de tot. Baixo cap a Vallter i torno al cotxe fins i tot abans la posta del sol.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Però sé una cosa : ja hi tornaré.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Fi.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Tornar al inici", 
      function(t){
       t["sc"] = "0";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene4 = {
  name: 'CaScene4',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "3"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallee.jpg")}, 1000],
    [function(){addDialog("<p>Al passar el coll es pot veure pel canto Nord un vall amb bosc tirant recta cap al poble de Mentet.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>A mesura que l’ombra l’invadeixi, la temperatura es fa més fresca.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les poques manxes de neu ara son geleres orgulloses.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La baixada es fa sense dificultat, els passos es segueixen amb seguretat fins l’entrada del bosc.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "4";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene5 = {
  name: 'CaScene5',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "4"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("bois.jpg")}, 1000],
    [function(){addDialog("<p>El camí segueix tranquil·lament una riera que porta igualment les primeres marques del proper invern.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les marques es segueixen al llarg del sender.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "5";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene6 = {
  name: 'CaScene6',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "5"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("berger.jpg")}, 1000],
    [function(){addDialog("<p>Una cabana apareix al fons a ma esquerra.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Esta fora del sender. Segueixo el meu camí sense hi fer cas.", 
      function(t){
       t["sc"] = "7";
      cond_dict=[];
return cond_dict;}],
   ["M’hi apropo.", 
      function(t){
       t["sc"] = "6";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene7 = {
  name: 'CaScene7',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "6"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("berger2.jpg")}, 1000],
    [function(){addDialog("<p>Les persianes estan tancades.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La xemeneia no fa fum.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Només un crani de vaca aculleix els senderistes que passen.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Una serradura sobre la porta.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Sembla la cabana del pastor.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Tancada, que no fa sorpresa.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Uns trossos bonics de llenya estan per la terra davant la cabana.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>A prop, sobre una gran pedra plana, es llegeix l’inscripciò gravada “Refugi a 250 m”</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Segueixo amb la meva ruta.", 
      function(t){
       t["sc"] = "7";
      cond_dict=[];
return cond_dict;}],
   ["Recullo un tros de fusta abans d’anar mes endavant.", 
      function(t){
       t["sc"] = "7";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene8 = {
  name: 'CaScene8',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "7"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("alemany.jpg")}, 1000],
    [function(){addDialog("<p>Trobo una nova cabana, oberta. Es el refugi de l’Alemany.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "8";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene9 = {
  name: 'CaScene9',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "8"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("interieur.jpg")}, 1000],
    [function(){addDialog("<p>A dins, tota la comoditat d’un refugi lliure.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Xemeneia, taula, bancs, serra, escombra, pala, i lliteres.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>En un racó de la cabana es troben rams de pins amb agulles encara verdes.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Encara no son les 5 de la tarda, però el vall ja esta totalment en l’ombra.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Obro les persianes.", 
      function(t){
       t["sc"] = "9";
      cond_dict=[];
return cond_dict;}],
   ["Cal no perdre temps. Cal tallar fusta abans de que la nit caigui.", 
      function(t){
       t["sc"] = "9";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene10 = {
  name: 'CaScene10',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "9"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Cap fusta seca a prop, i la majoria dels arbres al voltant de la cabana ja mostren marques de destral.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Només queden troncs enormes per la terra.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Començo a serrar un d’ells.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Aquest tros es pesat i necessitara segurament ser tallat de nou a dins la cabana.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "10";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene11 = {
  name: 'CaScene11',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "10"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>A les 6 de la tarda, ja es fa fosc i et termòmetre a dins el refugi ronda els 0°C.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Començo un foc amb pinyes i unes branques. La fusta esta verda i té dificultat per encendre’s.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Encenc una espelma que poso en mig de la llar del foc. Les agulles de pins crepiten, resisteixen...</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "11";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene12 = {
  name: 'CaScene12',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "11"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("feu.jpg")}, 1000],
    [function(){addDialog("<p>El foc finalment s’ha encès.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Introdueixo el primer tros de fusta i poso el segon a prop, amb l’esperança de fer-ho secar el mes aviat possible.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La llar del foc distribueix una calor agradable però que devalla molt ràpid a mesura que t’en allunyes.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "12";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene13 = {
  name: 'CaScene13',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "12"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("tisane.jpg")}, 1000],
    [function(){addDialog("<p>Un cop el sopar ha acabat, encara no son les 9 del vespre però em preparo per entrar en el sac de dormir</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Abans d’això, tinc cura d’arreglar les coses, en previsió de possibles visitants nocturns.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Amago la motxilla sota el banc.", 
      function(t){
       t["sc"] = "13";
       t["sac"] = "banc";
      cond_dict=[];
return cond_dict;}],
   ["Penjo la motxilla a un dels claus clavats dels murs de la cabana.", 
      function(t){
       t["sc"] = "13";
       t["sac"] = "clou";
      cond_dict=[];
return cond_dict;}],
   ["Trec el menjar de la motxilla i el penjo d’un dels fils que creua la sala.", 
      function(t){
       t["sc"] = "13";
       t["sac"] = "nourriture";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene14nourrit = {
  name: 'CaScene14nourrit',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "13"); };function a2(){ return (vartable["sac"]== "nourriture"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Amb el foc que es va consumint poc a poc, i unes mantes del refugi de sobres, la nit tindrà lloc sense cap problema de fred.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "14";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene14clou = {
  name: 'CaScene14clou',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "13"); };function a2(){ return (vartable["sac"]== "clou"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>En mig de la nit, uns sorollets es posen a molestar el meu son.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Obro un ull i vigilo el lloc.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Un ratolí esta al voltant de la meva motxilla penjada i esta rosegant una de les meves barretes energètiques a traves d’una butxaca !</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Persegueixo la lladra i començo a penjar el menjar fora de la motxilla amb un fil.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>La resta de la nit serà amb una tranquil·litat perfecta.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "14";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene14banc = {
  name: 'CaScene14banc',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "13"); };function a2(){ return (vartable["sac"]== "banc"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Començo per recollir les meves coses i… quin HORROR !</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les butxaques de la meva motxilla han sigut rosegades per totes bandes per visitors nocturns !</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Ara una bona part de les meves reserves de menjar pot treure’s.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Mentre em queixo de aquest accident, acabo de preparar-me per la sortida.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "15";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene15 = {
  name: 'CaScene15',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "14"); };function a2(){ return (vartable["sac"]!= "banc"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("neige.jpg")}, 1000],
    [function(){addDialog("<p>Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Encenc el foc de nou i hi poso l’ultim tros de fusta, mentre el esmorzar</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Apago el foc amb neu, oferint l’ultim tros de fusta als propers inquilins, recullo les coses i em preparo per la sortida.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "15";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene16 = {
  name: 'CaScene16',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "15"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("presque-mantet.jpg")}, 1000],
    [function(){addDialog("<p>La neu deixa de caure i deixa pas a un cel blau.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Cap a baix s’endivinen unes cases.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "16";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene17 = {
  name: 'CaScene17',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "16"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vue-mantet.jpg")}, 1000],
    [function(){addDialog("<p>Es el poble de Mentet, banyat per la llum del sol de tardor.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "17";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene18 = {
  name: 'CaScene18',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "17"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("panneau.jpg")}, 1000],
    [function(){addDialog("<p>Segueixo amb la baixada i arribo al poble.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Son les 12 i mitja.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Endavant", 
      function(t){
       t["sc"] = "18";
      cond_dict=[];
return cond_dict;}],
]
}

CaScene19 = {
  name: 'CaScene19',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "18"); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("mantet.jpg")}, 1000],
    [function(){addDialog("<p>To be continued.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Tornar al inici", 
      function(t){
       t["sc"] = "0";
      cond_dict=[];
return cond_dict;}],
]
}

preload_list = ["images/vallter.jpg.jpg", "images/vallter2.jpg.jpg", "images/borne.jpg.jpg", "images/vallee.jpg.jpg", "images/bois.jpg.jpg", "images/berger.jpg.jpg", "images/berger2.jpg.jpg", "images/alemany.jpg.jpg", "images/interieur.jpg.jpg", "images/feu.jpg.jpg", "images/tisane.jpg.jpg", "images/neige.jpg.jpg", "images/presque-mantet.jpg.jpg", "images/vue-mantet.jpg.jpg", "images/panneau.jpg.jpg", "images/mantet.jpg.jpg"]

storylets.push(CaScene1);
storylets.push(CaScene2);
storylets.push(CaScene_croise_marcheurs);
storylets.push(CaScene_mensonge);
storylets.push(CaScene_nepasrepondre);
storylets.push(CaScene_verite);
storylets.push(CaScene3);
storylets.push(CaScene3b);
storylets.push(CaScene4);
storylets.push(CaScene5);
storylets.push(CaScene6);
storylets.push(CaScene7);
storylets.push(CaScene8);
storylets.push(CaScene9);
storylets.push(CaScene10);
storylets.push(CaScene11);
storylets.push(CaScene12);
storylets.push(CaScene13);
storylets.push(CaScene14nourrit);
storylets.push(CaScene14clou);
storylets.push(CaScene14banc);
storylets.push(CaScene15);
storylets.push(CaScene16);
storylets.push(CaScene17);
storylets.push(CaScene18);
storylets.push(CaScene19);
