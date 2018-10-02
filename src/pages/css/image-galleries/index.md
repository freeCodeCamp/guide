---
title: Image Galleries
---
## Image Galleries
We can also use CSS to build Image Gallery.

**Example**
Following is the code for simple image gallery.
```html
<html>
<head>
<style>
div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
}

div.gallery:hover {
    border: 1px solid #777;
}

div.gallery img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 15px;
    text-align: center;
}
</style>
</head>
<body>

<div class="gallery">
  <a target="_blank" href="fjords.jpg">
    <img src="5terre.jpg" alt="Cinque Terre" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="forest.jpg">
    <img src="forest.jpg" alt="Forest" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="lights.jpg">
    <img src="lights.jpg" alt="Northern Lights" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="mountains.jpg">
    <img src="mountains.jpg" alt="Mountains" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

</body>
</html>
```
This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/image-galleries/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
[For more refer W3School](https://www.w3schools.com/css/css_image_gallery.asp)


