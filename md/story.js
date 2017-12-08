Test = {
  name: 'Test',
  conditions:function(){
    
function a1(){ return (vartable["@action"]=="start"); };return (a1());

  },
  storylet:function(choice){
playSequence([    [choice, 0]])
  },
choices:[["Démarrer", {"lang": "fr", "@action": "begin"}],]
}

Test2 = {
  name: 'Test2',
  audio:"bg",
  conditions:function(){
    
function a1(){ return (vartable["@action"]=="begin"); };return (a1());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [function(){addDialog("<p>bonjour</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Suite", {"lang": "ca"}],]
}

$(document).ready(function(){
  storylets.push(Test);
  storylets.push(Test2);
});