<?php

include "config.php";

$sql = "SELECT * FROM clientes";

$result = mysqli_query(
    $conn,
    $sql
);

while(
    $cliente =
    mysqli_fetch_assoc($result)
){

echo "
<h3>{$cliente['nome']}</h3>
<p>{$cliente['email']}</p>
<hr>
";

}

?>