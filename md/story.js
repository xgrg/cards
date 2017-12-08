Test = {
  name: 'Test',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="start"); };return (a1());
  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
  choices:[
   ["Démarrer", 
      function(t){
       t["lang"] = "fr";
       t["@action"] = "begin";
      }],
]
}

Test2 = {
  name: 'Test2',
  audio:"bg",
  conditions:function(){
    function a1(){ return (vartable["@action"]=="begin"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
[function(){displayImage("bois")}, 1000],
    [function(){addDialog("<p>bonjour</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Suite", 
      function(t){
       t["@action"] = "Scene1";
      }],
]
}

Scene1 = {
  name: 'Scene1',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="Scene1"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Ils peuvent arriver et me trouver ici d'une minute à l'autre.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je devrais quitter les lieux <strong>au plus vite</strong>.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Toutefois je n'y reviendrai pas avant longtemps, alors...</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>...c'est le moment de savoir ce qui compte vraiment.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Savoir quoi laisser ou ne pas laisser.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Continuer", 
      function(t){
       t["@action"] = "Scene2";
      }],
]
}

Scene2 = {
  name: 'Scene2',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="Scene2"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Faire un rapide tour des lieux.", 
      function(t){
       t["@action"] = "RapideTourDesLieux";
      }],
]
}

SceneLookAround = {
  name: 'SceneLookAround',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="RapideTourDesLieux"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>L'appartement est plongé dans la pénombre.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je me tiens debout devant la porte d'entrée.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J'y verrais sensiblement mieux avec un peu de lumière.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Chercher l'interrupteur près de la porte d'entrée.", 
      function(t){
       t["@action"] = "tryswitch";
      }],
]
}

SceneTrySwitch = {
  name: 'SceneTrySwitch',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="tryswitch"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Utiliser la lampe du téléphone portable", 
      function(t){
       t["@action"] = "ScenePhone";
      }],
]
}

ScenePhone = {
  name: 'ScenePhone',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="ScenePhone"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>La lumière du téléphone éclaire à courte distance.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je distingue le bureau sous la fenêtre avec les volets fermés.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Remonter les volets", 
      function(t){
       t["@action"] = "SceneRemonterVolets";
      }],
   ["Explorer le reste de la pièce", 
      function(t){
       t["@action"] = "ExplorePhone";
      }],
]
}

SceneExplorePhoneLight = {
  name: 'SceneExplorePhoneLight',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="ExplorePhone"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Je m'avance dans l'appartement à la lumière du téléphone.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>C'est sans se préoccuper de la batterie de ce dernier qui se consomme à vue d'oeil.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>A ce rythme il sera bientôt totalement déchargé.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>S'il n'y a pas de courant dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Retourner près de la fenêtre et remonter les volets.", 
      function(t){
       t["@action"] = "SceneRemonterVolets";
      }],
]
}

SceneRemonterVolets = {
  name: 'SceneRemonterVolets',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="SceneRemonterVolets"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les rayons du crépuscule pénètrent dans l'appartement, laissant voir le reste de la pièce à travers la poussière en suspension.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Explorer la pièce", 
      function(t){
       t["@action"] = "exploreroom";
      }],
]
}

ExplorerAvecVoletsRemontés = {
  name: 'ExplorerAvecVoletsRemontés',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="exploreroom"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Je suis à présent dans la pièce à vivre. On y distingue le coin cuisine, un coin salon avec un canapé, une table basse, une table à manger, et le coin bureau sous la fenêtre.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Explorer d'autres pièces", 
      function(t){
       t["exam_autrespieces"] = "true";
       t["@action"] = "ExplorerAutresPièces";
      }],
   ["S'approcher du coin cuisine", 
      function(t){
       t["exam_cuisine"] = "true";
       t["@action"] = "ApprocherCuisine";
      }],
   ["S'approcher du coin bureau", 
      function(t){
       t["exam_bureau"] = "true";
       t["@action"] = "ApprocherBureau";
      }],
   ["S'approcher du coin salon", 
      function(t){
       t["exam_salon"] = "true";
       t["@action"] = "ApprocherSalon";
      }],
   ["Inspecter les assiettes", 
      function(t){}, function(){function a1(){ return (vartable["exam_salon"]=="true"); };return (a1());} ],
   ["Aller dans la salle de bains", 
      function(t){}, function(){function a1(){ return (vartable["exam_autrespieces"]=="true"); };return (a1());} ],
   ["Aller dans la chambre", 
      function(t){}, function(){function a1(){ return (vartable["exam_autrespieces"]=="true"); };return (a1());} ],
]
}

ApprocherSalon = {
  name: 'ApprocherSalon',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="ApprocherSalon"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Salon.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Continuer", 
      function(t){
       t["@action"] = "exploreroom";
      }],
]
}

ApprocherCuisine = {
  name: 'ApprocherCuisine',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="ApprocherCuisine"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Cuisine</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Continuer", 
      function(t){
       t["@action"] = "exploreroom";
      }],
]
}

ApprocherBureau = {
  name: 'ApprocherBureau',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="ApprocherBureau"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Bureau</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Continuer", 
      function(t){
       t["@action"] = "exploreroom";
      }],
]
}

ApprocherAutresPièces = {
  name: 'ApprocherAutresPièces',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="ExplorerAutresPièces"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Autres Pièces.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Continuer", 
      function(t){
       t["@action"] = "exploreroom";
      }],
]
}

preload_list = ["images/bois.jpg", "audio/bg.mp3"]

storylets.push(Test);
storylets.push(Test2);
storylets.push(Scene1);
storylets.push(Scene2);
storylets.push(SceneLookAround);
storylets.push(SceneTrySwitch);
storylets.push(ScenePhone);
storylets.push(SceneExplorePhoneLight);
storylets.push(SceneRemonterVolets);
storylets.push(ExplorerAvecVoletsRemontés);
storylets.push(ApprocherSalon);
storylets.push(ApprocherCuisine);
storylets.push(ApprocherBureau);
storylets.push(ApprocherAutresPièces);
