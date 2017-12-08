Test = {
  name: 'Test',
  conditions:function(){
    
return (true);

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>bonjour</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },

}

preload_list = []

storylets.push(Test);
