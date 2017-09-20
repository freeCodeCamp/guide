---
title: Learn How Script Tags and Document Ready Work
---
For some reason FCC likes to introduce `jQuery` before JavaScript itself.

To add JS to your HTML, you need a `script` tag. Your browser will run any JavaScript inside a script element, including jQuery.

Inside your script element, add this code: `$(document).ready(function() {` to your script. Then close it on the following line (still inside your script element) with: `});`

    <script> $(document).ready(function(){

    });</script>