scene0 = {
  name: 'Début',
  conditions:function(){
    function a1(){ return (vartable["@action"]== "start"); };return (a1());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([    [choice, 0]],
 0, instantly)
  },
  choices:[
   ["Démarrer1", 
      function(t){
       t["@action"] = "begin";
      cond_dict=[];
return cond_dict;}],
   ["Rendre visite à Antoine", 
      function(t){
       t["imprevus"] = 91;
       t["@action"] = "visite-antoine";
      cond_dict=[];
return cond_dict;}],
]
}

scene1 = {
  name: 'SceneChoixLangues',
  audio:"bg.mp3",
  conditions:function(){
    function a1(){ return (vartable["@action"]== "begin"); };return (a1());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Choisissez une langue.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Tria una llengua.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Français", 
      function(t){
       t["lang"] = "fr";
       t["sc"] = 0;
      cond_dict=[["@time", "eq", 10]];
return cond_dict;}, function(){return (true);} ],
   ["Catalan", 
      function(t){
       t["lang"] = "ca";
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
]
}

scene2 = {
  name: 'SceneChoixLangues2',
  audio:"bg.mp3",
  conditions:function(){
    function a1(){ return (vartable["@action"]== "begin"); };return (a1());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Autre texte !!!</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Youpi !</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Français", 
      function(t){
       t["lang"] = "fr";
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
   ["Català", 
      function(t){
       t["lang"] = "ca";
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
]
}

scene3 = {
  name: 'FrScene1',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 0); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("bg2.gif")}, 1000],
    [function(){addDialog("<p><em>13 heures 30, route de Vallter, Pyrénées Catalanes</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les degrés fondent à mesure que s’enchaînent les virages. A l’approche du parking quasi-vide de la station de Vallter 2000, le compteur indique 4 timides degrés.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Le temps d’enfiler quelques couches supplémentaires, d’une dernière vérification du sac et d’un rapide casse-croûte et je serai prêt(e) à partir.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["J’enfile mon coupe-vent.", 
      function(t){
       t["equip"] = "coupevent";
       t["sc"] = 1;
       t["dice"] = Math.floor(Math.random() * 100);
      cond_dict=[];
return cond_dict;}],
   ["J’enfile polaire, doudoune et coupe-vent.", 
      function(t){
       t["equip"] = "polaire";
       t["sc"] = 1;
      cond_dict=[];
return cond_dict;}],
   ["Réflexion faite, je pars en t-shirt.", 
      function(t){
       t["equip"] = "tshirt";
       t["sc"] = 1;
      cond_dict=[];
return cond_dict;}],
]
}

scene4 = {
  name: 'FrScene2',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 1); };function a2(){ return (vartable["equip"]!= "polaire"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallter2.jpg")}, 1000],
    [function(){addDialog("<p><em>14 heures, départ de la station de Vallter</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Le chemin débute en montée suivant le tracé du GR10.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La station s’éloigne progressivement dans le dos.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La montée s’effectue sans encombres.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer.", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[];
return cond_dict;}],
   ["Le dé a fait plus de 50.", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[["dice", "get", 50]];
return cond_dict;}, function(){function a1(){ return (vartable["dice"]>= 50); };return (a1());} ],
   ["Le dé a fait moins de 50.", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[["dice", "lt", 50]];
return cond_dict;}, function(){function a1(){ return (vartable["dice"]< 50); };return (a1());} ],
]
}

scene5 = {
  name: 'FrScene2avecpolaire',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 1); };function a2(){ return (vartable["equip"]== "polaire"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallter2.jpg")}, 1000],
    [function(){addDialog("<p><em>14 heures, départ de la station de Vallter</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Le chemin débute en montée suivant le tracé du GR10.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La station s’éloigne progressivement dans le dos.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La montée s’effectue sans encombres mais je transpire rapidement sous la polaire, doudone, etc.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["La montée donne chaud. Je retire ma polaire.", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[];
return cond_dict;}],
]
}

scene6 = {
  name: 'FrScene2random',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 1); };function a2(){ return (Math.floor(Math.random() * 100)> 2); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallter2.jpg")}, 1000],
    [function(){addDialog("<p>C'est un test !!</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer.", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[];
return cond_dict;}],
]
}

