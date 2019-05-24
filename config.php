<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "utilizatori";
    $nume = $_GET['Nume'];
    $scor = (int)$_GET['scor'];
    // Create connection
    $conn = mysqli_connect($servername, $username, $password,$dbname);
    
    // Check connection
   // if (!$conn)
   //     die("Connection failed: " . mysqli_connect_error());
   // else
   // {
   //     echo "Connected successfully <br>"; 
   // }

    //display the data from table
    $sql = "SELECT id,Nume,scor FROM dateutilizatori";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0)//daca am inregistrari in baza de date
    {
        while($row = mysqli_fetch_assoc($result))
            echo "id: " . $row["id"]. " - Nume: " . $row["Nume"]. " - Scor : " . $row["scor"]. "<br>";    
    }
    else echo "0 results"; 

    //register your name and score
    $sql = "INSERT INTO dateutilizatori(Nume,scor) VALUES ('$nume','$scor')";
    if (mysqli_query($conn, $sql) == TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
?>