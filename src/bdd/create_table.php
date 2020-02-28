<?php

 require("connect_db.php");


$sql = "DROP DATABASE IF EXIST".$db_name;
$conn->query($sql);

// Create database
$sql = "CREATE DATABASE if not exists ".$db_name;
$conn->query($sql);
$conn->close();

$conn = new mysqli($servername, $username, $password, $db_name);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DROP TABLE Objet";
$conn->query($sql);

$sql= "CREATE TABLE Objet(";
$sql .= "`id` int(11) NOT NULL auto_increment,";
$sql .= "`nom` text NOT NULL,";
$sql .= "`prix` float NOT NULL,";
$sql .= "`description` text NOT NULL,";
$sql .= "PRIMARY KEY  (`id`),";
$sql .= "UNIQUE KEY `id_2` (`id`),";
$sql .= "KEY `id` (`id`)";
$sql .= ");";

$conn->query($sql);



// Create connection
// Check connection


function insert_db($connect,$req){
  $connect->query($req);
};


$sql = "INSERT INTO Objet (nom,prix,description) VALUES ('Bague',120.00,'Magnifique bague 24carat')";
insert_db($conn,$sql);
$sql = "INSERT INTO Objet (nom,prix,description) VALUES ('Collier',420.00,'Magnifique collier 24carat')";
insert_db($conn,$sql);
$sql = "INSERT INTO Objet (nom,prix,description) VALUES ('Boucle d\'oreille' ,59.00,'Magnifique boucle d\'oreille 24carat')";
insert_db($conn,$sql);
$sql = "INSERT INTO Objet (nom,prix,description) VALUES ('Bracelet',320.00,'Magnifique bracelet 24carat')";

$conn->close();


?>
