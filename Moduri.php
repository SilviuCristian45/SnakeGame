<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "utilizatori";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password,$dbname);
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Selecteaza modul de joc </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="Moduri.css" />
    <script src="main.js"></script>
</head>
<body>
    <div class="col-md-4 offset-md-4">
        <div class="titlu"> Selecteaza modul de joc </div>

    </div>
    <div class="container">
        <div class="container_levele">
            <div class="lv1">
                <div class="clasic"> <a href="ModClasicFunctional/index.php" > Mod clasic </a> </div>
                <div> <img src="m1.jpg" width="100" height="100"> </img> </div>
                <div class="ldb1">

                        <?php
                        $sql = "SELECT id,Nume,scor FROM dateutilizatori ORDER BY scor DESC";
                        $result = mysqli_query($conn, $sql);
                        $loc = 1;
                         while($row = mysqli_fetch_assoc($result))
                             {
                                if($loc > 10)
                                     break;
                                 echo $loc." : " . $row["Nume"]. " " . $row["scor"]. "<br>";
                                $loc++;
                             }
                        ?>

                </div>
            </div>
            <div class="lv2">
                <div class="liber"> <a href="ModLiberFunctional/index.php" > Mod liber  </a> </div>
                <div> <img src="m1.jpg" width="100" height="100"> </img> </div>
                <div class="ldb2">
                <?php
                        $sql = "SELECT id,Nume,scor FROM modliber ORDER BY scor DESC";
                        $result = mysqli_query($conn, $sql);
                        $loc = 1;
                         while($row = mysqli_fetch_assoc($result))
                             {
                                if($loc > 10)
                                     break;
                                 echo $loc." : " . $row["Nume"]. " " . $row["scor"]. "<br>";
                                $loc++;
                             }
                        ?>
                    </div>
            </div>
            <div class="lv3">
                <div  class="cronometru"> <a href="ModContraCronometruFunctional/index.php"> Mod cronometru </a></div>
                <div> <img src="m1.jpg" width="100" height="100"> </img> </div>
                <div class="ldb3">
                <?php
                        $sql = "SELECT id,Nume,scor FROM cronometru ORDER BY scor DESC";
                        $result = mysqli_query($conn, $sql);
                        $loc = 1;
                         while($row = mysqli_fetch_assoc($result))
                             {
                                if($loc > 10)
                                     break;
                                 echo $loc." : " . $row["Nume"]. " " . $row["scor"]. "<br>";
                                $loc++;
                             }
                        ?>
                    </div>
            </div>
            <div class="lv4">
                <div class="noob"> <a href="ModNoob/index.php" > Mod noob  </a></div>
                <div> <img src="m1.jpg" width="100" height="100"> </img> </div>
                <div class="ldb4">
                    <?php
                        $sql = "SELECT id,Nume,scor FROM modnoob ORDER BY scor DESC";
                        $result = mysqli_query($conn, $sql);
                        $loc = 1;
                         while($row = mysqli_fetch_assoc($result))
                             {
                                if($loc > 10)
                                     break;
                                 echo $loc." : " . $row["Nume"]. " " . $row["scor"]. "<br>";
                                $loc++;
                             }
                    ?>
                </div>
                    </div>

            <div class="lv5">
                <div class="iarna"> <a href="ModIarna/index.php" > Mod iarna  </a></div>
                <div> <img src="m1.jpg" width="100" height="100"> </img> </div>
                <div class="ldb5">
                <?php 
                        $sql = "SELECT id,Nume,scor FROM modiarna ORDER BY scor DESC";
                        $result = mysqli_query($conn, $sql);
                        $loc = 1;
                        if($result){
                         while($row = mysqli_fetch_assoc($result))
                             {
                                if($loc > 10)
                                     break;
                                 echo $loc." : " . $row["Nume"]. " " . $row["scor"]. "<br>";
                                $loc++;
                             }
                            }
                    ?>
                    </div>
            </div>
            </div>
        </div>
    </div>
</body>
</html>
