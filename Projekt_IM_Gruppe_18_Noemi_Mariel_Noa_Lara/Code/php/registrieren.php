<?php

require('config.php'); //verbinden damit Code nicht doppelt geschrieben werden muss

$email = $_POST["email"];
$benutzername = $_POST["benutzername"];
$password = $_POST["password"];

$password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO user (name, email, password) VALUES (:Name, :Email, :Password)"; //dieser Code speichert einen neuen User in der DB, Bezeichnungen müssen mit DB übereinstimmen
$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute(array('Name' => $benutzername, 'Email' => $email, 'Password' => $password));

if ($erfolg) {
    print_r('Registrierung erfolgreich.');
} else {
    print_r($erfolg);
};

