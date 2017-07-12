---
title: Target HTML Elements with Selectors Using Jquery
---
After we have created our `document ready function` we can now have code that will run after the page loads. This will assure that your code does not run before the HTML is rendered to avoid bugs.

jQuery often selects an HTML element with a selector, then does something to that element.

The following code will make the buttons have a bouncy animation on page load.

    <script>
      $(document).ready(function() {
        $("button").addClass("animated bounce");
      });
    </script>