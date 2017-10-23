---
title: CSS3 Backgrounds
---
## CSS3 Backgrounds

CSS3 backgrounds are quite easy and fun to play around once you get the grip of it. Following is nice and compact cheatsheet of everything you can do with background element in CSS.

```css
.awesome_background {
  /*You can use shorthand to put all properties after 'backrgound'. Note - the order is important. */
      background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
     
      background: #FCCFCC url('duck.jpg') center no-repeat content-box padding-box fixed;
      
      
  /*or you can specify each property separately. */
    
    /*Specifies the background color to be used*/
      background-color: color|transparent|initial|inherit;
      
      background-color: red;
      background-color: #00f;
      background-color: rgb(255, 255, 255);
      background-color: rgba(255, 255, 255, .5);
      background-color: transparent;
      
    /*Specifies ONE or MORE background images to be used */
      background-image: url|none|initial|inherit;
    
      background-image: url("img_tree.gif");
      background-image: url("img_tree.gif"), url("img_flwr.gif");
      
    /*Specifies the position of the background images */
      background-position: value;
    
      background-position: left top;
      background-position: left center;
      background-position: left bottom;
      background-position: right top;
      background-position: right center;
      background-position: right bottom;
      background-position: center top;
      background-position: center center;
      background-position: center bottom;
      background-position: left; /*If you only specify one keyword, the other value will be "center"*/
      background-position: right;
      background-position: top;
      background-position: bottom;
      background-position: center;
      background-position: x% y%; /*The first value is the horizontal position and the second value is the vertical. The top left corner is 0% 0%. The right bottom corner is 100% 100%. If you only specify one value, the other value will be 50%. . Default value is: 0% 0%*/
      background-position: 5rem 6rem; /*or other units, such as em, px*/
      
      
    /*Specifies the size of the background images*/
      background-size: auto|length|cover|contain|initial|inherit;
      
      background-size: cover; /*Scale the background image to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area*/
      background-size: contain; /*Scale the image to the largest size such that both its width and its height can fit inside the content area*/
      background-size: 90% 90%; /*Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height.*/
      background-size: 25%; /*If only one value is given, the second is set to "auto".*/
      background-size: 10rem 15rem; /*Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto"*/
      
      
    /*Specifies how to repeat the background images*/  
      background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit;
      
      background-repeat: repeat; /*Default*/
      background-repeat: repeat-x; /*horizontally*/
      background-repeat: repeat-y; /*vertically*/
      background-repeat: no-repeat;
      
    /*Specifies the positioning area of the background images*/
      background-origin: padding-box|border-box|content-box|initial|inherit;
      
      background-origin: padding-box; /*Default. The background image starts from the upper left corner of the padding edge*/
      background-origin: border-box; /*The background image starts from the upper left corner of the border*/
      background-origin: content-box; /*The background image starts from the upper left corner of the content*/
      
   /*Specifies the painting area of the background images*/
      background-clip: border-box|padding-box|content-box|initial|inherit;
      
      background-clip: border-box; /*Default. The background is clipped to the border box*/
      background-clip: padding-box; /*The background is clipped to the padding box*/
      background-clip: content-box; /*The background is clipped to the content box*/
      
      
    /*Specifies whether the background images are fixed or scrolls with the rest of the page*/
      background-attachment: scroll|fixed|local|initial|inherit; 
      
       background-attachment: scroll; /*Default. The background scrolls along with the element.*/
       background-attachment: fixed; /*The background is fixed with regard to the viewport*/
       background-attachment: local; /*The background scrolls along with the element's contents*/
    }
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href="https://www.w3schools.com/cssref/css3_pr_background.asp">W3 Schools</a>
