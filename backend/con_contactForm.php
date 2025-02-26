<?php
// Allow CORS for specific domain
header("Access-Control-Allow-Origin: *"); // Replace with your frontend domain

// Allow methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Allow credentials if needed
header("Access-Control-Allow-Credentials: true");

// Handle preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    include 'connect.php';

    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['name']) && isset($data['email']) && isset($data['comments'])) {
        $name = $data['name'];
        $email = $data['email'];
        $comments = $data['comments'];

        $sql = "INSERT INTO commentform (name, email, comments) VALUES (\"$name\", \"$email\", \"$comments\")";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "Thank you 😊 for reaching out! I'll respond to you soon."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to submit the form: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Missing required fields."]);
    }
}


?>