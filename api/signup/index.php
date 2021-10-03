<?php

include("../global.php");

$email_domain = explode("@", $_POST['email']);
$domain       = strtoupper($email_domain[1]);

if($domain == 'NASA.GOV' AND isset($_POST['name']) AND isset($_POST['email']) AND isset($_POST['pass'])) {
    mysqli_query($mysqli, "INSERT INTO users (name, email, pass)
                           VALUES ('{$_POST['name']}','{$_POST['email']}','{$_POST['pass']}')");

    $result['message'] = "User successfull signed up";

    send($result);
} else {
    error("Error on sign up proccess!");
}

?>