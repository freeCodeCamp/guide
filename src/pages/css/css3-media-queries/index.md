---
title: CSS3 Media Queries
---
## CSS3 Media Queries

<i>My Changes</i>

<p>The introduction of Media Queries in CSS3 has improved a lot the ease of building a responsive webpage.</p>

<p>The best approach when designing a responsive website is to think mobile first; meaning that you create your page starting with the design and content of the mobile version.</p>
<p>You may think that with some scalable sizes ( %, vw or vh ), your page will adapt perfectly to any device. But it is not. Maybe for some very basic design, but certainly not for more common or complex pages.</p>
<p>The thing is, when designing your page for smaller devices, you will focus on the main content. On a bigger screen, you will have to readapt some font-size, margins, paddings and so on in order to keep your site comfortable and readable, but you will also want/need to add more content, the ones you did not judge fundamental, and fill in the space created by the screen size.</p>

<p>The process have to be thought in order to know what content have to fit on which screen, following which layout and what size. </p>

<p><b>The basic syntax</b></p>

```css
    @media only screen and (min-width: 768px) {
      p {padding: 30px;}
    }
```

<p>The <code>p</code> tag will have a padding of 30px as soon as the screen reaches min 768px width.</p>

<p><b>The AND syntax</b></p>


  ```css
    @media only screen and (min-height: 768px) and (orientation: landscape) {
      p {padding: 30px;}
    }
  ```

<p>The <code>p</code> tag will have a padding of 30px as soon as the screen reaches min 768px height and its orientation is landscape.</p>

<p><b>The OR syntax</b></p>

```css
    @media only screen and (min-width: 768px), (min-resolution: 150dpi) {
      p {padding: 30px;}
    }
```

<p>The <code>p</code> tag will have a padding of 30px as soon as the screen reaches min 768px width or its resolution reaches 150dpi</p>

<p><a href="https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries#Pseudo-BNF">List of all conditions</a></p>

<p><b>More information:</b></p>
<p><a href="https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries">https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries</a></p>
