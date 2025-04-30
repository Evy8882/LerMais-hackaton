<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
require_once "connect.php";

// Verifica a conexão
if ($mysqli->connect_error) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

// Verifica se os dados foram enviados via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados enviados
    $input = json_decode(file_get_contents('php://input'), true);
    $id_livro = isset($input['id_livro']) ? intval($input['id_livro']) : 0;
    $texto_comentario = isset($input['texto_comentario']) ? trim($input['texto_comentario']) : '';

    // Valida os dados
    if ($id_livro > 0 && !empty($texto_comentario)) {
        // Insere o comentário no banco de dados
        $stmt = $mysqli->prepare("INSERT INTO comentarios (id_livro, nome_usuario, texto_comentario) VALUES (?, ?, ?)");
        $nome_usuario = "Giovanna Momesso"; // Substitua por lógica para obter o nome do usuário autenticado, se necessário
        $stmt->bind_param("iss", $id_livro, $nome_usuario, $texto_comentario);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Comentário adicionado com sucesso."]);
        } else {
            echo json_encode(["success" => false, "message" => "Erro ao adicionar comentário."]);
        }

        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "Dados inválidos."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método não suportado."]);
}

$mysqli->close();
?>