scene7 = {
  name: 'FrScene_croise_marcheurs',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "scene_croise_marcheurs"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p><em>\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"</em></p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Si, puja i baixa (mensonge)", 
      function(t){
       t["sc"] = "mensonge";
      cond_dict=[];
return cond_dict;}],
   ["No, cap al refugi del Alemany (vérité)", 
      function(t){
       t["sc"] = "verite";
      cond_dict=[];
return cond_dict;}],
   ["Ne pas répondre et poursuivre sa route.", 
      function(t){
       t["sc"] = "nepasrepondre";
      cond_dict=[];
return cond_dict;}],
]
}

scene8 = {
  name: 'FrScene_mensonge',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "mensonge"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>L'homme me lance un regard sceptique et poursuit sa descente.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je poursuis la montée.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 2;
      cond_dict=[];
return cond_dict;}],
]
}

scene9 = {
  name: 'FrScene_nepasrepondre',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "nepasrepondre"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Je poursuis la montée sans adresser un regard à l'homme, qui montre une réaction de surprise.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 2;
      cond_dict=[];
return cond_dict;}],
]
}

scene10 = {
  name: 'FrScene_verite',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "verite"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p><em>\"- Que tinguis bona ruta.\"</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je poursuis la montée.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 2;
      cond_dict=[];
return cond_dict;}],
]
}

scene11 = {
  name: 'FrScene3',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 2); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("borne.jpg")}, 1000],
    [function(){addDialog("<p>A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Il est tard pour passer au Nord. Je redescends vers Vallter.", 
      function(t){
       t["sc"] = "back-to-vallter";
      cond_dict=[];
return cond_dict;}],
   ["Je continue.", 
      function(t){
       t["sc"] = 3;
      cond_dict=[];
return cond_dict;}],
   ["Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.", 
      function(t){
       t["sc"] = 3;
      cond_dict=[["equip", "eq", "tshirt"]];
return cond_dict;}, function(){function a1(){ return (vartable["equip"]== "tshirt"); };return (a1());} ],
]
}

scene12 = {
  name: 'FrScene3b',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "back-to-vallter"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>La sécurité avant tout. Je redescends vers Vallter et suis de retour à la voiture avant même le coucher du soleil.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Mais une chose est sûre : je reviendrai.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Fin.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Recommencer", 
      function(t){
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
]
}

scene13 = {
  name: 'FrScene4',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 3); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallee.jpg")}, 1000],
    [function(){addDialog("<p>Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les taches éparses de neige sont à présent de fiers névés.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 4;
      cond_dict=[];
return cond_dict;}],
]
}

scene14 = {
  name: 'FrScene5',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 4); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("bois.jpg")}, 1000],
    [function(){addDialog("<p>Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les balises se suivent le long du sentier.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 5;
      cond_dict=[];
return cond_dict;}],
]
}

scene15 = {
  name: 'FrScene6',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 5); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("berger.jpg")}, 1000],
    [function(){addDialog("<p>Une cabane apparaît au fond sur la gauche.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["C’est hors du sentier. Je poursuis ma route sans y prêter attention.", 
      function(t){
       t["sc"] = 7;
      cond_dict=[];
return cond_dict;}],
   ["Je me rapproche.", 
      function(t){
       t["sc"] = 6;
      cond_dict=[];
return cond_dict;}],
]
}

