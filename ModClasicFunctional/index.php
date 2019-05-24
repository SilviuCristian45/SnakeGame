<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "utilizatori";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password,$dbname);
   //!!!!!!!!!!FA ASTEA!!!!!!!!!!!!
   //iau un query in care selectez toate gradele . 1-noob , 2-priceput ...
   //adaug "noob" , "priceput" , in sirul meu de string-uri
   //pastrez intr-o variabila numarul de grade intr-o variabila

   echo "<div class='col-md-4' id ='clasament'> ";
   echo " <br> Gradele jucatorilor  <br>";
   //!!!!!!!!!!FA ASTEA!!!!!!!!!!!!
   //iau un query in care selectez toate gradele . 1-noob , 2-priceput ...
   //adaug "noob" , "priceput" , in sirul meu de string-uri
   //pastrez intr-o variabila numarul de grade intr-o variabila

   $denumiri_grade = array("null");
   $sql = " SELECT grad,Nume_grad FROM grade ";
   $result = mysqli_query($conn , $sql);
   if(mysqli_num_rows($result) > 0)
   {
        while($row = mysqli_fetch_assoc($result))
            array_push($denumiri_grade,$row["Nume_grad"]);
   }
   else echo "0 results <br>";
   //mi le adauga bine in sirul de grade
   $numar_grade = count($denumiri_grade);
   $sql = "SELECT id,Nume,scor FROM dateutilizatori ORDER BY scor DESC";
   $result = mysqli_query($conn, $sql);
   for($grad = 1; $grad < $numar_grade; $grad++)
   {
        echo $denumiri_grade[$grad] . "<br>";
        $sql = " SELECT dateutilizatori.Nume AS Nume_elev
                     FROM grade INNER JOIN
                       dateutilizatori ON grade.grad = dateutilizatori.grad
                       WHERE (dateutilizatori.grad = $grad)";
        //
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0)//daca am inregistrari in baza de date
        {
            while($row = mysqli_fetch_assoc($result))
            {
                echo  "Nume : " . $row["Nume_elev"]. "<br>";
            }

        }
        else echo "0 results <br>";
    }
    echo "</div>";

?>

<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Snake</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="index.css" />
    <script src ="Food.js"></script>
    <script src ="Snake.js"></script>
    <script src="main.js" defer></script>
</head>
<body>

  <div class="col-md-4">
    <canvas width="500px" height="500px" id="myCanvas"> </canvas>
  </div>

</body>

</html>
