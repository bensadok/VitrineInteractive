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
     var elements = document.getElementsByClassName(item);
     console.log(elements.length);
     if(displayed==false){
      for (var i = 0; i < elements.length; i++) {
      console.log(elements[i].className);
      if(elements[i].classList.contains("not_animate")){
        elements[i].classList.remove('not_animate');
      }
      elements[i].classList.add('anim'.concat(i+1));
      elements[i].style.opacity = 1;
    }
       displayed = true;
     }
     else{
       for (var i = 0; i < elements.length; i++) {
       console.log(elements[i].className);
       elements[i].classList.remove('anim'.concat(i+1));
       elements[i].classList.add('not_animate');
       //elements[i].classList.remove('not_animate');
       elements[i].style.opacity = 0;
      }
      displayed=false;

    }
   });
  });
}
