<?php
    $nume = $_GET['i1'];
    $scor = $_GET['i2'];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "utilizatori";
    $conn = mysqli_connect($servername, $username, $password,$dbname);
    $grad = 0;
    if($scor <= 20)
        $grad = 1;//grad de noob
    if($scor > 20 && $scor <= 50)
        $grad = 2;//grad de priceput
    if($scor > 50 && $scor <= 100)
        $grad = 3;//grad de bolund
    if($scor > 100 && $scor <= 150)
        $grad = 4;//grad de veteran
    if($scor > 150)
        $grad = 5;//grad de zeu
    if($nume == "")
      $nume = "Anonim";
    $sql = "INSERT INTO dateutilizatori(Nume,scor,grad) VALUES ('$nume','$scor','$grad')";
    if (mysqli_query($conn, $sql) == TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    header("Location:index.php");
?>
