<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Vitrine interactive</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="css/main_anim.css">
</head>
<body>

  <?php
  require("bdd/create_table.php");
   ?>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

<script src="script/create_object.js" type="text/javascript"></script>
<script src="script/animation.js" type="text/javascript"></script>

<script>
  create_body_test(3,4,[3,3,3,3],["Prix","Info","Photo","Toto"]);
  animate(10);
</script>






</body>
</html>
