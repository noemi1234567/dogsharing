<?php

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$pateID = $_POST["pateID"];

$sql = "DELETE FROM pate WHERE user = ? AND id = ?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$userID, $pateID]);

if ($erfolg) {
    loescheWochentage($pateID);
} else {
    print_r($erfolg);
};

function loescheWochentage($pateID){

    require('config.php');

    $sql = "DELETE FROM pate_hat_wochentage WHERE pate_id = ?";
    $stmt = $pdo->prepare($sql);
    $erfolg = $stmt->execute([$pateID]);

    if ($erfolg){
        echo "Pate und Wochentage wurden gelöscht!";
    } else {
        $erfolg;
    }

}