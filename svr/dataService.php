<?php
use order\orderInsert;

require_once 'order/orderInsert.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
//header("Content-Type: application/json");

ini_set('display_errors','1');
ini_set('display_startup_errors','1');

error_reporting(E_ALL);

$postData = file_get_contents("php://input");
$reqData = json_decode($postData);

$dataInsert = new orderInsert();

echo json_encode($dataInsert->insertDataUsingObjects($reqData));

?>