scene16 = {
  name: 'FrScene7',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 6); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("berger2.jpg")}, 1000],
    [function(){addDialog("<p>Les volets sont fermés.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>La cheminée ne fume pas.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Seul un crâne de vache accueille les randonneurs de passage.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Une serrure sur la porte.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Ce doit être la cabane du berger.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Fermée, sans surprise.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Quelques beaux morceaux de bois jonchent le sol devant la cabane.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>A proximité, sur une large pierre plate, se lit l’inscription gravée <em>“Refuge à 250 m”</em>.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Je reprends ma route", 
      function(t){
       t["sc"] = 7;
      cond_dict=[];
return cond_dict;}],
   ["Je ramasse un morceau de bois avant de poursuivre mon chemin", 
      function(t){
       t["sc"] = 7;
      cond_dict=[];
return cond_dict;}],
]
}

scene17 = {
  name: 'FrScene8',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 7); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("alemany.jpg")}, 1000],
    [function(){addDialog("<p>Je tombe sur une nouvelle cabane, ouverte. C’est le <em>refuge de l’Alemany</em>.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 8;
      cond_dict=[];
return cond_dict;}],
]
}

scene18 = {
  name: 'FrScene9',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 8); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("interieur.jpg")}, 1000],
    [function(){addDialog("<p>A l’intérieur, tout le confort d’un refuge libre.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Cheminée, table, bancs, scie, balai, pelle, et couchages superposés.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["J’ouvre les volets", 
      function(t){
       t["sc"] = 9;
      cond_dict=[];
return cond_dict;}],
   ["Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.", 
      function(t){
       t["sc"] = 9;
      cond_dict=[];
return cond_dict;}],
]
}

scene19 = {
  name: 'FrScene10',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 9); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Ne restent que d’énormes troncs au sol.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J’entreprends de scier l’un d’entre eux à son extrémité.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 10;
      cond_dict=[];
return cond_dict;}],
]
}

scene20 = {
  name: 'FrScene11',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 10); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0°C.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 11;
      cond_dict=[];
return cond_dict;}],
]
}

scene21 = {
  name: 'FrScene12',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 11); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("feu.jpg")}, 1000],
    [function(){addDialog("<p>Le feu finit par démarrer.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 12;
      cond_dict=[];
return cond_dict;}],
]
}

scene22 = {
  name: 'FrScene13',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 12); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("tisane.jpg")}, 1000],
    [function(){addDialog("<p>Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Je cache le sac-à-dos sous un banc.", 
      function(t){
       t["sc"] = 13;
       t["sac"] = "banc";
      cond_dict=[];
return cond_dict;}],
   ["J’accroche le sac à l’un des clous plantés aux murs de la cabane", 
      function(t){
       t["sc"] = 13;
       t["sac"] = "clou";
      cond_dict=[];
return cond_dict;}],
   ["Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.", 
      function(t){
       t["sc"] = 13;
       t["sac"] = "nourriture";
      cond_dict=[];
return cond_dict;}],
]
}

scene23 = {
  name: 'FrScene14nourrit',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 13); };function a2(){ return (vartable["sac"]== "nourriture"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit passera en étant protégé du froid.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 14;
      cond_dict=[];
return cond_dict;}],
]
}

scene24 = {
  name: 'FrScene14clou',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 14); };function a2(){ return (vartable["sac"]== "clou"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Au milieu de la nuit, de petits bruits perturbent mon sommeil.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J'ouvre l'oeil et inspecte les lieux.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Une souris est affairée autour de mon sac pendu et grignote une de mes barres énergétiques à travers l'une des poches !</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je chasse la voleuse et entreprends de suspendre la nourriture hors du sac au bout d'un fil.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Le reste de la nuit sera d'une tranquilité absolue.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 14;
      cond_dict=[];
return cond_dict;}],
]
}

scene25 = {
  name: 'FrScene14banc',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 13); };function a2(){ return (vartable["sac"]== "banc"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J'entreprends de rassembler mes affaires et... HORREUR !</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les poches de mon sac ont été rongées de toutes parts par des visiteurs nocturnes !</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Une bonne partie de mes réserves en nourriture est bonne à être jetée.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Tout en pestant contre cette mésaventure, je finis de me préparer pour le départ.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 15;
      cond_dict=[];
return cond_dict;}],
]
}

