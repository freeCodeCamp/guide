---
title: Clone an Element Using jQuery
---
## Clone an Element Using jQuery

## Solution 
```javascript
<script>
  $(document).ready(function() {
    $("#target5").clone().appendTo("#left-well"); //clones the button target5 and appends it to the left well
  });
</script>
```
