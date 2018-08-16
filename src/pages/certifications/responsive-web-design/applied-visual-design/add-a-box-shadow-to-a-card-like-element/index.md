---
title: Add a box-shadow to a Card-like Element
---
## Add a box-shadow to a Card-like Element

These notes are for beginners to get a quick look on the basic usage.

### Syntax

```css
box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
```

1. The **horizontal** offset (required) of the shadow
	- positive value: shadow will be on the right of the box
	- negative value: shadow will be on the left of the box

2. The **vertical** offset (required) of the shadow
	- positive value: shadow will be below the box
	- negative value: shadow will be above the box

3. The **blur** radius (required)
	- setting to 0 will be sharp
	- the higher the number, the more blurred

4. The **spread** radius (optional)
   - positive value: increase the size of the shadow
   - negative value: decrease the size of the shadow
   - setting to 0: the shadow is same size as blur

5. Color (required)
   - hex, named, rgba or hsla

### One Side

```css
.one-edge-shadow {
  box-shadow: 0 8px 6px -6px black;
}
```

### Multiple Borders & More

You can comma separate box-shadow any many times as you like.

```css
.multiple-edges-shadow {
  box-shadow: 0 8px 20px 0px black, 8px 0px 20px 0px black;
}
```

As you see in the example, you add two shadows on different positions.