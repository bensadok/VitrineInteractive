/*var displayed = false;
 document.getElementByClassName('main').addEventListener('click', function() {
   if(displayed==false){
     TweenMax.to('.child', 1, {opacity: 1, delay: 0.5});
     TweenMax.to('.panel', 1.5, {scaleY: 1, height:'100vh', ease: Circ.easeOut });
     displayed =true;
   }
   else{
     TweenMax.to('.child', 1, {opacity:0, delay: 0.5});
     TweenMax.to('.panel', 1.5, {scaleY: 0, ease: Circ.easeOut });
     TweenMax.to('p', 1, {opacity: 0, delay:0.5});
     TweenMax.to('.images', 1, {opacity: 0, delay:0});
     TweenMax.to('.gif', 3, {opacity: 0,delay:0});
     displayed = false;
   }

 })

 document.getElementById('child1').addEventListener('click', function() {
     TweenMax.to('p', 1, {opacity: 1, delay:0.5});
     TweenMax.to('.images', 1, {opacity: 0, delay:0});
     TweenMax.to('.gif', 3, {opacity: 0,delay:0});
 })

 document.getElementById('child2').addEventListener('click', function() {
     TweenMax.to('.images', 1, {opacity: 1, delay:0.5});
     TweenMax.to('p', 1, {opacity: 0, delay:0});
     TweenMax.to('.gif', 3, {opacity: 0,delay:0});

 })

 document.getElementById('child3').addEventListener('click', function() {
   TweenMax.to('.gif', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
   TweenMax.to('.images', 1, {opacity: 0, delay:0});
     TweenMax.to('p', 1, {opacity: 0, delay:0});
 })
*/




function animate(nb_box){
  var displayed = false;


  //var btn_main = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10"];
  nbboxtotal = nb_box;
  var btn_main = [];
  for(var i = 0; i< nbboxtotal;i++){
    btn_main.push("c".concat(i));
  }
  btn_main.forEach(function(item, index, array) {

   document.getElementById(item).addEventListener('click', function() {
     var x = ".".concat(item);
     console.log(x);
     if(displayed==false){
       TweenMax.to(x, 1, {opacity: 1, delay: 0.5});
       displayed =true;
     }
     else{
       TweenMax.to(x, 1, {opacity:0, delay: 0.5});
       displayed = false;
     }
   });
  });
}
