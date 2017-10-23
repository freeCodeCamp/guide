---
title: Ifraames
---
## Iframes
Iframe (inline frame) is an element of HTML that allows you to insert in your code HTMLs from other websites (for example: Wikipedia, YouTube). You can use it for widgets (weather, date). It also gives you a possibility to advertise something on your webpage.

### Atributes
- `align` (`left`, `middle`, `right`, `top`, `bottom`)
- `width` (pixels)
- `height` (pixels)
- `src` (definies URL to the HTML website)
- `name` (specifies the name of the `<iframe>`)
- `scrolling` (yes, no, auto)
- `srcdoc` (definies HTML page inserted into `<iframe>` to show on the website)
- `frameborder` (value: `1` or `0`, definies frame around the `<iframe>`)
- `marginwidth` (definies margins on the left and right in pixels)
- `marginheight` (definies margins on the top and bottom in pixels)
- `longdesc` (specifies a page with the longer description of the `<iframe>`)

### Example usages
To embed YouTube videos:

```
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=v8kFT4I31es">
</iframe>
```

To embed Wikipedia contest (600x400):

```
<iframe src="https://en.wikipedia.org/wiki/FreeCodeCamp" width="600" height="400">
```

To embed GitHub contest (1200x720):

```
<iframe src="https://github.com" width="1200" height="720">
```
