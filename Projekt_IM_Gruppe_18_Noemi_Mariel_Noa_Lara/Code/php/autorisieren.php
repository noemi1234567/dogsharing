<?php 

require("config.php");

loescheSessions();

$userID = $_SERVER["PHP_AUTH_USER"];
$token = $_SERVER["PHP_AUTH_PW"];

$sql = "
SELECT * 
FROM session 
WHERE user_id = '$userID' 
AND token = '$token' 
AND timestamp > (NOW() - INTERVAL 2 HOUR)";

$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute();

if ($erfolg) {
    $resultate = $stmt->fetchAll();
    $sitzungsID = $resultate[0]['id'];
    $anzahlResultate = count($resultate);
    if ($anzahlResultate == 1) {
        updateSession($sitzungsID);
    } else {
        exit(http_response_code(401));
    }
}

function updateSession($sitzungsID){
    require('config.php');

    $sql = "UPDATE session SET timestamp = now() WHERE id=?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$sitzungsID]);
}

function loescheSessions(){
    require('config.php');

    $sql = " DELETE FROM session WHERE timestamp < (NOW() - INTERVAL 2 HOUR);";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

}