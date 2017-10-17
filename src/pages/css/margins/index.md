----
-title: Margins
----

## Margins

In CSS, margins are the amount of space around the outside of elements. Remember that all elements sit inside boxes, per the box model.

In the box model, the element's content sits in the middle - this is the content box. The padding surrounds the content box. Then the border surrounds the padding and the content boxes. Last but not least, the margin surrounds all these boxes.

![The box model](http://inserthtml.com/codex/wp-content/uploads/2012/06/box-model1.gif)

You can set the size of the margin all-around by using the `margin` property and typing just one amount, in pixels:

```
img {
  margin: 10px;
}
```

If you need to set the margin for only one side, use `margin-top`, `margin-right`, `margin-bottom`, or `margin-left`.

```
h1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
```

There's also a shorthand way to set the margin size on each side. Write `margin:` and then four values after it. The pattern goes like this: 
`margin: [top amount] [right amount] [bottom amount] [left amount];`

```
img {
  margin: 20px 15px 8px 4px;
  
  // top margin is 20px, right margin is 15px,
  // bottom margin is 8px, and left margin is 4px
}
```

When you use only two values after `margin:`, that is shorthand that sets the top and bottom margin sizes. This is used on images a lot of times, with the `display: block` property. This centers the image in the page.

```
img {
  display: block;
  margin: 0 auto;
}
```

The margin at the top and bottom of the image is 0 - the `px` is unnecessary since the value is 0. The left and right margins of the image re-adjust when you resize the browser window.



