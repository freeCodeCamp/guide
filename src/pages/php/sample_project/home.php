<?php

include_once 'headeruser.php';
?>
<section class="main-container">
    <div class="main-wrapper">

        <?php
        if(isset($_SESSION['u_id']))
        {
            echo "you are logged in";
        }

        ?>


    </div>
</section>
<?php
include_once 'footer.php';
?>
