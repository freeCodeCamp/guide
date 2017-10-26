
---
title: CSS3 Gradients
---
## CSS3 Gradients

With CSS3 gradients you are able to display smooth transitions from one color to the next.

There are two types of CSS3 gradients:

* Linear Gradients (goes down/up/left/right/diagonally)

* Radial Gradients (defined by their center)

## CSS3 Linear Gradients

To create a linear gradient in CSS3 you need to define a minimum of two color stop points. Color stop points are the colors you want to render your transitions with. You can also set a starting point and a direction (or an angle) along with the gradient effect. The default direction is top to bottom.

## Linear Gradient Example
![left to right linear gradient](https://www.dropbox.com/s/v80qhr4zd623wi2/linear_left_right.PNG?raw=1)
```
header {
    background: linear-gradient(to right, green, white);
}
```
This rule will apply a gradient from left to right starting from green and ending in white.

## Angled Linear Gradient

For extra control over the direction of your gradient, you can define an angle instead of one of the predefined directions (to bottom, to top, to right, to left, to bottom right, etc.)

## Angled Gradient Example
![45 degree linear gradient](https://www.dropbox.com/s/3zaopbqw07vvtil/angled_linear_gradient.PNG?raw=1)
```
header {
    background: linear-gradient(45deg, yellow, red);
}
```
This rule will apply a gradient at a 45 degree angle starting from yellow and ending in red.

## CSS3 Radial Gradients
A radial gradient is defined by its center point.

To create a radial gradient the minimium requirements are that you define at least two color stops.

The default shape is an ellipse.

## Radial Gradient Example 
![default radial gradient with three colors](https://www.dropbox.com/s/t22blpoh6i9730w/basic_radial.PNG?raw=1)
```
header {
    background:  radial-gradient(red, yellow, green);
}
```
This rule will apply a radial gradient starting from a red ellipse center then turning yellow and finally green.






#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.w3schools.com/css/css3_gradients.asp



