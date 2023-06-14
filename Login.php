<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

// validate username and password
if ($username === 'admin' && $password === 'password') {
    $_SESSION['username'] = $username;
    header('Location: dashboard.php');
    exit;
} else {
    header('Location: index.php');
}
   
