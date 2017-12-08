Test = {
  name: 'Test',
  audio:"bg",
  conditions:function(){
    
return (true);

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [function(){addDialog("<p>bonjour</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },

}

$(document).ready(function(){
  storylets.push(Test);
});