<?php 
require 'vendor/autoload.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
//header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: content-type, authorization, accept');

$data = json_decode(file_get_contents('php://input'), true);

    echo json_encode($data);












?>

