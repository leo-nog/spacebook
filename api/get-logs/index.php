<?php

include("../global.php");


$user_id = auth($_POST['token']);


if(empty($_POST['user_id'])) {
    $query = mysqli_query($mysqli, "SELECT * FROM logs_reg
                                    ORDER BY id DESC");
} else {
    $validation = mysqli_fetch_assoc(mysqli_query($mysqli, "SELECT COUNT(*) as qtd FROM logs_reg 
                                                            WHERE `user_id` = {$_POST['user_id']}"));

    if($validation['qtd'] == 0) {
        error("This user hasn't any logs");
    }

    $query = mysqli_query($mysqli, "SELECT * FROM logs_reg
                                    WHERE `user_id` = {$_POST['user_id']}
                                    ORDER BY id DESC");
}

$loop = 0;

while($log = mysqli_fetch_array($query)) {
    $user = mysqli_fetch_assoc(mysqli_query($mysqli, "SELECT `name` FROM users WHERE id = {$log['user_id']}"));

    $result['logs'][$loop]['date_log'] = $log['date_log'];
    $result['logs'][$loop]['username'] = $user['name'];
    $result['logs'][$loop]['content']  = $log['content'];

    $loop++;
}

send($result);

?>