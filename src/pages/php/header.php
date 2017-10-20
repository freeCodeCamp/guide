<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>

    </title>
    <link rel="stylesheet" type="text/css" href="style.css">

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
                    echo '<form action="includes/login.inc.php" method="post">
                    <input type="text" name="uid" placeholder="USERNAME/EMAIL">
                    <input type="password" name="pwd" placeholder="PASSWORD">
                    <button type="submit" name="submit">Login</button>
                </form>
                <a href="signup.php">Sign Up</a>';
                }
                
                ?>
            </div>
    </nav>
</header>
