---
title: Selectors
---
## Selectors

Selector can have the following forms :
*   Simple Selector
*   Class Selector
*   Generic Selector
*   ID Selector
*   Universal Selector
*   Pseudo Classes

#### Simple Selector

It has a single element name such as h1. The property values in the rule apply to all occurences of the names element.The
selector could be a list of element names separated by commas, in which case the property values apply to all occurrences of all of the named elements.

```HTML
h1 {font-size: 24pt;}
h2, h3 {font-size: 20pt;}
```

#### Class Selectors

Class selectors are used to allow different occurrences of the same tag to use different style specifications. A style class is defined in a style element by giving the style class a name, which is attached to the tag’s name with a period. For example: 

```HTML
p.normal {property-value list}
p.warning {property-value list}
```

#### Generic Selectors

Generic selector is used to have a class of style specifications that applies to the content of more than one kind of tag. It's defined without a tag name in its name. In place of the tag name, you use the name of the generic class, which must begin with a period, as in the following generic
style class:
```HTML
.sale {property-value list}
```
#### ID Selectors

An id selector allows the application of a style to one specific element. The general form of an id selector is as follows:
```HTML
#specific-id {property-value list}
```
As you would probably guess, the style specified in the id selector applies to the element with the specific id:
```html
#section14 {font-size: 20}
```
specifies a font size of 20 points to the element.

#### Universal Selectors

The universal selector, denoted by an asterisk (\*), applies its style to all elements in a document. For example,
```html
* {color: red;}
```
makes all elements in the document red.

#### Pseudo Classes

Pseudo classes are styles that apply when something happens, rather than because the target element simply exists. In this section, we describe and illustrate two
pseudo classes: hover and focus

#### More Information:

*   https://www.sitepoint.com/css-selectors/


