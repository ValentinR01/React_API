<?php
  $server = "localhost";
  $username = "admin";
  $password = "password";
  $db = "data";
  $conn = new PDO("mysql:host=$server;dbname=$db",$username,$password);
?>