scene26 = {
  name: 'FrScene15',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 14); };function a2(){ return (vartable["sac"]!= "banc"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("neige.jpg")}, 1000],
    [function(){addDialog("<p>Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 15;
      cond_dict=[];
return cond_dict;}],
]
}

scene27 = {
  name: 'FrScene16',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 15); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("presque-mantet.jpg")}, 1000],
    [function(){addDialog("<p>La neige fait place au grand ciel bleu.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>En contrebas se devinent quelques maisons.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 16;
      cond_dict=[];
return cond_dict;}],
]
}

scene28 = {
  name: 'FrScene17',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 16); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vue-mantet.jpg")}, 1000],
    [function(){addDialog("<p>Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 17;
      cond_dict=[];
return cond_dict;}],
]
}

scene29 = {
  name: 'FrScene18',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 17); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("panneau.jpg")}, 1000],
    [function(){addDialog("<p>Je poursuis la descente et parviens au village.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Il est 12 heures 30.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = 18;
      cond_dict=[];
return cond_dict;}],
]
}

scene30 = {
  name: 'FrScene19',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 18); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("mantet.jpg")}, 1000],
    [function(){addDialog("<p>A suivre.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Recommencer", 
      function(t){
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
]
}

scene31 = {
  name: 'CaScene1',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 0); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 1;
       t["equip"] = "coupevent";
      cond_dict=[];
return cond_dict;}],
   ["Portaré el forro polar, abric i jaqueta tallavent.", 
      function(t){
       t["sc"] = 1;
       t["equip"] = "polaire";
      cond_dict=[];
return cond_dict;}],
   ["Ho he pensat, i finalment surto amb la samarreta.", 
      function(t){
       t["sc"] = 1;
       t["equip"] = "tshirt";
      cond_dict=[];
return cond_dict;}],
]
}

scene32 = {
  name: 'CaScene2',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 1); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
      cond_dict=[["equip", "eq", "polaire"]];
return cond_dict;}, function(){function a1(){ return (vartable["equip"]== "polaire"); };return (a1());} ],
   ["Endavant", 
      function(t){
       t["sc"] = "scene_croise_marcheurs";
      cond_dict=[];
return cond_dict;}],
]
}

scene33 = {
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

scene34 = {
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
       t["sc"] = 2;
      cond_dict=[];
return cond_dict;}],
]
}

scene35 = {
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
       t["sc"] = 2;
      cond_dict=[];
return cond_dict;}],
]
}

scene36 = {
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
       t["sc"] = 2;
      cond_dict=[];
return cond_dict;}],
]
}

scene37 = {
  name: 'CaScene3',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 2); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = back-to-vallter;
      cond_dict=[];
return cond_dict;}],
   ["Segueixo.", 
      function(t){
       t["sc"] = 3;
      cond_dict=[];
return cond_dict;}],
   ["El vent bufa al coll. Em poso la meva jaqueta talla-vent per seguir el camí.", 
      function(t){
       t["sc"] = 3;
      cond_dict=[["equip", "eq", "tshirt"]];
return cond_dict;}, function(){function a1(){ return (vartable["equip"]== "tshirt"); };return (a1());} ],
]
}

scene38 = {
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
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
]
}

scene39 = {
  name: 'CaScene4',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 3); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 4;
      cond_dict=[];
return cond_dict;}],
]
}

scene40 = {
  name: 'CaScene5',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 4); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 5;
      cond_dict=[];
return cond_dict;}],
]
}

scene41 = {
  name: 'CaScene6',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 5); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 7;
      cond_dict=[];
return cond_dict;}],
   ["M’hi apropo.", 
      function(t){
       t["sc"] = 6;
      cond_dict=[];
return cond_dict;}],
]
}

scene42 = {
  name: 'CaScene7',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 6); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 7;
      cond_dict=[];
return cond_dict;}],
   ["Recullo un tros de fusta abans d’anar mes endavant.", 
      function(t){
       t["sc"] = 7;
      cond_dict=[];
return cond_dict;}],
]
}

