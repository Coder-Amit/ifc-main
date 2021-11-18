<!DOCTYPE html>
<html>
<head>
	<title>Checking...</title>
</head>
<body>

<?php 

session_start();

function function_alert($message) {
	
	// Display the alert box
	echo "<script>alert('$message');</script>";
}


$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'maverick');

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['password'];


$s = " select * from user where email = '$email'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);
$_SESSION['email']=$email;

if($num == 1)
{
	
	$message = "User Already Registered";
    echo "<script>
    alert('$message');
    window.location.href='index.html';
    </script>";
}else
{
	$reg="insert into user(name  , email , password) values ('$name','$email','$pass')";
	mysqli_query($con, $reg);
	$message = "Registration Successful";
    echo "<script>
    alert('$message');
    window.location.href='app.php';
    </script>";
}

?>

</body>
</html>
