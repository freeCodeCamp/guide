---
title: Fonts
---
## Fonts

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/fonts/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height, and font-family; or a way to set the element's font to a system font, using specific keywords.

/* size | family */
font: 2em "Open Sans", sans-serif;

/* style | size | family */
font: italic 2em "Open Sans", sans-serif;

/* style | variant | weight | size/line-height | family */
font: italic small-caps bolder 16px/3 cursive;

/* style | variant | weight | stretch | size/line-height | family */
font: italic small-caps bolder condensed 16px/3 cursive;

/* The font used in system dialogs */
font: message-box;
font: icon;

/* Global values */
font: inherit;
font: initial;
font: unset;

As with any shorthand property, any individual value that is not specified is set to its corresponding initial value (possibly overriding values previously set using non-shorthand properties). Though not directly settable by font, the longhands font-stretch, font-size-adjust, and font-kerning are also reset to their initial values.

Initial value	as each of the properties of the shorthand:

    font-style: normal
    font-variant: normal
    font-weight: normal
    font-stretch: normal
    font-size: medium
    line-height: normal
    font-family: depends on user agent

Applies to	all elements. It also applies to ::first-letter and ::first-line.
Inherited	yes
Percentages	as each of the properties of the shorthand:

    font-size: refer to the parent element's font size
    line-height: refer to the font size of the element itself

Media	visual
Computed value	as each of the properties of the shorthand:

    font-style: as specified
    font-variant: as specified
    font-weight: the keyword or the numerical value as specified, with bolder and lighter transformed to the real value
    font-stretch: as specified
    font-size: as specified, but with relative lengths converted into absolute lengths
    line-height: for percentage and length values, the absolute length, otherwise as specified
    font-family: as specified

Animation type	as each of the properties of the shorthand:

    font-style: discrete
    font-variant: discrete
    font-weight: a font weight
    font-stretch: a font stretch
    font-size: a length
    line-height: either number or length
    font-family: discrete

Canonical order	order of appearance in the formal grammar of the values



The font property may be specified as either a single keyword, which will select a system font, or as a shorthand for various font-related properties.

If font is specified as a system keyword, it must be one of: caption, icon, menu, message-box, small-caption, status-bar.

If font is specified as a shorthand for several font-related properties, then:

    it must include values for:
        <font-size>
        <font-family>
    it may optionally include values for:
        <font-style>
        <font-variant>
        <font-weight>
        <line-height>
    font-style, font-variant and font-weight must precede font-size
    font-variant may only specify the values defined in CSS 2.1, that is normal and small-caps
    line-height must immediately follow font-size, preceded by "/", like this: "16px/3"
    font-family must be the last value specified.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


