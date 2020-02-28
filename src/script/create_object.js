/*
This script create the html structure of the project
We consider the document is divided in line.
Each line contain a number of boxes.
Each boxes contain 1 main button and a certain number of child button_child
This script allow you to create the Html page by sending in parameters

Just like this :
X Y Z a number
<body>
  <X_line>
    <Y_box>
      <button_main> Text you can parameters </button>
      <div>
        <Z_button_child> Text you can parameters </button>


There is also a panel-line wich is a lane with only two boxes and a div-panel in bewteen you can use to display whatever you want

*/

var list_prix = ["420€","367€","50€","99€","115€","222€","129€","45€","99€","87€"];
var list_description = [
  "Cette Rolex Ref.6427 est une montre de 34mm de diamètre avec une entrecorne de 19mm. Elle se distingue d’autres modèles par sa finesse. En effet son boîtier qui renferme un mouvement mécanique à remontage manuel ne fait que 11mm d’épaisseur. Les Oyster 6427 dites « Precision » font partie des rares montres Rolex motorisées par un mouvement mécanique manuel. Pour le reste pas de doute, cette montre est une Rolex et en a tous les attributs : fiabilité, précision et facilité d’utilisation au quotidien.",
  "Imaginé par le créateur de bijoux Léonardo Ranucci, ce pendentif pour femme en or gris 18 carats / 750 millièmes fera un cadeau parfait pour un anniversaire ou un anniversaire de mariage. À la fois sobre et élégant, il se compose d'un cercle ajouré, orné de motifs végétaux et agrémenté d'oxydes de zirconium.",
  "Boucles oreilles discrètes légères forme moderne pour accompagner toutes les tenues habillées ou pas à prix raisonnable",
  "Cette bague rendra chacune de vos tenues absolument uniques. En or jaune 18 carats/750 millièmes, elle est sertie d'une élégante agate bleue. Son dessin classique et indémodable en fait un achat incontournable. Préparez-vous à succomber à ce bijou si élégant.",
  "Ces boucles d'oreilles en or jaune 18 carats/750 millièmes ne laisseront pas indifférente la femme à laquelle vous les offrirez, comme cadeau d'anniversaire par exemple. Elles comportent le même motif, inversé d'une boucle à l'autre par une symétrie horizontale : un losange évidé suivi d'un autre plus petit recouvert de laque pailletée, attaché à une barrette verticale.",
  "L'anniversaire de l'élue de votre coeur approche ? Voici un cadeau chic et original. Cette bague pour femme est composée de deux anneaux en or jaune 18 carats / 750 millièmes, l'un étant serti de petits oxydes de zirconium alignés tandis que l'autre présente une opale enserrée entre deux oxydes de zirconium.",
  "De style classique, ce bijou a été conçu pour vous faire rayonner dans toutes les occasions. En or jaune 18 carats/750 millièmes, il mettra élégamment en valeur votre poignet. Ce bracelet traversera les modes et les années, en restant hautement désirable.",
  "Cette très jolie paire de créoles en or jaune 18 carats/750 millièmes se démarque par son fil à la section carrée qui a été subtilement torsadé pour créer des reflets ravissants. Indémodables et faciles à porter, ces boucles d'oreilles feront plaisir à la femme qui les recevra cadeau, pour son anniversaire par exemple.",
  "Avec sa perle de culture emprisonnée dans deux cercles fins en or jaune 18 carats/750 millièmes, ce pendentif est un atout de séduction incontestable. Il mettra en valeur votre port de tête avec son design élégant et moderne et ses matières nobles.",
  "La résistance exceptionnelle de cette alliance fantaisie pour homme en palladium 500 millièmes sera à la hauteur de la force de votre amour. L'anneau de 4 mm présente des stries obliques réparties 2 par 2, comme pour symboliser le couple avançant main dans la main. Ce bijou fera assurément sensation le jour de votre union."];

function creer_bouton_child(id,idparent,texte){
  var c = document.createElement("button");
  if(texte!=""){
    c.innerText = texte;
  }
  else{
    c.innerText = "Empty Button";
  }
  c.setAttribute("class","child".concat(id).concat(" ").concat("c".concat(idparent)));

  if(texte=="Prix"){
    c.addEventListener('click', function() {
      var p  = document.getElementById('p_central');
      p.innerHTML= list_prix[idparent];
      p.style.fontSize = "xx-large";
    })
  }

  if(texte=="Info"){
    c.addEventListener('click', function() {
      var p  = document.getElementById('p_central');
      p.innerHTML= list_description[id];
      p.style.fontSize = "x-large";
    })
  }
  return c;
}


