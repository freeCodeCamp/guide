---
title: CSS-Preprocessors
---
## CSS-Preprocessors

CSS-Preprocessors are one of a devs best friend. it has many feature that make styling large projects or complex systems a breeze and makes sure you are using the DRY ( don't repeat yourself) method. With just plain CSS it can be quite difficult to maintain a project. Pre-processors, with their advanced features, helped devs make resuable mainainabele code and increase productivity.

## Top CSS-Preprocessors:

### SASS(SCSS)
![SASS-LANG](http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg)

### LESS
![LESS](https://prepros.io/img/less-logo.png)

### Stylus
![stylus-lang](http://stylus-lang.com/img/stylus-logo.svg)

All pre-processors have different syntax but aren't to much different. They all support classic CSS coding and their syntax are like classic CSS.

SASS and Stylus do things a bit differently. In SASS you don't need the curly brackets or semicolons and in Stylus you don't need colons but both are optional.

### BOOM!!! We Got Variables

ever wanted to use the same color or style in different spot well we have variables for that.

#### SASS(SCSS)

```
$font-size: 16px;

.title {
    font-size: $font-size;
}
```
#### LESS
```
@font-size: 16px;

.sub-text {
    font-size: @font-size;
}
```
#### Stylus
```
font-size = 16px

text
    font-size font-size
```
### Nesting Tree

In CSS you have to write selectors and their combinations in separate lines and this can look really ugly.

```
ul { margin: 0; }
ul li { float: left; }
ul a { color: #999; }
ul a:hover { color: #229ed3; }
```

But now we have a way to visually see this and this looks nice.

#### SASS(SCSS)

```
$link-color: #999;
$link-hover: #229ed3;

ul {
    margin: 0;

    li {
        float: left;
    }

    a {
        color: $link-color;

        &:hover {
            color: $link-hover;
        }
    }
}
```

#### LESS
```
@link-color: #999;
@link-hover: #229ed3;

ul {
    margin: 0;

    li {
        float: left;
    }

    a {
        color: @link-color;

        &:hover {
            color: @link-hover;
        }
    }
}
```

#### Stylus
```
link-color = #999
link-hover = #229ed3

ul
    margin 0
    li
        float left
    a
        color link-color
        &:hover
            color link-hover
```            

### Extends

Extends allow for making general styles that can be used again over and over again.

#### SASS(SCSS)
```
.block { margin: 10px 5px; }

p {
  @extend .block;
  border: 1px solid #eee;
}

ul, ol {
  @extend .block;
  color: #333;
  text-transform: uppercase;
}
```

#### LESS
```
.block { margin: 10px 5px; }

p {
  &:extend(.block);
  border: 1px solid #eee;
}

ul, ol {
  &:extend(.block);
  color: #333;
  text-transform: uppercase;
}
```

#### stylus

```
.block
    margin 10px 5px

p
    @extend .block
    border 1px solid #eee

ul
ol
    @extend .block
    color #333
    text-transform uppercase
```

### Color Operatons

Color operations help with changing the color but aren't the most essential.

#### SASS(SCSS)
```
saturate($color, $amount)
desaturate($color, $amount)
lighten($color, $amount)
darken($color, $amount)
adjust-hue($color, $amount)
opacify($color, $amount)
transparentize($color, $amount)
mix($color1, $color2[, $amount])
grayscale($color)
complement($color)
```

#### LESS
```
saturate(@color, @amount)
desaturate(@color, @amount)
lighten(@color, @amount)
darken(@color, @amount)
fadein(@color, @amount)
fadeout(@color, @amount)
fade(@color, @amount)
spin(@color, @amount)
mix(@color1, @color2, @weight)
grayscale(@color)
contrast(@color)
```

#### Stylus
```
red(color)
green(color)
blue(color)
alpha(color)
dark(color)
light(color)
hue(color)
saturation(color)
lightness(color)
```

### If/Else Statements

Controling the styles can help build similar styles.

#### SASS(SCSS)
```
@if lightness($color) > 30% {
    background-color: black;
}

@else {
    background-color: white;
}
```

#### LESS
```
.mixin (@color) when (lightness(@color) > 30%) {
    background-color: black;
}
.mixin (@color) when (lightness(@color) =<; 30%) {
    background-color: white;
}
```

#### Stylus
```
if lightness(color) > 30%
    background-color black
else
    background-color white
```

### Imports

With imports you can seperate your stylus into smaller pieces that will allow for better maintainability and control over all the styles. With imports you can group chunks of code into similar folders and import them into a main CSS file.

#### SASS(SCSS)
```
@import "library";
@import "mixins/mixin.scss";
@import "reset.css";
```

#### LESS
```
@import "library"
@import "mixins/mixin.less"
@import "reset.css"
```

#### Stylus
```
@import "library"
@import "mixins/mixin.less"
@import "reset.css"
```

#### More Information:
[SASS](http://sass-lang.com/)

[LESS](http://lesscss.org/)

[Stylus](http://stylus-lang.com/)
