<!DOCTYPE html>
<html>
<head>
	<title>Checking....</title>
</head>
<body>



<?php 

session_start();

$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'maverick');

$email = $_POST['email'];
$pass = $_POST['password'];


$s = " select * from user where email = '$email'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

$_SESSION['email']=$email;
if($num == 1)
{
    $message="Login Successfully";
	echo "<script>
    alert('$message');
    window.location.href='app.php';
    </script>";
}else
{
	$message = "Please Register Yourself First";
    echo "<script>
    alert('$message');
    window.location.href='index.html';
    </script>";
}

?>

</body>
</html>

