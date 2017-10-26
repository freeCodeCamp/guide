---
title: Img Src Attribute
---
## Img Src Attribute
The `<img src>` attribute refers to the source of the image you want to display. The `img` tag is useless without the `src` attribute. It won't display an image. However, if you set the source to the location of the image, you can display any image.

For example, there is an image of the freeCodeCamp Logo located at `https://avatars0.githubusercontent.com/u/9892522?v=4&s=400`

You can set that as the image using the `src` attribute.

For example:

```html
<html>
  <head>
    <title>Img Src Attribute Example</title>
  </head>
  <body>
    <img src="https://avatars0.githubusercontent.com/u/9892522?v=4&s=400">
  </body>
</html>
```

That Piece of code displays this:

![](https://avatars0.githubusercontent.com/u/9892522?v=4&s=400?raw=true)

### More Information:
- The `src` attribute is supported by all browsers
- You can have a locally hosted file as your image as well. For example, `<img src="images/freeCodeCamp.jpeg>` would work if you had a folder called images with that image inside in the same file as your `index.html` file
- Further reading: <a href='https://html.com/attributes/img-src/' target='_blank' rel='nofollow'>HTML.com</a>
