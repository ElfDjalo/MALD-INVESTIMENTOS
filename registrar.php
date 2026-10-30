<?php

include "config.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

$sql = "INSERT INTO clientes
(nome,email,telefone)

VALUES
('$nome','$email','$telefone')";

if(mysqli_query($conn,$sql)){

    echo "Cliente registado com sucesso.";

}else{

    echo "Erro: " . mysqli_error($conn);

}

?>