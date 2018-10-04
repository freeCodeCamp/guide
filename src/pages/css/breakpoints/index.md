---
title: Breakpoints
---
## Breakpoints

CSS breakpoints are points where the website content responds according to the device width.  CSS breakpoints are also called media query breakpoints, which can be set with media queries<sup>2</sup>.

CSS breakpoints allow one to design the best possible layout on all devices for the user.  There are no set breakpoint rules.  However, there are some industry guiding principles<sup>2</sup>.  

Designing with a mobile-first or larger device first approach allows one to decide on the necessary breakpoints scaling up, using mid-width, or scaling down, using max-width, based on page content<sup>2</sup>.

Due to the many numbers of devices with varying widths and heights it is common to group devices into five categories: 1) Extra Small, 2) Small, 2) Medium, 4) Large and 5) Extra Large.  Using the right breakpoints provides the user with a truly responsive web experience.  Remember when deciding on what breakpoints to include to take into account one's layout content and the height and width restrictions implemented by individual devices<sup>1</sup>.

Syntax<sup>1</sup>:

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #image { 
    width: 100px;
    height: 200px;
  }
  #tribute-info {
    font-size: 14px;
    height: 100vh;
    width: 250px;
  }
} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

### Sources

1. [Visit W3School's CSS background Property page for more information.](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint)
2. [Projapati, Ananda. "How to use CSS breakpoints to create responsive designs" *FlyWheel*. February 21, 2018. Accessed: October 3, 2018](https://getflywheel.com/layout/css-breakpoints-responsive-design-how-to/)

