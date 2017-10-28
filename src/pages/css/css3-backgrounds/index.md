---
title: CSS3 Backgrounds
---
## CSS3 Backgrounds

You can add different types of backgrounds, be it a plain color background, gradient or perhaps an image.

Having an image as a background is the most popular choice.

**Steps on using an image as a background**
* Create a div with a class or id as a selector

`
.yourSelector {
  background-image: url(yourimage.jpg);
}
`

* You can adjust the position of your image. 

`background-position: center;` // you may use % to shift your image


* You can prevent your background from repeating. 

`background-repeat: no-repeat`;


* Scale up and down your background to fit its container

`background-size: cover;` // if your image is too small to fit your desired area, or 

`background-size: contain;` // to scale down the background image if its larger than the container you are trying to fit.

#### More Information:
[W3Schools CSS3 Backgrounds](https://www.w3schools.com/css/css3_backgrounds.asp)
