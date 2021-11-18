<?php 

session_start();
session_destroy();

$message = "Logout Successfull";
    echo "<script>
    alert('$message');
    window.location.href='index.html';
    </script>";

?>