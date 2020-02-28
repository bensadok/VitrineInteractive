<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Vitrine interactive</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="css/main.css">
</head>
<body>

  <?php
  require("bdd/create_table.php");
   ?>
  <main>

    <div id="horizontale_haut">
      <div class="box" id="box1">
        <div class="maindiv">
            <button id="c1" class="main"></button>
            <div>
              <button class="c1 child1">Info</button>
              <button class="c1 child2">Photo</button>
              <button class="c1 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="box" id="box2">
        <div class="maindiv">
            <button id="c2" class="main"></button>
            <div>
              <button class="c2 child1">Info</button>
              <button class="c2 child2">Photo</button>
              <button class="c2 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="box" id="box3">
        <div class="maindiv">
            <button id="c3" class="main"></button>
            <div>
              <button class="c3 child1">Info</button>
              <button class="c3 child2">Photo</button>
              <button class="c3 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="box" id="box4">
        <div class="maindiv">
            <button id="c4" class="main"></button>
            <div>
              <button class="c4 child1">Info</button>
              <button class="c4 child2">Photo</button>
              <button class="c4 child3">Prix</button>
            </div>
        </div>
      </div>

    </div>

    <div id="horizontale_milieu">


      <div class="box" id="box5">
        <div class="maindiv">
            <button id="c5" class="main"></button>
            <div>
              <button class="c5 child1">Info</button>
              <button class="c5 child2">Photo</button>
              <button class="c5 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="panel">
        <p>t</p>
      </div>

      <div class="box" id="box6">
        <div class="maindiv">
            <button id="c6" class="main"></button>
            <div>
              <button class="c6 child1">Info</button>
              <button class="c6 child2">Photo</button>
              <button class="c6 child3">Prix</button>
            </div>
        </div>
      </div>
    </div>



    <div id="horizontale_bas">
      <div class="box" id="box7">
        <div class="maindiv">
            <button id="c7" class="main"></button>
            <div>
              <button class="c7 child1">Info</button>
              <button class="c7 child2">Photo</button>
              <button class="c7 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="box" id="box8">
        <div class="maindiv">
            <button id="c8" class="main"></button>
            <div>
              <button class="c8 child1">Info</button>
              <button class="c8 child2">Photo</button>
              <button class="c8 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="box" id="box9">
        <div class="maindiv">
            <button id="c9" class="main"></button>
            <div>
              <button class="c9 child1">Info</button>
              <button class="c9 child2">Photo</button>
              <button class="c9 child3">Prix</button>
            </div>
        </div>
      </div>

      <div class="box" id="box10">
        <div class="maindiv">
            <button id="c10" class="main"></button>
            <div>
              <button class="c10 child1">Info</button>
              <button class="c10 child2">Photo</button>
              <button class="c10 child3">Prix</button>
            </div>
        </div>
      </div>
    </div>







   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
   <script src="script/animation.js"></script>



  </main>

</body>
</html>
