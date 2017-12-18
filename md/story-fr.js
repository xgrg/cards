FrScene1 = {
  name: 'FrScene1',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "0"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("vallter.jpg")}, 1000],
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
       t["sc"] = "1";
      cond_dict=[];
return cond_dict;}],
   ["J’enfile polaire, doudoune et coupe-vent.", 
      function(t){
       t["equip"] = "polaire";
       t["sc"] = "1";
      cond_dict=[];
return cond_dict;}],
   ["Réflexion faite, je pars en t-shirt.", 
      function(t){
       t["equip"] = "tshirt";
       t["sc"] = "1";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene2 = {
  name: 'FrScene2',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "1"); };function a2(){ return (vartable["equip"]!= "polaire"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
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
]
}

FrScene2avecpolaire = {
  name: 'FrScene2avecpolaire',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "1"); };function a2(){ return (vartable["equip"]== "polaire"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
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

FrScene_croise_marcheurs = {
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

FrScene_mensonge = {
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
       t["sc"] = "2";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene_nepasrepondre = {
  name: 'FrScene_nepasrepondre',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "nepasrepondre"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
    [function(){addDialog("<p>Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.</p>", "fadeIn")}, 1000],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Continuer", 
      function(t){
       t["sc"] = "2";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene_verite = {
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
       t["sc"] = "2";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene3 = {
  name: 'FrScene3',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "2"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "3";
      cond_dict=[];
return cond_dict;}],
   ["Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.", 
      function(t){
       t["sc"] = "3";
      cond_dict=[["equip","eq","tshirt"]];
return cond_dict;}, function(){function a1(){ return (vartable["equip"]== "tshirt"); };return (a1());} ],
]
}

FrScene3b = {
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
       t["sc"] = "0";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene4 = {
  name: 'FrScene4',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "3"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "4";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene5 = {
  name: 'FrScene5',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "4"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "5";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene6 = {
  name: 'FrScene6',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "4"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "7";
      cond_dict=[];
return cond_dict;}],
   ["Je me rapproche.", 
      function(t){
       t["sc"] = "6";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene7 = {
  name: 'FrScene7',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "6"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "7";
      cond_dict=[];
return cond_dict;}],
   ["Je ramasse un morceau de bois avant de poursuivre mon chemin", 
      function(t){
       t["sc"] = "7";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene8 = {
  name: 'FrScene8',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "7"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "8";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene9 = {
  name: 'FrScene9',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "8"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "9";
      cond_dict=[];
return cond_dict;}],
   ["Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.", 
      function(t){
       t["sc"] = "9";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene10 = {
  name: 'FrScene10',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "9"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "10";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene11 = {
  name: 'FrScene11',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "10"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "11";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene12 = {
  name: 'FrScene12',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "11"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "12";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene13 = {
  name: 'FrScene13',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "12"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "13";
       t["sac"] = "banc";
      cond_dict=[];
return cond_dict;}],
   ["J’accroche le sac à l’un des clous plantés aux murs de la cabane", 
      function(t){
       t["sc"] = "13";
       t["sac"] = "clou";
      cond_dict=[];
return cond_dict;}],
   ["Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.", 
      function(t){
       t["sc"] = "13";
       t["sac"] = "nourriture";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene14nourrit = {
  name: 'FrScene14nourrit',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "13"); };function a2(){ return (vartable["sac"]== "nourriture"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
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
       t["sc"] = "14";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene14clou = {
  name: 'FrScene14clou',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "14"); };function a2(){ return (vartable["sac"]== "clou"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
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
       t["sc"] = "14";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene14banc = {
  name: 'FrScene14banc',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "13"); };function a2(){ return (vartable["sac"]== "banc"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
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
       t["sc"] = "15";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene15 = {
  name: 'FrScene15',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "14"); };function a2(){ return (vartable["sac"]!= "banc"); };function a3(){ return (vartable["lang"]== "fr"); };return (a1() && a2() && a3());
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
       t["sc"] = "15";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene16 = {
  name: 'FrScene16',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "15"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "16";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene17 = {
  name: 'FrScene17',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "16"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "17";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene18 = {
  name: 'FrScene18',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "17"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "18";
      cond_dict=[];
return cond_dict;}],
]
}

FrScene19 = {
  name: 'FrScene19',
  conditions:function(){
    function a1(){ return (vartable["sc"]== "18"); };function a2(){ return (vartable["lang"]== "fr"); };return (a1() && a2());
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
       t["sc"] = "0";
      cond_dict=[];
return cond_dict;}],
]
}

preload_list = ["images/vallter.jpg.jpg", "images/vallter2.jpg.jpg", "images/vallter2.jpg.jpg", "images/borne.jpg.jpg", "images/vallee.jpg.jpg", "images/bois.jpg.jpg", "images/berger.jpg.jpg", "images/berger2.jpg.jpg", "images/alemany.jpg.jpg", "images/interieur.jpg.jpg", "images/feu.jpg.jpg", "images/tisane.jpg.jpg", "images/neige.jpg.jpg", "images/presque-mantet.jpg.jpg", "images/vue-mantet.jpg.jpg", "images/panneau.jpg.jpg", "images/mantet.jpg.jpg"]

storylets.push(FrScene1);
storylets.push(FrScene2);
storylets.push(FrScene2avecpolaire);
storylets.push(FrScene_croise_marcheurs);
storylets.push(FrScene_mensonge);
storylets.push(FrScene_nepasrepondre);
storylets.push(FrScene_verite);
storylets.push(FrScene3);
storylets.push(FrScene3b);
storylets.push(FrScene4);
storylets.push(FrScene5);
storylets.push(FrScene6);
storylets.push(FrScene7);
storylets.push(FrScene8);
storylets.push(FrScene9);
storylets.push(FrScene10);
storylets.push(FrScene11);
storylets.push(FrScene12);
storylets.push(FrScene13);
storylets.push(FrScene14nourrit);
storylets.push(FrScene14clou);
storylets.push(FrScene14banc);
storylets.push(FrScene15);
storylets.push(FrScene16);
storylets.push(FrScene17);
storylets.push(FrScene18);
storylets.push(FrScene19);
