---
title: Linear Gradients
---

## CSS3 Linear Gradients

Until CSS3, if you wanted to use gradients, you had to do it in another program and use it as an image.

This caused great problems. After all, if you changed one color, you had to open up Photoshop (or whatever program you would have used), create the image, upload to the server, and change the CSS.

But that all changed when CSS3 came. Today, we're going to discuss one type of gradient you can use on the website: the linear gradient.

Linear gradients are called as they are because they flow in one direction in a straight line.

### Browser Support

Data is from [Can I Use](https://caniuse.com/#feat=css-gradients).

#### Desktop

| Chrome | Opera | Firefox | IE | Edge | Safari |
| :--: | :--: | :--: | :--: | :--: | :--: |
| 10 | 11.6 | 3.6 | 10 | 12 | TP |

#### Mobile

| iOS Safari | Opera Mobile | Opera Mini | Android | Android Chrome | Android Firefox |
| :--: | :--: | :--: | :--: | :--: | :--: |
| 11.3 | 12 | No | 4 | 67 | 60 |

### Syntax

The basic syntax for linear gradients is:

```css
linear-gradient(color, color);
```

So if you used `linear-gradient(blue, red)`, this would be the output:

<div style="height: 250px; width: 100%; background: linear-gradient(blue, red); border-radius: 4px;"></div>

However, this is boring. What if I wanted the gradient in a different direction?

Fortunately, the syntax makes it possible:

```css
linear-gradient(direction, color, color);
```

There are many directions you can use. Here are some of them:

1. `to top`
2. `to right`
3. `to bottom`
4. `to left`
5. `to left top`
6. `to right top`
7. `to bottom right`

Now, if you want to be more specific, you could use degrees (`#deg`) or radians (`#rad`).

If you used `0deg` or `0rad` on a gradient, you'll get a `to top` direction. From there, it will rotate clockwise.

So using `45deg` or `0.79rad` will get you this:

```css
div {
  background: linear-gradient(0.79rad, blue, red);
}
```

<div style="height: 250px; width: 100%; background: linear-gradient(0.79rad, blue, red); border-radius: 4px;"></div>

This isn't the only way to customize linear-gradients. If you wanted to use many colors, you can do so as well.

The syntax is pretty simple as well:

```css
linear-gradient(color, color, ...);
```

And if you want direction, place it in the beginning of the function:

```css
linear-gradient(direction, color, color, ...);
```

So, if you wanted a div with a gradient background at `1.3rad` with the colors, `red`, `green`, `blue`, and `violet`, this would be the syntax:

```css
div {
  background: linear-gradient(1.3rad, red, green, blue, violet);
}
```

<div style="height: 250px; width: 100%; background: linear-gradient(1.3rad, red, green, blue, violet); border-radius: 4px;"></div>

Now, if the use ever comes to play, there is a way to stack gradients. The syntax is to add multiple linear gradients in one element (separated by a comma).

In other words:

```css
div {
  background:
    linear-gradient(to right, rgba(0,150,120,0.6), rgba(20,20,230,0.9)),
    linear-gradient(to left, rgba(200,0,127,0.9), rgba(100,100,100,0.6));
}
```

<div style="height: 250px; width: 100%; background: linear-gradient(to right, rgba(0,150,120,0.6), rgba(20,20,230,0.9)), linear-gradient(to left, rgba(200,0,127,0.9), rgba(100,100,100,0.6)); border-radius: 4px;"></div>

I'll admit: gradients are pretty cool. However, they're hard to get right.

If you use incorrect color combinations, they look horrible.

Most good gradient combinations are composed of monochromatic colors (e.g. `blue` and `sky blue`) or analogous colors (e.g. `red` and `orange`).

But if you ever feel the need to break the rules, don't be afraid to.

After all, the worst thing that could happen is a crappy design.

That's all for linear gradients. If you want to know more about another type of gradient (radial gradients), visit [this guide](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient).

### Resources

- [Mozilla Developer Network's Guide to Linear Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
- [W3 Schools Guide to Linear Gradients](https://www.w3schools.com/csSref/func_linear-gradient.asp)
- [CSS Gradient](https://www.css-gradient.com/) - If you are still struggling with the syntax, this app allows you to build gradients. After which, it will give you the CSS for the gradient.
