---
title: Bootstrap Icons
---
## Bootstrap Icons

Bootstrap 4 doesn’t include an icon library by default, but they have a handful of recommendations for you to choose from.

### Preferred

They’ve tested and used these icon sets themselves.

* [Iconic](https://useiconic.com/open/)
* [Octicons](https://octicons.github.com/)
* [Entypo](http://www.entypo.com/)

### More options

While they haven’t tried these out, they do look promising and provide multiple formats—including SVG.

* [Bytesize](https://github.com/danklammer/bytesize-icons)
* [Google Material icons](https://material.io/icons/)
* [Ionicons](http://ionicons.com/)
* [Feather](https://feathericons.com/)
* [Dripicons](http://demo.amitjakhu.com/dripicons/)
* [Ikons](http://ikons.piotrkwiatkowski.co.uk/)
* [Glyph](http://glyph.smarticons.co/)

### Other options not mentioned on the Bootstrap webpage

* [FontAwesome](http://fontawesome.io/)
* [Icomoon](https://icomoon.io/)
* [TheNounProject](https://thenounproject.com/)

## How to Use?

Let's see how to use some of the above icon libraries.

### 1. FontAwesome

#### Using CSS


  1. Download **FontAwesome**.
  2. Copy *font-awesome directory* into your project.
  3. In the `<head>` of your html, reference the location to your *font-awesome.min.css*.

   ```<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">```

  4. Search icons with keywords [here](http://fontawesome.io/icons/)

  5. Choose and open one of the icons and you'll see how to use the icon with the `<i>` tag and its icon class name.

   ```<i class="fa fa-free-code-camp" aria-hidden="true"></i>```


##### Advance Usage


* To increase icon sizes relative to their container, use the `fa-lg` (33% increase), `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes

```html
<i class="fa fa-free-code-camp fa-lg"></i> fa-lg
<i class="fa fa-free-code-camp fa-2x"></i> fa-2x
<i class="fa fa-free-code-camp fa-3x"></i> fa-3x
<i class="fa fa-free-code-camp fa-4x"></i> fa-4x
<i class="fa fa-free-code-camp fa-5x"></i> fa-5x
```

* Change icon size with font-size.

```html
<i class="fa fa-free-code-camp" style="font-size:56px;"></i>
```


* Use `fa-ul` and `fa-li` to easily replace default bullets in unordered lists.

```html
<ul class="fa-ul">
  <li><i class="fa-li fa fa-check-square"></i>List icons</li>
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
  <li><i class="fa-li fa fa-square"></i>in lists</li>
</ul>
```

* Use the `fa-spin` class to get any icon to rotate, and use `fa-pulse` to have it rotate with 8 steps. Works well with `fa-spinner`, `fa-refresh`, and `fa-cog`.

```html
<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
```

* Use `fa-border` and `fa-pull-right` or `fa-pull-left` for easy pull quotes or article icons.

```html
<i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
...tomorrow we will run faster, stretch out our arms farther...
And then one fine morning&mdash; So we beat on, boats against the
current, borne back ceaselessly into the past.
```

* To arbitrarily rotate and flip icons, use the `fa-rotate-*` and `fa-flip-*` classes.

```html
<i class="fa fa-shield"></i> normal<br>
<i class="fa fa-shield fa-rotate-90"></i> fa-rotate-90<br>
<i class="fa fa-shield fa-rotate-180"></i> fa-rotate-180<br>
<i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
<i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
<i class="fa fa-shield fa-flip-vertical"></i> fa-flip-vertica
```

* To stack multiple icons, use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon. `fa-inverse` can be used as an alternative icon color. You can even throw larger icon classes on the parent to get further control of sizing.

```html
<span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>
fa-twitter on fa-square-o<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
</span>
fa-flag on fa-circle<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
</span>
fa-terminal on fa-square<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x text-danger"></i>
</span>
fa-ban on fa-camera
```

## See It in Action

![font awesome icon usage gif](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/icons/fontawesome.gif)


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://getbootstrap.com/docs/4.0/extend/icons/

http://fontawesome.io/examples/

