<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
require_once "connect.php";

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id <= 0) {
    echo json_encode(["error" => "Invalid ID"]);
    exit;
}
$sql = "SELECT * FROM comentarios WHERE id_livro = ?";
$stmt = $mysqli->prepare($sql);
if (!$stmt) {
    echo json_encode(["error" => "Prepare failed: {$mysqli->error}"]);
    $mysqli->close();
    exit;
}
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);
$stmt->close();
$mysqli->close();
echo json_encode($data);