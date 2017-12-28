scene0 = {
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

scene1 = {
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

scene2 = {
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

preload_list = ["images/bg3.png"]

storylets.push(scene0);
storylets.push(scene1);
storylets.push(scene2);