scene43 = {
  name: 'CaScene8',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 7); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 8;
      cond_dict=[];
return cond_dict;}],
]
}

scene44 = {
  name: 'CaScene9',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 8); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 9;
      cond_dict=[];
return cond_dict;}],
   ["Cal no perdre temps. Cal tallar fusta abans de que la nit caigui.", 
      function(t){
       t["sc"] = 9;
      cond_dict=[];
return cond_dict;}],
]
}

scene45 = {
  name: 'CaScene10',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 9); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 10;
      cond_dict=[];
return cond_dict;}],
]
}

scene46 = {
  name: 'CaScene11',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 10); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 11;
      cond_dict=[];
return cond_dict;}],
]
}

scene47 = {
  name: 'CaScene12',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 11); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 12;
      cond_dict=[];
return cond_dict;}],
]
}

scene48 = {
  name: 'CaScene13',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 12); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 13;
       t["sac"] = "banc";
      cond_dict=[];
return cond_dict;}],
   ["Penjo la motxilla a un dels claus clavats dels murs de la cabana.", 
      function(t){
       t["sc"] = 13;
       t["sac"] = "clou";
      cond_dict=[];
return cond_dict;}],
   ["Trec el menjar de la motxilla i el penjo d’un dels fils que creua la sala.", 
      function(t){
       t["sc"] = 13;
       t["sac"] = "nourriture";
      cond_dict=[];
return cond_dict;}],
]
}

scene49 = {
  name: 'CaScene14nourrit',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 13); };function a2(){ return (vartable["sac"]== "nourriture"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
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
       t["sc"] = 14;
      cond_dict=[];
return cond_dict;}],
]
}

scene50 = {
  name: 'CaScene14clou',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 13); };function a2(){ return (vartable["sac"]== "clou"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
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
       t["sc"] = 14;
      cond_dict=[];
return cond_dict;}],
]
}

scene51 = {
  name: 'CaScene14banc',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 13); };function a2(){ return (vartable["sac"]== "banc"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
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
       t["sc"] = 15;
      cond_dict=[];
return cond_dict;}],
]
}

scene52 = {
  name: 'CaScene15',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 14); };function a2(){ return (vartable["sac"]!= "banc"); };function a3(){ return (vartable["lang"]== "ca"); };return (a1() && a2() && a3());
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
       t["sc"] = 15;
      cond_dict=[];
return cond_dict;}],
]
}

scene53 = {
  name: 'CaScene16',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 15); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 16;
      cond_dict=[];
return cond_dict;}],
]
}

scene54 = {
  name: 'CaScene17',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 16); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 17;
      cond_dict=[];
return cond_dict;}],
]
}

scene55 = {
  name: 'CaScene18',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 17); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 18;
      cond_dict=[];
return cond_dict;}],
]
}

scene56 = {
  name: 'CaScene19',
  conditions:function(){
    function a1(){ return (vartable["sc"]== 18); };function a2(){ return (vartable["lang"]== "ca"); };return (a1() && a2());
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
       t["sc"] = 0;
      cond_dict=[];
return cond_dict;}],
]
}

scene57 = {
  name: 'Test',
  conditions:function(){
    function a1(){ return (vartable["@action"]== "start"); };return (a1());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Démarrer</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer.", 
      function(t){
       t["imprevus"] = 91;
       t["@action"] = "visite-antoine";
      cond_dict=[];
return cond_dict;}],
]
}

scene58 = {
  name: 'Introduction',
  conditions:function(){
    function a1(){ return (vartable["@action"]== "visite-antoine"); };return (a1());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Antoine n’avait changé en rien même après toutes ces années. Seul deux verres de lunettes s’étaient ajoutés à son portrait.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Ce détail mis à part, c’était le même.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Il venait d’emménager au cours de l’année dans cet appartement au pied du Cap Martin, un peu vieillot mais fort agréable au demeurant, avec une petite vue mer et surtout sur les montagnes à l’est, qui baignaient alors dans la lumière orangée du couchant.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Au milieu de la conversation, mon regard fut attiré au loin...", 
      function(t){
       t["@action"] = "feu-plan-lion";
       t["imprevus"] = t["imprevus"] - 10;
      cond_dict=[["imprevus", "gt", 90]];
return cond_dict;}, function(){function a1(){ return (vartable["imprevus"]> 90); };return (a1());} ],
]
}

