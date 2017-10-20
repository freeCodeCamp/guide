---
title: CSS Images
---
## CSS Images

Use CSS to style your images to add borders, round edges, center an image or add responsive design so it looks good 
on any size screen and much more.
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
```css
     
 .image {
        
      <!-- use border-radius to round edges can be a % or px-->
        border-radius : 10px;
      
      <!-- use border to add a border around your image.  You can change the color, size, and look of your border. -->
        border: 2px dotted red;
  
      <!-- You can center an imgage with margin-auto; and make it into a block element -->
        display:block;
        margin: auto;
        width: 50%;
  
      <!-- If you want an image to scale down if it has to, but never scale up to be larger than its original size, add the following: -->
        max-width: 100%;
        height: auto;
  
      <!-- use opacity to make you image transparent.  value 0.0 - 1.0  the lower the value the more transparent -->
        opacity: 0.5;
  }
```

