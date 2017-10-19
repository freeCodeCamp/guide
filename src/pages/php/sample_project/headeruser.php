
<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <title>

    </title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="d3.v4.min.js"></script>

</head>
<body>
<header>
    <nav>
        <div class="main-wrapper">
            <ul>
                <li>
                    <a href="index.php ">HOME</a>
                </li>
            </ul>
            <ul>
                <li class="chart1"><a href="image.php">chart 1</a></li>
                <li class="pie1"><a href="pie1.php">pie 1</a></li>
                <li class="pie2"><a href="pie2.php">pie 2</a> </li>
                <li class="pie3"><a href="pie3.php">DONUT PIE</a> </li>
                <li class="pie4"><a href="pie4.php">explode pie</a> </li>
                <li class="geo"><a href="geo.php">geo</a></li>
            </ul>


            <div class="nav-login">
                <?php
                if(isset($_SESSION['u_id']))
                {
                    echo ' <form action="includes/logout.inc.php" method="post">
                <button type="submit" name="submit">LOGOUT</button>
            </form>';
                }
                else
                {
                    echo '
                <a href="signup.php">Sign Up</a>';
                }
                ?>
            </div>
    </nav>
</header>
