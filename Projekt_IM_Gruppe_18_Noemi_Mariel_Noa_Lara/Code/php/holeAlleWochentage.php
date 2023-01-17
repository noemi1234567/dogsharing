<?php 

require("config.php");
require("autorisieren.php");

$sql = "
SELECT * FROM wochentage;
";

$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute();

if ($erfolg) {
    $array = $stmt->fetchAll();
    $jsonArray = json_encode($array);
    print_r($jsonArray);
}