Début = {
  name: 'Début',
  conditions:function(){
    function a1(){ return (vartable["@action"]=="start"); };return (a1());
  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
  choices:[
   ["Démarrer", 
      function(t){
       t["@action"] = "begin";
      }],
]
}

SceneChoixLangues = {
  name: 'SceneChoixLangues',
  audio:"bg",
  conditions:function(){
    function a1(){ return (vartable["@action"]=="begin"); };return (a1());
  },
  storylet:function(choice){
  playSequence([
    [function(){addDialog("<p>Choisissez une langue.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Tria una llengua.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
  choices:[
   ["Français", 
      function(t){
       t["lang"] = "fr";
       t["sc"] = "0";
      }],
   ["Catalan", 
      function(t){
       t["lang"] = "ca";
       t["sc"] = "0";
      }],
]
}

preload_list = ["audio/bg.mp3"]

storylets.push(Début);
storylets.push(SceneChoixLangues);
