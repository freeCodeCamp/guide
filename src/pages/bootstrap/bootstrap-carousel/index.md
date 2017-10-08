---
title: Bootstrap Carousel
---
## Bootstrap Carousel

Bootstrap provides Carousel as a plugin for cycling through a series of data.
Carousel is often referred as Slideshow.
Carousel provides a dynamic way of representing large amount of data (text or images) by sliding or cycling through,in a smooth fashion

Sample Code of Image Slider is below :-

```html
<html>
<head>
  
<!-- BootStrap's minified CSS version -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- Jquery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

 </head>

<style>
  
.carousel-indicators li
{
background-color:red;
} 

.carousel-indicators .active
{
background-color:blue;
}

.carousel-indicators .item
{
height:700 px;
width :800 px;
}
</style>


<body>
  <!-- Declaring div for Carousel to appear inside it -->
<div class="container">

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  
<!-- Indicators -->
  
<ol class="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
   <li data-target="#myCarousel" data-slide-to="1" ></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
</ol>

  <!-- Wrapper for Slides  -->
<div class="carousel-inner">

<div  class="item active">
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506241850/Hello_bootstrap_ohtphr.png" alt="Hello_Bootstrap" >
</div>

<div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613859/devices_bootstrap_nk4zlk.jpg" alt="Device_Bootstrap" >
</div>

<div  class="item">
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613966/responsive_bootstrap_nzuo9l.jpg" alt="Responsive_Bootstrap">
</div>

</div>
  
<!-- Left and Right Controls for sliding through the slides  -->
  
<a class="left carousel-control"  href="#myCarousel" data-slide="prev">
<span class="glyphicon glyphicon-chevron-left"></span>
</a>

<a class="right carousel-control"  href="#myCarousel" data-slide="next">
<span class="glyphicon glyphicon-chevron-right"></span>
</a>

</div>
</div>

</body>
</html>
```


Understanding the Attributes and classes used in above example :-

#### 1) Attributes

a) `data-ride`  :-  `data-ride ="carousel"`  allows on page load animation to begin.

b) `data-target` :- It points to the id of the Carousel

c) `data-slide-to` :- It specifies which slide to move on to when clicking on the indicators(specific dots).

#### 2) Classes

a) `carousel`  :- `class="carousel"` specifies that the  div contains carousel.

b) `slide` :- This class adds CSS transitions.

c) `carousel-inner` :- This denotes the section of code which will hold the text/image to be displayed in slides.

d) `item` :- It refers to the content to be displayed in the carousel.

e) `left carousal-control` :- This adds the back button allowing sliding to the previous slide.

f) `right carousal-control` :- This adds the next button allowing sliding to the next slide.

g) `carousel-caption` :- This class let you add captions to each slide.

Note: Add `class="carousel-caption"` for each item.


#### Additional Details : <a href='https://getbootstrap.com/docs/4.0/components/carousel/' target='_blank' rel='nofollow'>Bootstrap Carousel</a>


