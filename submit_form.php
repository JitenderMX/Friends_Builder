<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    
    // Validate input (you can add more validation if required)
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "Please fill in all the fields.";
        exit;
    }
    
    // Set the recipient email address
    $to = "sales@friends.builders.com";
    
    // Set the email subject
    $subject = "New Form Submission";
    
    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message";
    
    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for contacting us. We'll get back to you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
