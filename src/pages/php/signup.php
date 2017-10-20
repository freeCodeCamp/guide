<?php
include_once 'header.php';
?>
<section class="main-container">
    <div class="main-wrapper">
        <h2>
            Sign Up
        </h2>
        <form class="signup-form" action="includes/signup.inc.php" method="post">
            <input type="text" name="first" placeholder="FIRST NAME">
            <input type="text" name="last" placeholder="LAST NAME">
            <input type="text" name="email" placeholder="E-MAIL">
            <input type="text" name="uid" placeholder="USERNAME">
            <input type="password" name="pwd" placeholder=" PASSWORD">
            <button type="submit" name="submit">SIGNUP</button>
        </form>
    </div>

</section>
<?php
include_once 'footer.php';
?>
