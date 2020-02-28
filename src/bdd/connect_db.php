<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name ="db_vitrine";


// Create connection
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
