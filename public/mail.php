<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $message = strip_tags(trim($data["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Ugyldig indtastning.";
        exit;
    }

    $recipient = "info@nordensrevision.dk";
    $subject = "Ny henvendelse fra Nordens Revision: $name";
    
    $email_content = "Navn: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefon: $phone\n\n";
    $email_content .= "Besked:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Tak! Din besked er blevet sendt.";
    } else {
        http_response_code(500);
        echo "Ups! Noget gik galt, og vi kunne ikke sende din besked.";
    }
} else {
    http_response_code(403);
    echo "Der opstod et problem med din afsendelse, prøv venligst igen.";
}
?>
