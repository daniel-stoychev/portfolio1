<?php
    $servername = "am23.siteground.biz";
    $username = "uwneio0l9ehz9";
    $password = "02vterd6oda6";

try {
  $conn = new PDO("mysql:host=am23.siteground.biz;dbname=dbncjspj3c8etz", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
