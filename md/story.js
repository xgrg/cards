Test = {
  name: 'Test',
  audio:"bg",
  conditions:function(){
    
function a1(){ return (vartable["@action"]=="start"); };return (a1());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [function(){addDialog("<p>bonjour</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"lang": "fr"}],]
}

$(document).ready(function(){
  storylets.push(Test);
});