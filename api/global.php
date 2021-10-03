<?php

$mysqli = new mysqli('sql248.main-hosting.eu','u189246192_lunacy_1','St4rSh1p@2034','u189246192_spacebook');

header('Content-Type: application/json; charset=utf-8');

function send($string) {
    echo json_encode($string);
}

function encrypt($string) {
    return base64_encode(base64_encode(base64_encode(base64_encode(base64_encode(base64_encode(base64_encode($string)))))));
}

function decrypt($string) {
    return base64_decode(base64_decode(base64_decode(base64_decode(base64_decode(base64_decode(base64_decode($string)))))));
}

?>