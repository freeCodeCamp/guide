---
title: Border Property
---
## Border Property

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

The `border-style` property sets a wide range of different types of borders.

The various values are:
- `dotted` - Sets a dotted border.
- `dashed` - Sets a dashed border.
- `solid` - Sets a solid border.
- `double` - Sets a double border.
- `groove` - Sets a 3D grooved border. 
- `ridge` - Sets a 3D ridged border. 
- `inset` - Sets a 3D inset border. 
- `outset` - Sets a 3D outset border.
- `none` - Sets no border.
- `hidden` - Sets a hidden border.

Based on the property you choose, these styles can be mismatched. 
You can style each side seperately:
```css
  border-top-style: solid;
  border-left-style: dotted;
  border-right-style: dashed;
  border-bottom-style: double;
```

Or you can style them all at once:
```css
  border-style: solid dashed double dotted;
```
As shown, the border property allows you to select different sections of it. [top, bottom, left, right]

Another important `border`property is the `border-radius` property. This can either be declared in pixels or in percentage. The `border-radius` property adds rounded corners to elements,


### Border Width
The `border-width` property specifies the width of the four borders.

The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.

The `border-width` property can have from one to four values (for the top border, right border, bottom border, and the left border).

### Border-Radius
The `border-radius` property allows the corners of a border to be rounded. This is done by providing a size for
how much the border is to be rounded. Size can be in px or %.
```css 
  border-radius: 25px;
```
Each corner of `border-radius` can be adjusted. The order is top, bottom, left, right.
```css 
  border-radius: 15% 10px 30% 5px;
```

### More Information:

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [CSS3 Border Radius](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### Other Border Attributes
- 'border-radius' - This can set radius of the border. 
- 'border-spacing' - This can set spacing between the text and border. 
- 'border-image' - This sets an image as border. 

Browser Support: IE6+
