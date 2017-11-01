---
title: CSS Preprocessors
---

## CSS-Preprocessors:
CSS Preprocessors add advanced features and extensibility which help write reusable and maintainable CSS code. The main features expressed in Preprocessors are variables, nesting, mixins, extends, color functions, basic logic including if/else and loops, math, and imports. The syntax is differently but only slightly.

#### Popular CSS Preprocessors:
* Sass
* Less
* Stylus

## Examples:

Variables:

```css
	/* Sass */
	$color: #000;

	div {
		color: $color;
	}

	/* Less */
	@color: #000;

	div {
		color: @color;
	}

	/* Stylus */
	color = #000

	div 
		color: color

```

Nesting:

```css
	/* Sass */
	ul {
		margin: 1;
		li {
			margin: 2;
		}
	}

	/* Less */
	ul {
		margin: 1;
		li {
			margin: 2;
		}
	}

	/* Stylus */
	ul
	    margin 1
	    li
	        margin 2
```

Mixins:

```css
	/* Sass */
	@mixin mixin-name($color) {
	    border: 1px solid $color;

	    &:hover {
	        border-color: #000;
	    }
	}

	h1 {
	    @include mixin-name(#000);
	}

	/* Less */
	.mixen-name (@color) {
	    border: 1px solid @color;

	    &:hover {
	        border-color: #000;
	    }
	}

	h1 {
	    .mixin-name(#000);
	}

	/* Stylus */
	mixin-name(c)
	    border: 1px solid n
	    &:hover
	        border-color: #000

	h1
	    mixin-name(#000)
```

Extends:

```css
	/* Sass */
	.class-name { 
		padding: 1px 2px;
	}

	p {
	  @extend .class-name;
	  border: 1px solid #000;
	}

	/* Less */
	.class-name { 
		padding: 1px 2px; 
	}

	p {
	  &:extend(.class-name);
	  border: 1px solid #000;
	}

	/* Stylus */
	.class-name
	    padding 1px 2px

	p
	    @extend .class-name
	    border 1px solid #000
```

Imports

```css
	/* Sass */
	@import "style.css";
	@import "components/body.scss";

	/* Less */
	@import "style.css"
	@import "components/body.less"

	/* Stylus */
	@import "style.css"
	@import "components/body.styl"

```

#### More Information:
<a href="http://sass-lang.com/">Sass</a>
<a href="http://lesscss.org/">Less</a>
<a href="http://stylus-lang.com/">Stylus</a>
