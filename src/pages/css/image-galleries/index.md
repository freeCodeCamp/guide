---
title: Image Galleries
---
## Image Galleries
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
CSS3 helps to create wonderful  image galleries for your webpages.

![Gallery](https://i.imgur.com/GVEVUy0.png)

A CSS3 gallery consisits of 2 parts- a card, and an image and caption inside the card.You can see how it's made using CSS3

Creating a Card
```css
div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 200px;
  }
```
Placing an Image inside it.(Note that sice width and height is specified here, you don't have to include it in the ```img``` tag.
```css
div.gallery img {
    width: 100%;
    height: 150px;
}
```
Adding the caption or description for your image
```css
div.desc {
    padding: 15px;
    text-align: center;
}
```

For adding an extra responsive feature,we can add this code in css which makes the card appear rising,as you hover over it
```css
div.gallery:hover {
    border: 1px solid black;
  box-shadow:10px 10px 5px grey;
}
```

Now you can write the corresponding Html code:
```html
<div class="gallery">
  <a href="picture1" target="_blank">
    <img src="picture1" alt="title 1"> </a>
  <div class="desc">Add a description of  image here</div>
</div>

<div class="gallery">
  <a href="picture2" target="_blank">
    <img src="picture2" alt="title 2"></a>
  <div class="desc">Add a description of  image here</div>
</div>

<div class="gallery">
  <a href="picture3" target="_blank">
    <img src="picture3" alt="title 3"> </a>
  <div class="desc">Add a description of  image here</div>
</div>

<div class="gallery">
  <a href="picture4" target="_blank">
    <img src="picture4" alt="title 4"> </a>
  <div class="desc">Add a description of image here</div>
</div>
```
You can view the related code pen here: [Gallery](https://codepen.io/msnavu/pen/NMBPRw)



#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
You can check more about this on W3schools [W3Schools CSS Image Gallery](https://www.w3schools.com/css/css_image_gallery.asp)
