---
title: Target the Same Element with Multiple jQuery Selectors
---
The multiple jQuery selectors are:

1.  By type: `$("button")`
2.  By class: `$(".btn")`
3.  By id: `$("#target1")`

    <script>
      $(document).ready(function() {
        $("button").addClass("animated");
        $(".btn").addClass("shake");
        $("#target1").addClass("btn-primary");
      });
    </script>