---
title: Image Opacity and Transparency
---
## Image Opacity and Transparency

<p>The opacity property specifies the opacity/transparency of an element.</p>
<h3>Transparent Image</h3>
<p>The opacity property can take a value from 0.0 - 1.0.</p>
<p>Note: IE8 and earlier use filter:alpha(opacity=x). The x can take a value from 0 - 100. A lower value makes the element more transparent.</p>
<h3>Example </h3>
<pre>
img {
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
}
</pre>


