---
title: CSS3 Gradients
---
## CSS3 Gradients

CSS3 gradients let you display smooth transitions between two or more specified colors.


CSS3 defines two types of gradients:

    Linear Gradients (goes down/up/left/right/diagonally)
    Radial Gradients (defined by their center)

<b>Linear Gradients</b>

`To create a linear gradient you must define at least two color stops.`

<b> Sytnax </b>
` background: linear-gradient(direction, color-stop1, color-stop2, ...);`

<b>Example </b>

```
#grad {
    background: linear-gradient(red, yellow); 
}
```

<b>Radial Gradients</b>
```A radial gradient is defined by its center.
To create a radial gradient you must also define at least two color stops.
By default, shape is ellipse, size is farthest-corner, and position is center.
```

<b> Sytnax </b>
`  background: radial-gradient(shape size at position, start-color, ..., last-color); `

<b>Example </b>

```
#grad1 {
  background: radial-gradient(red, yellow, green);
}
```

<b>HTML Example </b>

```
<div id="grad"></div>
<div id="grad1"></div>

```
