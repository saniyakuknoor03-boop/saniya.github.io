<?php
include "db.php";

error_reporting(E_ALL);
ini_set('display_errors', 1);

$name     = trim($_POST['name']);
$address  = trim($_POST['address']);
$product  = trim($_POST['product']);
$price    = trim($_POST['price']);
$quantity = trim($_POST['quantity']);

echo "<link rel='stylesheet' href='style.css'>";

if ($name === "" || $address === "" || $product === "" || $price === "" || $quantity === "") {
    echo "<div class='error'>Enter Details</div>";
} else {
    $stmt = $conn->prepare("INSERT INTO orders (name, address, product, price, quantity) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $address, $product, $price, $quantity);

    if ($stmt->execute()) {
        echo "<div class='success'>Order Successful</div>";
        // Redirect back to products page after 2 seconds
        echo "<script>setTimeout(()=>{window.location.href='products.html';},2000);</script>";
    } else {
        echo "<div class='error'>Error: " . $stmt->error . "</div>";
    }

    $stmt->close();
}

$conn->close();
?>
