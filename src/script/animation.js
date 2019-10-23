var displayed = false;
 document.getElementById('main').addEventListener('click', function() {
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
