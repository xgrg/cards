Test2 = {
  name: 'Test2',
  audio:"music_bg",
  conditions:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["@action"]=="toto"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("image_chat")}, 1000],
    [function(){addDialog("<p>titi</p>", "fadeIn")}, 1000],
     ,[function(){
console.log('alert');
}, 0],
    [choice, 0]])
  },
choices:[["Test1", {"lang": "ca"}, function(){
function a1(){ return (vartable["lang"]=="fr"); };return (a1());
}],]
}

$(document).ready(function(){
  storylets.push(Test2);
});