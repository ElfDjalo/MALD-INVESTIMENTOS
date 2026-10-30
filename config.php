<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "mald_db";

$conn = mysqli_connect(
    $host,
    $user,
    $password,
    $database
);

if (!$conn) {
    die(
        "Erro na ligação: "
        . mysqli_connect_error()
    );
}

?>