scene59 = {
  name: 'Incendie-plan-lion',
  conditions:function(){
    function a1(){ return (vartable["@action"]== "feu-plan-lion"); };return (a1());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("bg3.png")}, 1000],
    [function(){addDialog("<p>Dans le coin de mon oeil une imposante masse sombre attira soudain mon regard. Au loin la montagne était en proie aux flammes et je reconnus alors le Plan du Lion à travers un immense nuage de fumée noire.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je m’interrompis aussitôt devant l’envergure du feu.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p><em>- Comment s’est-il déclenché ?</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("<p><em>- Des gens sont-ils en danger ?</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("<p><em>- Sera-t-il maîtrisé avant de descendre jusqu’à la ville ?</em></p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>S’il venait à se propager, nous serions les premiers menacés. Autour de moi, je ne trouvais que les mêmes regards interrogatifs.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer.", 
      function(t){}],
]
}

preload_list = ["audio/bg.mp3", "audio/bg.mp3", "images/bg2.gif", "images/vallter2.jpg", "images/vallter2.jpg", "images/vallter2.jpg", "images/borne.jpg", "images/vallee.jpg", "images/bois.jpg", "images/berger.jpg", "images/berger2.jpg", "images/alemany.jpg", "images/interieur.jpg", "images/feu.jpg", "images/tisane.jpg", "images/neige.jpg", "images/presque-mantet.jpg", "images/vue-mantet.jpg", "images/panneau.jpg", "images/mantet.jpg", "images/vallter.jpg", "images/vallter2.jpg", "images/borne.jpg", "images/vallee.jpg", "images/bois.jpg", "images/berger.jpg", "images/berger2.jpg", "images/alemany.jpg", "images/interieur.jpg", "images/feu.jpg", "images/tisane.jpg", "images/neige.jpg", "images/presque-mantet.jpg", "images/vue-mantet.jpg", "images/panneau.jpg", "images/mantet.jpg", "images/bg3.png"]

storylets.push(scene0);
storylets.push(scene1);
storylets.push(scene2);
storylets.push(scene3);
storylets.push(scene4);
storylets.push(scene5);
storylets.push(scene6);
storylets.push(scene7);
storylets.push(scene8);
storylets.push(scene9);
storylets.push(scene10);
storylets.push(scene11);
storylets.push(scene12);
storylets.push(scene13);
storylets.push(scene14);
storylets.push(scene15);
storylets.push(scene16);
storylets.push(scene17);
storylets.push(scene18);
storylets.push(scene19);
storylets.push(scene20);
storylets.push(scene21);
storylets.push(scene22);
storylets.push(scene23);
storylets.push(scene24);
storylets.push(scene25);
storylets.push(scene26);
storylets.push(scene27);
storylets.push(scene28);
storylets.push(scene29);
storylets.push(scene30);
storylets.push(scene31);
storylets.push(scene32);
storylets.push(scene33);
storylets.push(scene34);
storylets.push(scene35);
storylets.push(scene36);
storylets.push(scene37);
storylets.push(scene38);
storylets.push(scene39);
storylets.push(scene40);
storylets.push(scene41);
storylets.push(scene42);
storylets.push(scene43);
storylets.push(scene44);
storylets.push(scene45);
storylets.push(scene46);
storylets.push(scene47);
storylets.push(scene48);
storylets.push(scene49);
storylets.push(scene50);
storylets.push(scene51);
storylets.push(scene52);
storylets.push(scene53);
storylets.push(scene54);
storylets.push(scene55);
storylets.push(scene56);
storylets.push(scene57);
storylets.push(scene58);
storylets.push(scene59);
