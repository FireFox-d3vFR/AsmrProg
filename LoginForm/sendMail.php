<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Récupération des données du formulaire
$email = $_POST['email'];

// Configuration de l'envoie d'e-mail avec PHPMailer
$mail = new PHPMailer(true);
try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mail@gmail.com';
    $mail->Password = '*';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Adresse de l'expéditeur
    $mail->setFrom('mail@gmail.com', 'NOM Prénom');

    // Adresse du destinataire
    $mail->addAddress($email);

    // Contenu de l'email
    $mail->isHTML(true);
    $mail->Subject = 'Réinitialisation du mot de passe';
    $mail->Body = 'Bonjour, voici le lien pour réinitialiser le mot de passe <a href="https://www.google.com/>Nouveau mot de passe</a>';

    // Envoie de l'email
    $mail->send();
    echo 'E-mail envoyé avec succès';
} catch (Exception $e) {
    echo 'Echec lors de l\'envoi de l\'e-mail : ', $mail->ErrorInfo;
}
