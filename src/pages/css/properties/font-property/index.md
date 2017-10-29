---
title: Font Property
---
## Font Property

The font property in CSS is a *shorthand property* that combines all the following sub-properties in a single declaration.

```CSS
body {
  font: normal small-caps normal 16px/1.4 Georgia;
}
```
is the same as:

```CSS
body {
  font-family: Georgia;
  line-height: 1.4;
  font-weight: normal;
  font-stretch: normal;
  font-variant: small-caps;
  font-size: 16px;
}
```

### Font Shorthand

The font property is not as straightforward as other shorthand properties, partly due to the syntax requirements for it, and partly due to inheritance issues.

Here are some things to keep in mind if using this shorthand property.

#### Mandatory Values

* Font-size and font-family are mandatory!
* If either of these are not included, the entire declaration will be ignored.
* Font-family must be declared last of all values, otherwise, again, the entire declaration will be ignored.

#### Optional Values

* All of the other values are optional.
* If you include any font-style, font-variant, and/or font-weight, they must come before font-size in the declaration.
* If they aren't, they will be ignored and may also cause the mandatory values to be ignored.

Example:

```CSS
body {
    font: italic small-caps bold 44px Georgia, sans-serif;
}
```
