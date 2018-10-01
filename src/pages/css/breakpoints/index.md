---
title: Breakpoints
---
## Breakpoints

**CSS breakpoints** are useful when you want to update styles based on the screen size. For example, from a device measuring 1200px width and above, use the `font-size: 20px;`, or else use the `font-size: 16px;`.

What we have started with is from the greater than 1200px, a common laptop screen's width. You may also have noticed that we mentioned 'greater than', meaning that we are in a way using something like an '**if-then**' statement.

Let's turn it into CSS code: 

```css
.text1 {
    font-size: 16px;
}
@media (min-width: 1200px) {
    .text1 {
        font-size: 20px;
    }
}
```

**For our convenience**, we write down the `.text1` basic styling first... then afterwards we will specify the `@media` rules.

**Tip**: you may see on a common CSS Framework called 'Bootstrap', that they have adopted **'min-width' and up** in their Bootstrap v4.0, as compared to their old Bootstrap v3.0 using **'max-width' and down**.
This is only a **preference**, and there is nothing wrong with saying '*this* size and less than' versus '*this* size and greater than'.

It is perfectly fine to use `@media (max-width) {}` . Here is an example: 

```css
.text1 {
    font-size: 20px;
}
@media (max-width: 1199px) {
    font-size: 16px;
}
```

The example above shows that whilst you were coding you probably typed code for your desktop screen size where you might have been coding on. And only afterwards have you adapted your CSS stylesheet for smaller screen sizes.

#### More Information:
On a further note, you might want to have a look at a [freecodecamp.org article on using CSS breakpoints](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862).

As well as a CSS framework 'Bootstrap' and its approach to [Responsive breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints).
