<?php
$conn = new mysqli("localhost", "root", "", "veg_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
