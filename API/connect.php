<?php
$hostname = "localhost";
$username = "root";
$password = "";
$database = "db_lermais";

$mysqli = new mysqli($hostname, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Falha na conexão: " . $mysqli->connect_error);
}