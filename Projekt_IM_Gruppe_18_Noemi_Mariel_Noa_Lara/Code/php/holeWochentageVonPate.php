<?php

require("config.php");
require("autorisieren.php");

$pateID = $_POST["pateID"];

$sql = "
SELECT W.id, W.wochentage FROM wochentage W 
INNER JOIN pate_hat_wochentage junc ON W.id = junc.wochentage_id
WHERE junc.pate_id = '$pateID'; 
";
$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute();

if ($erfolg) {
    $array = $stmt->fetchAll();
    $jsonArray = json_encode($array);
    print_r($jsonArray);
}