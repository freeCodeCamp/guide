---
title: Super Globals
---
## Super Globals

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/php/super-globals/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

PHP has several predefined variables known as superglobals which are accessible regardless of scope. These can be accessed from any function,class or file without having to do anything special. Some PHP superglobal variables are-

$_POST- This is used to collect form data after submitting an HTML form with method="post". $_POST is also widely used to pass variables.
An example is-
<?php 
include('connectdb.php');
if(isset($_POST['submit']))
{
	$sql=mysqli_query($con,"update login set Name='$_POST[name]', Email='$_POST[eml]',Mobile_no='$_POST[phone]',addr='$_POST[address]' where pasword='$_POST[pass]'") or die('ERROR'.mysqli_error($con));
	header('LOCATION:home.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Change Address</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <script src="js/jquery-1.11.3.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
	
</head>
<body style="background-image:url(img/back.jpg)">

<div class="container" style="position: relative;top: 120px;">
<div class="jumbotron" style=" background:rgba(204, 204, 204, 0.5);">
  <form class="form-horizontal" method="post"  >
	 <div class="form-group">
      <label class="control-label col-sm-2" for="usr">Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required>
      </div>
    </div>
	<div class="form-group">
      <label class="control-label col-sm-2" for="phone">Mobile No:</label>
      <div class="col-sm-10">
        <input type="phone" class="form-control" id="phone" placeholder="123-456-7890" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="Email">E-Mail:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="eml" placeholder="xyz@abc.com" name="eml" required>
      </div>
    </div>
	 <div class="form-group">
      <label class="control-label col-sm-2" for="address">Address Line :</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="address" placeholder="Address.." name="address" required>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="usr">Password:</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="pass" placeholder="Enter password" name="pass" required>
      </div>
    </div>
	 <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-info" name="submit" value="submit" id="submit">Update</button></br>
      </div>
    </div>
   
  </form>
</div>
</div>

</body>
</html>

Here the $_POST is used to collect data from the form after it is submitted to send it to the database.

$_GET-This can also be used to collect form data after submitting an HTML form with method="get".$_GET can also collect data sent in the URL.
Example-
First the value is sent through the URL-
<?php include("header.php");?>
    <div class="container" style="position:relative; top:20px;">
    	<div class="row">
        <div class="jumbotron" style="position: relative;top: 80px; background:rgba(204, 204, 204, 0.5);">
        <form>
              <div class="row">
                <div class="col-sm-4"><a href="produt2.php?key='coolers'" title="Coolers"><img src="img/air-cooler500.jpg" width="100" height="100" style="border-radius:50%; position:relative; left:100px; top:5px;"/></a></div>
                <div class="col-sm-4"><a href="produt2.php?key='cycles'" title="Cycles"><img src="img/cycle.png" width="160" height="100" style="border-radius:50%; position:relative; left: 40px;"/></a></div>
                <div class="col-sm-4"><a href="produt2.php?key='routers'" title="Routers"><img src="img/router.jpg" width="162" height="92" style="border-radius:50%; position:relative; left: 50px;"/></a></div>
              </div>
              <div class="row">
                <div class="col-sm-4"><a href="produt2.php?key='books'" title="Books"><img src="img/books.jpeg" width="100" height="100" style="border-radius:50%; position:relative; left:100px; top:15px;"/></a></div>
                <div class="col-sm-4"><a href="produt2.php?key='kettles'" title="Kettles"><img src="img/kettle.jpg" width="160" height="100" style="border-radius:50%; position:relative; top:15px;left: 40px;"/></a></div>
                <div class="col-sm-4"><a href="produt2.php?key='otherelectronics'" title="Other Electronics"><img src="img/other.jpg" width="162" height="92" style="border-radius:50%; position:relative; top:15px;left: 50px;"/></a></div>
              </div>
              <div class="row">
                <div class="col-sm-4"><a href="produt2.php?key='hostelessentials'" title=" Hostel Essentials"><img src="img/hostel.jpg" width="100" height="100" style="border-radius:50%; position:relative; left:100px; top:25px;"/></a></div>
                <div class="col-sm-4"><a href="produt2.php?key='mattres'" title="Matress"><img src="img/mattres.jpeg" width="160" height="100" style="border-radius:50%; position:relative; top:25px;left: 40px;"/></a></div>
                <div class="col-sm-4"><a href="produt2.php?key='engineeringtools'" title="Engineering Tools"><img src="img/engineeringtools.jpg" width="162" height="92" style="border-radius:50%; position:relative; top:25px; left: 50px;"/></a></div>
              </div>
           </div>
           </form>
        </div>
    </div>
<?php include("footer.php");?>

Then $_GET collects the value-
<?php 
include("connectdb.php");
$sql = mysqli_query($con,"select * from books where category =$_GET[key]")or die('ERROR'.mysqli_error($con));
$sql1=mysqli_query($con,"select max(price) as maxprice from books where category=$_GET[key]")or die('ERROR'.mysqli_error($con));
$sql2=mysqli_query($con,"select min(price) as minprice from books where category=$_GET[key]")or die('ERROR'.mysqli_error($con));
?>
<?php include("header.php");?>
  <div class="row">
  <div class="rightcolumn" style="width: 300px;background-image:url(img/orange.png); position: relative;top: 10px;">
    <div class="box" style="background:rgba(204, 204, 204, 0.5);">
      <h2 style="font-weight: bolder;font-family:Impact;"><?php if($_GET['key']=="'coolers'")
  $n='Coolers';
if($_GET['key']=="'cycles'")
  $n='Cycles';
if($_GET['key']=="'routers'")
  $n='Routers';
if($_GET['key']=="'books'")
  $n='Books';
if($_GET['key']=="'kettles'")
  $n='Kettles';
if($_GET['key']=="'otherelectronics'")
  $n='Other Electronics';
if($_GET['key']=="'hostelessentials'")
  $n='Hostel Essentials';
if($_GET['key']=="'mattres'")
  $n='Matress';
if($_GET['key']=="'engineeringtools'")
  $n='Engineering Tools';
echo $n;
?></h2>
    </div>
  </div>
  <div class="leftcolumn">
  <?php
  while($rs=mysqli_fetch_array($sql))
  {?>
    <a href="buy.php?key='<?php echo $rs[0];?>'" class="a" ><div class="box" style="background:rgba(204, 204, 204, 0.5);">
      <h2 class="head"><?php echo $rs[4];?></h2>
      <h4 class="name"> <?php echo $rs[1];?></h4>
      <h4 class="name"> <?php echo $rs[6];?></h4>
      <div class="row">
      <div class="col-sm-2"><img src="<?php echo $rs[8];?>"width='200px' height='100px' /></div>
      <div class="col-sm-6" ></div>
      <div class="col-sm-4" style="position: relative; bottom: 80px;"><h3 class="name">Price: <?php echo $rs[5]; ?></h3></div>
     </div>
     </div></a>
     <?php }?>
  </div>
</div>

<?php include("footer.php");?>


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
