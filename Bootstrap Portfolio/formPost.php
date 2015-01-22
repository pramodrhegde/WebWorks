<?php 

$user_name=$_POST['username'];
$email_from=$_POST['email'];
$website=$_POST['website'];
$message=$_POST['message'];

$email_to="me@pramodrhegde.in";
$email_subject="form details";

$email_message="form details are below.\n";
$email_message.="User Name: ".$user_name."\n";
$email_message.= "Email: ".$email_from."\n";
$email_message.= "Website: ".$website."\n";
$email_message.= "Comments: ".$message."\n";

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/plain; charset=iso-8859-2\n";
$headers .= "From: $email_from\n"."Reply-To: $email_from\n"."X-Mailer: PHP/".phpversion()."\n";
// create email headers
mail($email_to, $email_subject, $email_message,$headers);
?>