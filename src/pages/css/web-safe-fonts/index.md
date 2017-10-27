---
title: Web Safe Fonts
---
## Web Safe Fonts

Web safe fonts are fonts that are pre-installed in many operating systems. While the systems may not have all the same fonts installed, they will have many identical fonts installed. Fonts that are installed in two or more types of operating systems are considered web safe as they will display identically on a browser. 

In addition to web safe fonts, there are also universal fonts. Universal fonts are installed on all operating systems; and are thus guaranteed to display correctly. They are:
 - Arial
 - Courier New
 - Georgia
 - Times New Roman
 - Verdana

When creating text on a web page, it is always good to verify if the font is web safe or not. This will guarantee that the style of font you intend will display. If you are unable to do so, using the "Fallback" system in CSS helps avoid design compromise. When using the font-family property in CSS, the developer should, via best practice, pick two font styles and a family designation in order to utilize the "fallback" system. The "fallback" system is where the browser will utilize the backup font if the first font is not supported, and then the family type if neither font is available. This allows the developer to control font display even if their original font is not available.   

For example:

p {
  font-family: "Time New Roman", Georgia, serif;
  }
  
  These above are both serif fonts. The system will first look for Times New Roman. If it fails to find that font, it will look for Georgia. In the event that Georgia is unavailable as well, the system will pick a serif font it has. Thus ensuring a design type font intended (even if not exactly identical to what was coded). 
  
  There are three common families of fonts to pick from:
  - Serif
  - Sans-serif
  - Monospace


#### More Information:
<a href='https://en.wikipedia.org/wiki/Web_typography' target='_blank' rel='nofollow'>Wikipedia</a>

<a href='https://websitesetup.org/web-safe-fonts-html-css/' target='_blank' rel='nofollow'>Web Safe Fonts</a>

<a href='http://www.coffeecup.com/help/articles/what-is-a-web-safe-font/' target='_blank' rel='nofollow'>What Is A Web Safe Font</a>

<a href='https://www.cssfontstack.com/' target='_blank' rel='nofollow'>CSS Font Stack</a>

<a href='http://www.webdesigndev.com/16-gorgeous-web-safe-fonts-to-use-with-css/' target='_blank' rel='nofollow'>30 Web Safe Fonts</a>



