---
title: Linear Gradient
---

## Linear Gradient

The CSS `linear-gradient()` function generates an image containing a gradient. It requires a direction and two or more color stops.

```CSS
background-image: linear-gradient(90deg, red 0%, blue 100%);
```

#### Direction:
The first property you provide is the direction. This can be a set of keywords or a value in degrees.

##### Across
```CSS
background-image: linear-gradient(to top, red, blue);
```
![0deg red to blue gradient](https://raw.githubusercontent.com/andrewehipp/freeCodeCampAssets/master/0deg-red-blue.jpg)

##### Diagonal
```CSS
background-image: linear-gradient(to right top, red, blue);
```

![45deg red to blue gradient](https://raw.githubusercontent.com/andrewehipp/freeCodeCampAssets/master/45deg-red-blue.jpg)

##### Degrees
```CSS
background-image: linear-gradient(90deg, red, blue);
```

![90deg red to blue gradient](https://raw.githubusercontent.com/andrewehipp/freeCodeCampAssets/master/90deg-red-blue.jpg)


#### Color Stops:

You provide a linear gradient as many color stops as needed. You can use `%` values to control the position of the colors on the gradient.

```CSS
background-image: linear-gradient(90deg, blue, red, yellow);
// The same gradient written with percentages.
background-image: linear-gradient(90deg, blue 0%, red 50%, yellow 100%);
```

![90deg blue 30% to red 80% to yellow 100%](https://raw.githubusercontent.com/andrewehipp/freeCodeCampAssets/master/90deg-blue-red-yellow.jpg)

Using color stops you can place the colors along the gradient.

```CSS
background-image: linear-gradient(90deg, blue 30%, red 80%, yellow 100%);
```

![90deg blue 30% to red 80% to yellow 100%](https://raw.githubusercontent.com/andrewehipp/freeCodeCampAssets/master/90deg-blue30-red80-yellow100.jpg)

#### More Information:
* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
* (CSS gradient generator)[http://www.colorzilla.com/gradient-editor/]
