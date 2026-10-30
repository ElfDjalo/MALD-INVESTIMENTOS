<?php

session_start();

if(!isset($_SESSION['admin'])){

    header("Location: login.html");
    exit();

}

?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Painel Administrativo</title>
</head>
<body>

    <h1>
        Painel Administrativo
        MALD INVESTIMENTOS
    </h1>

    <p>Bem-vindo Administrador.</p>

    <a href="logout.php">
        Terminar Sessão
    </a>

</body>
</html>