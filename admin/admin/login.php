<?php

session_start();

include("../config.php");

$username = $_POST['username'];
$password = md5($_POST['password']);

$sql = "SELECT * FROM administradores
WHERE username='$username'
AND password='$password'";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){

    $_SESSION['admin'] = true;

    header("Location: dashboard.php");

}else{

    echo "Utilizador ou senha inválidos.";

}

?>