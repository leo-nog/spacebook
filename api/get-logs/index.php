<?php

include("../global.php");


$user_id = auth($_POST['token']);


if(empty($_POST['content'])) {
    error("Content field is required");
}


$query = "INSERT INTO logs_reg (`date_log`, `user_id`, `content`, `media`)
          VALUES ('$datetime', '$user_id','{$_POST['content']}','{$_POST['media']}')";


if(mysqli_query($mysqli, $query)) {
    $result['message'] = "Log successfully saved";
    
    send($result);
} else {
    $result['message'] = "Error saving the log";

    error("Error saving the log");
}

?>