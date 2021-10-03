<?php

$mysqli = new mysqli('sql248.main-hosting.eu','u189246192_lunacy_1','St4rSh1p@2034','u189246192_spacebook');

$datetime = date('Y-m-d H:i:s');

header('Content-Type: application/json; charset=utf-8');





function send($string) {
    $result['status'] = 'success';
    $result          += $string;

    echo json_encode($result);
}

function error($string) {
    $result['status']  = "failed";
    $result['message'] = $string;
    
    echo json_encode($result);

    exit;
}

function encrypt($string) {
    return base64_encode(base64_encode(base64_encode(base64_encode(base64_encode(base64_encode(base64_encode($string)))))));
}

function decrypt($string) {
    return base64_decode(base64_decode(base64_decode(base64_decode(base64_decode(base64_decode(base64_decode($string)))))));
}

function auth($token) {
    if(!empty($token)) {
        $token = decrypt($token);
        $token = explode(":", $token);

        $user = mysqli_fetch_assoc(mysqli_query($GLOBALS['mysqli'], "SELECT COUNT(*) as qtd, id FROM users 
                                                          WHERE email = '{$token[0]}' 
                                                            AND pass = '{$token[1]}' 
                                                          LIMIT 1"));
        
        if($user['qtd'] > 0) {
            return($user['id']);
        } else {
            error("Invalid token detected");
        }
    } else {
        error("Token is required for this request");
    }
}

?>