<?php
// Establish a connection to the MySQL database
$servername = "your_server_name"; // Change this to your MySQL server name
$username = "your_username"; // Change this to your MySQL username
$password = "your_password"; // Change this to your MySQL password
$database = "your_database"; // Change this to your MySQL database name

$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user input from the form
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password for security (you should use a more secure hashing method in production)
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert data into the MySQL table
$sql = "INSERT INTO loading (email, password) VALUES ('$email', '$hashedPassword')";

if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
