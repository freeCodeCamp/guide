---
title: Border Property
---
## Border Property

CSS Border
----

Our personal favorite CSS attribute, allow you to completely customize the borders that appear around HTML elements. With HTML, it used to be impossible to place a border around an element, except for the table. CSS Borders let you create crisp, customized border styles with very little work, compared to the antiquated methods of HTML.

The `border` shorthand property sets all the border properties in one declaration. 
```css 
  border: 1px solid #000;
```

The properties that can be set, are (in order): 
1. `border-width`
2. `border-style`
3. `border-color`

It does not matter if one of the values above are missing, for example:

```css 
  border: solid red;
```
The above code is also valid CSS.

### Border Styles

The 'border-style' property sets a wide range of different types of borders.

The various values are:
- 'dotted' - Sets a dotted border.
- 'dashed' - Sets a dashed border.
- 'solid' - Sets a solid border.
- 'double' - Sets a double border.
- 'groove' - Sets a 3D grooved border. 
- 'ridge' - Sets a 3D ridged border. 
- 'inset' - Sets a 3D inset border. 
- 'outset' - Sets a 3D outset border.
- 'none' - Sets no border.
- 'hidden' - Sets a hidden border.

Based on the property you choose, these styles can be mismatched.
```css
  border-top-style: solid;
  border-left-style: dotted;
  border-right-style: dashed;
  border-bottom-style: double;
```
As shown, the border property allows you to select different sections of it. [top, bottom, left, right]

### Border Width

To alter the thickness of your border use the border-width attribute. You may use key terms or exact values to define the border width. Note: You must define a border-style for the border to show up. Available terms: thin, medium, thick.

Example:
```css
<style type="text/css">
table {
	border-width: 7px;
	border-style: outset;
}
td {
	border-width: medium;
	border-style: outset;
}
p {
	border-width: thick;
	border-style: solid;
}
</style>
```

### Border Color

Now for the creative aspect of CSS Borders! With the use of the border-color attribute, you will be able to create customized borders to fit the flow and layout of your website. Border colors can be any color defined by RGB, hexadecimal, or key terms. Below is an example of each of these types.

Example:
```css
<style type="text/css">
table {
	border-color: rgb( 100, 100, 255);
	border-style: dashed;
}

td {
	border-color: #FFBD32;
	border-style: ridge;
}

p {
	border-color: blue;
	border-style: solid;
}
</style>
```


### Border: All in One

While it is nice that CSS allows a web developer to be very specific in creating a customized border, sometimes it is just easier and less of a headache to create a uniform border, all in single line of CSS code.

Example:
```css
<style type="text/css">
p { border: 20px outset blue; } 
h4 { border: 5px solid; } 
h5 { border: dotted; }
</style>
```

### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border' target='_blank' rel='nofollow'>MDN</a>

Browser Support: IE6+
