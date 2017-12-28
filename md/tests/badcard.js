scene0 = {
  name: 'Test2',
  audio:"music_bg",
  conditions:function(){
    function a1(){ return (vartable["lang"]== fr); };function a2(){ return (vartable["@action"]== toto); };return (a1() && a2());
  },
  storylet:function(choice, instantly){
  if (instantly == undefined) undefined = false;
   playSequence([
[function(){displayImage("image_chat")}, 1000],
    [function(){addDialog("<p>titi</p>", "fadeIn")}, 1000],
     ,[function(){
console.log('alert');
}, 0],
    [choice, 0]],
    0, instantly)
  },
  choices:[
   ["Test1", 
      function(t){
       t["lang"] = ca;
      cond_dict=[["lang", "eq", fr]];
return cond_dict;}, function(){function a1(){ return (vartable["lang"]== fr); };return (a1());} ],
]
}

preload_list = ["images/image_chat", "audio/music_bg"]

storylets.push(scene0);
