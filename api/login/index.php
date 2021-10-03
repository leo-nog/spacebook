<?php

include("../global.php");


$user = mysqli_fetch_assoc(mysqli_query($mysqli, "SELECT COUNT(*) as `qtd`, `name` FROM users 
                                                  WHERE email = '{$_POST['email']}' 
                                                    AND pass = '{$_POST['pass']}' 
                                                  ORDER BY id DESC LIMIT 1"));
if($user['qtd'] > 0){
    $token = encrypt($_POST['email'].':'.$_POST['pass']);

    $result['token']  = $token;
    $result['name']   = $user['name'];
    send($result);
} else {
    error("Incorrect credentials");
}

?>