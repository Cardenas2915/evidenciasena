<?php

include('c.php');

$usuario = $_POST['name'];
$correo = $_POST['email'];
$telefono = $_POST['telefono'];
$pass = $_POST['password'];

$verificacion =  mysqli_query ($conexion, "SELECT * FROM usuarios WHERE usuario = '$usuario'");

$r = mysqli_num_rows($verificacion);


if($ > 0){
    echo '
    <script>
    alert("el nombre ya esta siendo usado");
    location.href = "../";
    </script>
    ';

    exit;
}

$insertar = mysqli_query ($conexion, "INSERT INTO usuarios (usuario, contraseña, correo, telefono, rol)
VALUES('$usuario', '$pass', '$correo', '$telefono', 'cliente')" );

if($insertar){
    echo '
    <script>
    alert("registro exitoso");
    location.href= "../";
    </script>

    '
}
?>