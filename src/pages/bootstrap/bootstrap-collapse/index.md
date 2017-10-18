## Bootstrap Collapse
The .collapse class indicates a collapsible element which can be shown or hidden with another element interaction. 

## How to Use
Let's have two elements. One is content element that'll be collapsible. Other is controller element that will show or hide our collapsible content element.

### Content element
A paragraph!
```html
<p>Lorem ipsum dolar, Free Code Camp rocks... </p>
```

1. Add `.collapse` class to state that the paragraph is a collapsible element.
2. Add `id` to make this collapsible element accesible for controller element.
```html
<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p>
```

### Controller element
A button!
```html
<button>Click Me To See Some Magic!</button>
```
1. Add `data-toggle="collapse"` attribute to control collapsible element.
2. Add `data-target="#id"` attribute to reference the collapsible element with its id.
```html
<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button>
```

### See it in Action
![Alt Text](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)




#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://getbootstrap.com/docs/4.0/components/collapse/

