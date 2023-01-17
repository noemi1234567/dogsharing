<?php 
require('config.php');
require('autorisieren.php');

$user =  $_POST["user"];
$name = $_POST["name"];
$geburtstag = $_POST["geburtstag"];
$beruf = $_POST["beruf"];
$wohnort = $_POST["wohnort"];
$erfahrung = $_POST["erfahrung"];
$praeferenz_rasse = $_POST["praeferenz_rasse"];
$praeferenz_alter = $_POST["praeferenz_alter"];
$bild = $_POST["bild"];
$beschreibung = $_POST["beschreibung"];

$wochentage = json_decode($_POST['wochentage']);  

$sql = "INSERT INTO pate (name, geburtstag, beruf, wohnort, erfahrung, praeferenz_rasse, praeferenz_alter, bild, beschreibung, user) VALUES (:Name, :Geburtstag, :Beruf, :Wohnort, :Erfahrung, :Praeferenz_Rasse, :Praeferenz_Alter, :Bild, :Beschreibung, :User)";
$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute(array('Name' => $name, 'Geburtstag' => $geburtstag, 'Beruf' => $beruf, 'Wohnort' => $wohnort, 'Erfahrung' => $erfahrung, 'Praeferenz_Rasse' => $praeferenz_rasse,'Praeferenz_Alter' => $praeferenz_alter, 'Bild' => $bild, 'Beschreibung' => $beschreibung, 'User' => $user));

if ($erfolg) {
    $letzteID = $pdo->lastInsertId();
    insertWochentage($wochentage, $letzteID);
} else {
    print_r($erfolg);
};

function insertWochentage($wochentage, $letzteID){

    require('config.php');

    if (sizeof($wochentage) > 0) {
        $sql = "INSERT INTO pate_hat_wochentage (pate_id, wochentage_id) VALUES (:pate_id, :wochentag_id)";
        $stmt = $pdo->prepare($sql);
        foreach ($wochentage as $wochentag) {
            $erfolg = $stmt->execute(array('pate_id' => $letzteID, 'wochentag_id' => $wochentag));
        }
        if ($erfolg) {
            print_r("Dein Inserat wurde mit Wochentage erstellt.");
        } else {
            print_r("Dein Inserat wurde nicht erstellt.");
        }
    } else {
        print_r("Dein Inserat wurde ohne Wochentage erstellt.");
    }
}