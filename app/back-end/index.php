<?php 
require 'vendor/autoload.php';

header('Access-Control-Allow-Origin: http://localhost:');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: authorization');

$token = str_replace('Bearer', '', getallheaders['Authorization']);
echo('lo');










?>

