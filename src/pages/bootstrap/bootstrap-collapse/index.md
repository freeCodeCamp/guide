---
title: Bootstrap Collapse
---

The Bootstrap collapse plugin allows you to toggle content on your pages with a few classes thanks to some helpful JavaScript.

Collapsibles are useful when you want to hide and show large amount of content.

### How to use it

To use collapse you can do it in two ways:

* Using `href` on the `<a>` tag
* Using `data-target` on `<button>` tag

The value in `href` or `data-target` will be the selector of the element to collapse. Wether you decide to use the `<a>` or the `<button>` tag, the `data-toggle="collapse"` is required.

The element to collapse must contain the class `.collapse`. 

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

## Example

```html
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-block">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
```

### Using it with JavaScript

This plugin allow you to use it with JavaScript where you only need to select the element you want to collapse to enable it:

```js
$('.collapsible-element').collapse();
```

The `collapse` method accepts an optional object where you can set initial state of the collapsable element. The options are:
* `toggle`: It will hide or show the element depending on its state. If it is hidden it will be shown, if it is shown it will be hidden.
* `hide`: Hides the element.
* `show`: Shows the element.

```js
$('.collapsible-element').collapse('hide');
```

Also there are some exposed methods to hook into the collapse functionality:

* `show.bs.collapse`:	Fires immediately when the `show` instance method is called.
* `shown.bs.collapse`: Fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
* `hide.bs.collapse`:	Fired immediately when the `hide` method has been called.
* `hidden.bs.collapse`:	Fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).

```js
$('.collapsible-element').on('show.bs.collapse', function() {
  // for example you want to make an AJAX call to get some data to put in the collapsible element.
})
```
### See it in Action
![Alt Text](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### More Information:

<a href='https://v4-alpha.getbootstrap.com/components/collapse/' target='_blank' rel='nofollow'>The official Bootstrap 4 guide on Collapse</a>