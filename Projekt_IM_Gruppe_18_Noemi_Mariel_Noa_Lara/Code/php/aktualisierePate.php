<?php 

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$name = $_POST["name"];
$geburtstag = $_POST["geburtstag"];
$beruf = $_POST["beruf"];
$wohnort = $_POST["wohnort"];
$erfahrung = $_POST["erfahrung"];
$praeferenz_rasse = $_POST["praeferenz_rasse"];
$praeferenz_alter = $_POST["praeferenz_alter"];
$beschreibung = $_POST["beschreibung"]; 
$bild = $_POST["bild"];
$pateID = $_POST["pateID"];

$wochentage = json_decode($_POST['wochentage']); //stimmt das so?

$sql = "UPDATE pate SET name=?, geburtstag=?, beruf=?, wohnort=?, erfahrung=?, praeferenz_rasse=?, praeferenz_alter=?, bild=?, beschreibung=? WHERE user=?";
$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute([$name, $geburtstag, $beruf, $wohnort, $erfahrung, $praeferenz_rasse, $praeferenz_alter, $bild, $beschreibung, $userID]);

if ($erfolg) {
    loescheAlteWochentage($pateID);
    insertNeueWochentage($wochentage, $pateID);
} else {
    print_r($erfolg);
  };

function loescheAlteWochentage($pateID){

    require('config.php');

    $sql = "DELETE FROM pate_hat_wochentage WHERE pate_id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$pateID]);
}

function insertNeueWochentage($wochentage, $pateID){

    require('config.php');

    if (sizeof($wochentage) > 0) {
        $sql = "INSERT INTO pate_hat_wochentage (pate_id, wochentage_id) VALUES (:pate_id, :wochentage_id)";
        $stmt = $pdo->prepare($sql);
        foreach ($wochentage as $wochentag) {
            $erfolg = $stmt->execute(array('pate_id' => $pateID, 'wochentage_id' => $wochentag));
        }
        if ($erfolg) {
            print_r("Dein Inserat wurde aktualisiert.");
        } else {
            print_r("Dein Inserat wurde nicht aktualisiert.");
        }
    } else {
        print_r("Dein Inserat wurde ohne Wochentage aktualisiert.");
    }
}