<?php

require("config.php");
require("autorisieren.php");

$sql = "
SELECT P.id, P.name, P.geburtstag, P.beruf, P.wohnort, P.praeferenz_rasse, P.praeferenz_alter, P.bild, P.beschreibung, E.erfahrung, U.name, U.email
FROM pate P
INNER JOIN user U
ON P.user = U.id
INNER JOIN erfahrung E
ON P.erfahrung = E.id 
";

$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute();

if ($erfolg) {
    $array = $stmt->fetchAll();
    $jsonArray = json_encode($array);
    print_r($jsonArray);
}