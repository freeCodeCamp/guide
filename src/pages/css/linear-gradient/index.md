---
title: Linear Gradient
---
## Linear Gradient

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/linear-gradient/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

In Linear Gradient, the colors flow in a single direction, i.e- From Left to Right, Top to Bottom, or any angle you choose.CSS gradients let you display smooth transitions between two or more specified colors.It defines two of defining gradients.They are:
1.Linear Gradient(form top to bottom, from left to right, diagonally)

![A gradient with Two colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371707961422118912/image.png)

2.Radial Gradient(defines by their center)

![Evenly Spaced Color Stops](https://www.bing.com/images/search?view=detailV2&ccid=J%2bnKG8jL&id=37DE978CD89D3EA63B7A297FA9030B64E9315FF5&thid=OIP.J-nKG8jLZ0j37wvDQ9ntIgAAAA&mediaurl=https%3a%2f%2fwww.w3schools.com%2fCSSref%2fgradient_radial.jpg&exph=150&expw=200&q=Radial+Gradient+Red+to+Green&simid=607995044768910556&selectedIndex=64)

**A Linear gradient with Two colour stops**

### Syntax- 
To create a linear gradient you must define atleast two colour stops.(They are the colours the transitions are created among).It is declared on either the **background** or **background-image** properties.

```
background: linear-gradient(direction, colour-stop1, colour-stop2, ...);
```
**Note: If no direction is Specified, the transition is Top to Bottom by default**

### Different Gradient transitions-

**Top to Bottom :**
```
background: linear-gradient(red, yellow);
```
![Top to Bottom](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**Left To Right :**

To make it left to right, you add an additional parameter at the beginning of the linear-gradient() starting with the word **to** which indicates the direction:
```
background: linear-gradient(to right, red , yellow);
```
![Left to Right](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**Diagonal Positions :**

You can also transition a gradient diagonally by specifying the horizontal and vertical starting positions, for example, top-left, or bottom-right.

Here's a sample for a gradient starting at top-left-
```
 background: linear-gradient(to bottom right, red, yellow);
```
![Top-left](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)


### Using Angles to Specify Direction of the gradient-

You can also use angles, to be more accurate in specifying the direction of the gradient:
```
background: linear-gradient(angle, colour-stop1, colour-stop2);
```
The angle is specified as an angle between a horizontal line and the gradient line.

```
background: linear-gradient(90deg, red, yellow);
```
![90 degrees](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)

### Using more than two colours-

You're not limited to just two colours, you can use as many comma seperated colours as you want.
```
background: linear-gradient(red, yellow, green); 
```
![A gradient with 3 colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)
```
background: linear-gradient(to right, red, yellow, green); 
```
![A gradient with 3 colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

You can also use other colour syntaxes like RGB or hex codes to specify the colors.

**Add Transparency**
CSS gradient also support transparency, which can be used to create fading effects. To add fading effects , we use the rgba() function can be a value from 0 to 1, and it defines the transparency of the color: 0 indicates full transparency and 1 indicates full color(no transparency).
```
background: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
```

![A gradient with 3 colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)
**Note: Internet Explorer 9 and earlier versions do not support gradients.**

**Repeating Linear Gradient**
It is used to repeat linear gradient.
```
background: repeating-linear-gradient(red, yellow, green);
```
![A gradient with 3 colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

**Hard colour stops**

You can not only use gradients to transition with fading colours, but you can also use it to change from one solid colour to another solid colour instantly
```
background: linear-gradient(to right,red 15%, yellow 15%);
```
![Hard colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

 ## Radial Gradient**
A radial gradient defines by its center. To create radial gradient you must also define two colors.
### Syntax
```
background: radial-gradient(shape size at position, start-color, ..., last-color);
```
**Evenly Spaced Color Stops**
```
background: radial-gradient(red, yellow, green);
```
![Hard colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

**Differently Spaced Color Stops**
```
background: radial-gradient(red 5%, yellow 15%, green 60%);
```
![Hard colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

**Set Shape**
We can keep the shape also as circle or ellipse. But default shape is ellipse.
```
background: radial-gradient(circle, red, yellow, green);
```

**Repeating Radial Gradient**
```
background: repeating-radial-gradient(red, yellow 10%, green 15%);
```

**More information-** [on W3Schools](https://www.w3schools.com/css/css3_gradients.asp)
