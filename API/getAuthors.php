<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
require_once "connect.php";


$sql = "SELECT * FROM autores";
$result = $mysqli->query($sql);

if (!$result) {
    echo json_encode(["error" => "Query failed: " . $mysqli->error]);
    $mysqli->close();
    exit;
}

if ($result->num_rows > 0) {
    $books = [];
    while ($row = $result->fetch_assoc()) {
        $books[] = $row;
    }
    echo json_encode($books);
} else {
    echo json_encode([]);
}

$mysqli->close();