---
title: Layouts
---
## Layouts

### HTML Layout Elements

Websites often display content in multiple columns (like a magazine or newspaper).

HTML5 offers new semantic elements that define the different parts of a web page:

(https://www.w3schools.com/html/img_sem_elements.gif) 

* <header> - Defines a header for a document or a section
* <nav> - Defines a container for navigation links
* <section> - Defines a section in a document
* <article> - Defines an independent self-contained article
* <aside> - Defines content aside from the content (like a sidebar)
* <footer> - Defines a footer for a document or a section
* <details> - Defines additional details
* <summary> - Defines a heading for the <details> element
  
HTML Layout Techniques
There are four different ways to create multicolumn layouts. Each way has its pros and cons:

* HTML tables
* CSS float property
* CSS framework
* CSS flexbox

## HTML Tables

The <table> element was not designed to be a layout tool! The purpose of the <table> element is to display tabular data. So, do not use tables for your page layout! They will bring a mess into your code. And imagine how hard it will be to redesign your site after a couple of months.

Tip: Do NOT use tables for your page layout!

## CSS Frameworks

If you want to create your layout fast, you can use a framework, like <a href="https://www.w3schools.com/w3css/default.asp">W3.CSS</a> or <a href="https://www.w3schools.com/bootstrap/default.asp">Bootstrap</a>.

## CSS Floats

It is common to do entire web layouts using the CSS float property. Float is easy to learn - you just need to remember how the float and clear properties work. Disadvantages: Floating elements are tied to the document flow, which may harm the flexibility. Learn more about float in our <a href="https://www.w3schools.com/css/css_float.asp">CSS 
Float and Clear</a> chapter.

``` html
<!DOCTYPE html>
<html>
<head>
<style>
div.container {
    width: 100%;
    border: 1px solid gray;
}

header, footer {
    padding: 1em;
    color: white;
    background-color: black;
    clear: left;
    text-align: center;
}

nav {
    float: left;
    max-width: 160px;
    margin: 0;
    padding: 1em;
}

nav ul {
    list-style-type: none;
    padding: 0;
}
   
nav ul a {
    text-decoration: none;
}

article {
    margin-left: 170px;
    border-left: 1px solid gray;
    padding: 1em;
    overflow: hidden;
}
</style>
</head>
<body>

<div class="container">

<header>
   <h1>City Gallery</h1>
</header>
  
<nav>
  <ul>
    <li><a href="#">London</a></li>
    <li><a href="#">Paris</a></li>
    <li><a href="#">Tokyo</a></li>
  </ul>
</nav>

<article>
  <h1>London</h1>
  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
</article>

<footer>Copyright &copy; W3Schools.com</footer>

</div>

</body>
</html>
```

## CSS Flexbox

Flexbox is a new layout mode in CSS3.

Use of flexbox ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices. Disadvantages: Does not work in IE10 and earlier.

Learn more about flexbox in our <a href="https://www.w3schools.com/css/css3_flexbox.asp">CSS Flexbox</a> chapter.

### example
``` html
<!DOCTYPE html>
<html>
<head>
<style> 
.flex-container {
    display: -webkit-flex;
    display: flex;  
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    text-align: center;
}

.flex-container > * {
    padding: 15px;
    -webkit-flex: 1 100%;
    flex: 1 100%;
}

.article {
    text-align: left;
}

header {background: black;color:white;}
footer {background: #aaa;color:white;}
.nav {background:#eee;}

.nav ul {
    list-style-type: none;
    padding: 0;
}
.nav ul a {
    text-decoration: none;
}

@media all and (min-width: 768px) {
    .nav {text-align:left;-webkit-flex: 1 auto;flex:1 auto;-webkit-order:1;order:1;}
    .article {-webkit-flex:5 0px;flex:5 0px;-webkit-order:2;order:2;}
    footer {-webkit-order:3;order:3;}
}
</style>
</head>
<body>

<div class="flex-container">
<header>
  <h1>City Gallery</h1>
</header>

<nav class="nav">
<ul>
  <li><a href="#">London</a></li>
  <li><a href="#">Paris</a></li>
  <li><a href="#">Tokyo</a></li>
</ul>
</nav>

<article class="article">
  <h1>London</h1>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom,
  with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia,
  its history going back to its founding by the Romans, who named it Londinium.</p>
  <p><strong>Resize this page to see that what happens!</strong></p>
</article>

<footer>Copyright &copy; W3Schools.com</footer>
</div>

</body>
</html>
```


#### More Information:
<a href="https://www.w3schools.com/html/html_layout.asp">w3schools.com</a>


