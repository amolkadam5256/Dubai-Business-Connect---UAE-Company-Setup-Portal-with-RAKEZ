<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@majesticrealties.com"; // Your domain email
    $subject = "New Contact Form Submission";

    $firstName = htmlspecialchars($_POST["firstName"]);
    $lastName = htmlspecialchars($_POST["lastName"]);
    $email = htmlspecialchars($_POST["email"]);
    $mobile = htmlspecialchars($_POST["mobile"]);
    $residence = htmlspecialchars($_POST["residence"]);
    $message = htmlspecialchars($_POST["message"]);

    $body = "New form submission:\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Mobile: $mobile\n";
    $body .= "Country: $residence\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        http_response_code(500);
        echo "error";
    }
} else {
    http_response_code(403);
    echo "Forbidden";
}
?>
