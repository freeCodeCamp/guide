---
title: D3
---
# D3: Data-Driven Documents

**Data-Driven Documents** (D3.js) is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. **D3.js** API contains various methods which can be grouped into the following logical units - *Selections*, *Transitions*, *Arrays*, *Math*, *Color*, *Scales*, *SVG*, *Time*, *Layouts*, *Geography*, *Geometry*, *Behaviors*.

![D3.js Logo](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/07/d3.jpg?w=312&h=161)

**D3.js** helps you visualize data by combining powerful visualization and interaction techniques with a data-driven approach to DOM manipulation. It also provides full capabilities of modern browsers by designing the right visual interface for your data.

**D3.js** version 1.0.0 was released back in 18 February 2011.

## Why, D3.js?

*D3** does not introduce a new visual representation. Unlike **Processing**, **Raphaël**, or **Protovis**, *D3's* vocabulary of graphical marks comes directly from web standards: HTML, SVG, and CSS - https://d3js.org/

###### Get Started
There are over 20,000+ **D3.js** examples you could learn from, but you never know how approachable any given one will be! So, the question is - how do you build up your visualization from first principles? As you've probably seen, D3's API is massive, so lets call out a few of the utilities that will be particularly helpful early on:

- **d3-scale**

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/scale.png?w=400&h=100)

- **d3-shape**

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/shape.png?w=400&h=100)

- **d3-selection**

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/selection.gif?w=400&h=100)

- **d3-collection**

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/collection.png?w=400&h=100)

- **d3-hierarchy**

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/07/hierarchy.png?w=400&h=100)

- **d3-zoom**

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/07/zoom.gif?w=400&h=100)

- **d3-force**

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/07/force.gif?w=400&h=100)

 So, with just some basic knowledge of latest HTML5 features such as SVG, Canvas you can dive into a world where library like **D3.js** bring data to life!
 ###### Contribution

-  https://github.com/d3/

 ### Resources

- https://en.wikipedia.org/wiki/D3.js
- https://en.wikipedia.org/wiki/Document_Object_Model
- http://blockbuilder.org/search

 ------------
 
 ##### Set up D3.js
 
 -HTML Setup
 
For now, you will just use a text file and the web browser. You will start with with a static page of HTML. Then you will add d3.js.
Create a folder named d3js_projects. Create an HTML file in the folder named project_1.html.

-Start with a basic HTML webpage:
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <p>Hello!</p>
  </body>
</html>

-Which shows up in the browser:

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

-D3.js Setup

To get the main D3.js JavaScript file go to the D3.js Website. After the first paragraph on the page, you will see a section with links to the latest version. Download the latest version d3.v2.min.js. Save this file in the d3js_projects folder.

The file d3.v2.min.js is saved in the same folder as the HTML file so that it can be referenced it easily. We reference the JavaScript file from the head of the HTML file. Our updated HTML file now looks like this:

<!DOCTYPE html>
 <html>
   <head>
     <script type="text/javascript" src="d3.v2.min.js"></script>
   </head>
   <body>
     <p>Hello!</p>
   </body>
 </html>
 
 -Source File Setup Test
To test our D3.js setup we open the inspect element tool kit. In the Element tab of the Webkit Inspector, we open all of the elements so that we can see the whole HTML structure. We then hover over the d3.vs.min.js src.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

When we click on the link, it takes us to the sources tab. This will show the D3.js minified code. 

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)

-JavaScript Console Setup Test
The last test will take place in the JavaScript Console. This test tells us if D3.js is loaded correctly for our use in the JavaScript Console.

In this snapshot, locate the "Console" tab in the Webkit Inspector: 

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

When you click on the tab, it will show you a blank screen where you can type and evaluate JavaScript.

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)

In the JavaScript console, type the following:

alert("hello!");

This will cause a popup alert to pop up and say "Hello!". This is what it looks like: 

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)

Now to test if D3.js is loaded correctly. Type a lowercase "d3" into the Console followed by a period:

d3.

If we have D3.js installed correctly, the following should appear:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)

If all the tests passed and you were able to load D3.js correctly, you are ready to get started.

