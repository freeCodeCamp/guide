---
title: Styling Links
---
## Styling Links

Very often, the standardized looks of links on your page may seem dull and unexciting. Luckily, CSS allows you to make your links look just  the way you want them

Links are enwrapped by `<a>` tags. Therefore, here is a basic way of styling your links in your CSS file.

```
a {
  color: red;
}
```
This snippet of code adds the `color` property to your links. 

### Link properties
The properties that we can attribute to links are quite straightforward and easy to remember. Among those you will certainly use, you have `color`, `text-decoration`, `font-family`, `font-size`(if you find yourself in the mood to make the link font different from the rest of your page), `background-color`.

### Link states
You might have noticed that a link always looks different. When yet to be clicked, it will be of a certain color; when clicken upon, said color will change. Same could go for links with underlines. How do you accomplish that in your CSS file?

It's simple: every 'state' a link finds itself into can be addressed with CSS properties.

```
a:hover {
  color: blue;
}
```
`a:hover` symbolizes the state of your link when, you guessed it, the mouse hovers over it. In the same way, we also have `a:visited`, for links which have been clicked, `a:link`, for untouched links, `a:active` for how you want your link to look like in the very moment it's clicked. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


