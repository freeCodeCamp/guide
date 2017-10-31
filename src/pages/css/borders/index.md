---
title: Border Property
---
## Border Property

The CSS border properties allow you to specify the style, width, and color of an element's border.

Border Style

The border-style property specifies what kind of border to display.

The following values are allowed:

    dotted - Defines a dotted border
    dashed - Defines a dashed border
    solid - Defines a solid border
    double - Defines a double border
    groove - Defines a 3D grooved border. The effect depends on the border-color value
    ridge - Defines a 3D ridged border. The effect depends on the border-color value
    inset - Defines a 3D inset border. The effect depends on the border-color value
    outset - Defines a 3D outset border. The effect depends on the border-color value
    none - Defines no border
    hidden - Defines a hidden border

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).
Example
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;} 
Border Width

The border-width property specifies the width of the four borders.

The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.

The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border).
5px border-width
Example
p.one {
    border-style: solid;
    border-width: 5px;
}

p.two {
    border-style: solid;
    border-width: medium;
}

p.three {
    border-style: solid;
    border-width: 2px 10px 4px 20px;
} 
Border Color

The border-color property is used to set the color of the four borders.

The color can be set by:

    name - specify a color name, like "red"
    Hex - specify a hex value, like "#ff0000"
    RGB - specify a RGB value, like "rgb(255,0,0)"
    transparent

The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border). 

If border-color is not set, it inherits the color of the element.
Red border
Example
p.one {
    border-style: solid;
    border-color: red;
}

p.two {
    border-style: solid;
    border-color: green;
}

p.three {
    border-style: solid;
    border-color: red green blue yellow;
} 

### More Information:

MDN Documentation: <a href='https://www.w3schools.com/css/css_border.asp' target='_blank' rel='nofollow'>MDN</a>

Browser Support: IE6+