function creer_button_div(id,text_button,nbchild,array_text_child){
  var main_div = document.createElement("div")
  main_div.setAttribute("class","maindiv");
  var c = document.createElement("button");
  c.innerHTML = text_button;
  c.setAttribute("class","main");
  c.setAttribute("id","c".concat(id));
  var innerdiv = document.createElement("div");
  if(array_text_child!=null){
    var array_size = array_text_child.length;
  }
  else{
    var array_size = 0;
  }

  for(var i = 0; i<nbchild;i++){
    if(i<=array_size){
      innerdiv.appendChild(creer_bouton_child(i+1,id,array_text_child[i]))
    }
    else{
      innerdiv.appendChild(creer_bouton_child(i+1,id,""))
    }
  }
  main_div.appendChild(c);
  main_div.appendChild(innerdiv);

  return main_div;
}




function create_box(id,text_button,nbchild,array_text_child){
  var box = document.createElement("div");
  box.setAttribute("class","box");
  box.appendChild(creer_button_div(id,text_button,nbchild,array_text_child));
  return box;
}


function create_lane(id,nbbox,array_text_button,array_nbchild_forbox,textchild_array_of_array){
  //array_text_button Array containing the text on the main button (actually prefered empty for visual reason)
  //array_nbchild_forbox  Array containing the number of child boxes contains. Ex : array_nbchild_forbox = [1,3,4,2] the third box will have 4 button child
  //textchild_array_of_array Two dimmensionnal array containing the text of the child button.
  //Ex : textchild_array_of_array [[][]["","hello"]] the second button_child text in the third box will be hello

  var line = document.createElement("div");
  line.setAttribute("id","line".concat(id));
  line.setAttribute("class","line");
  size_box_nb_child = array_nbchild_forbox.length
  size_box_text_button = array_text_button.length
  size_array_text_of_child = textchild_array_of_array.length

  for(var i = 0;i<nbbox;i++){
  if(i<=size_box_nb_child){
      array_nbchild_forbox.push(0);
    }
    if(i<=size_box_text_button){
      array_text_button.push("");
    }
    if(i<=size_array_text_of_child){
      textchild_array_of_array.push([]);
    }
    if(id<2){
      line.appendChild(create_box( ( ((id-1)*4)+i) ,array_text_button[i],array_nbchild_forbox[i],textchild_array_of_array[i]));
    }
    else{
      line.appendChild(create_box( ( ((id-1)*4)+i-2) ,array_text_button[i],array_nbchild_forbox[i],textchild_array_of_array[i]));
    }
  }
  return line;
}


//create a lane but with only 2 box and an div-panel inbetween
function create_lane_panel(id,nbbox,array_text_button,array_nbchild_forbox,textchild_array_of_array){

  var line = document.createElement("div");
  line.setAttribute("id","line".concat(id));
  line.setAttribute("class","line");

  while(array_text_button.length<2){
    array_text_button.push("");
  }
  while(array_nbchild_forbox.length<2){
    array_nbchild_forbox.push(0);
  }
  while(textchild_array_of_array.length<2){
      textchild_array_of_array.push([]);
    }
;

  line.appendChild(create_box(4,array_text_button[0],array_nbchild_forbox[0],textchild_array_of_array[0]));
  var panel = document.createElement("div");
  panel.setAttribute("class","panel");
  var p = document.createElement("p");
  p.setAttribute("id","p_central")
  p.innerHTML = "";
  panel.appendChild(p);
  line.appendChild(panel);
  line.appendChild(create_box(5,array_text_button[1],array_nbchild_forbox[1],textchild_array_of_array[1]));
  return line;

  }

/*
function create_body(nb_line,nb_box,nb_child,text_for_ch){
  var nb_box = 4;
  var number_child = [1,1,1,3];
  var text_for_child = ["prix","description","photo"];
  var array_text_for_child = new Array(nb_box);
  var text_button = ["","","",""];
  for(var i = 0 ; i< nb_box ;i++){
    array_text_for_child[i] = text_for_child;

  }
  for(var i=0 ;i< nb_line;i++){
    if(i==1){
      var line = create_lane_panel(2,nb_box,text_button,number_child,array_text_for_child);
      document.body.appendChild(line);
    }
    else{
       var line = create_lane(i+1,nb_box,text_button,number_child,array_text_for_child);
       document.body.appendChild(line);
    }
  }
}
*/





function create_body_test(nb_line,nb_box,nb_child,text_for_ch, button_name = ["","","",""]){
  //var nb_box = 4;
  //var number_child = [1,1,1,3];
  //var text_for_child = ["Prix","description","photo"];
  var array_text_for_child = new Array(nb_box);
  for(var i = 0 ; i< nb_box ;i++){
    array_text_for_child[i] = text_for_ch;

  }


  for(var i=0 ;i< nb_line;i++){
    if(i==1){
      var line = create_lane_panel(2,nb_box,button_name,nb_child,array_text_for_child);
      document.body.appendChild(line);
    }
    else{
       var line = create_lane(i+1,nb_box,button_name,nb_child,array_text_for_child);
       document.body.appendChild(line);
    }
  }

}
