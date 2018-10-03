---
title: Target the Parent of an Element Using jQuery
---
## Target the Parent of an Element Using jQuery

## Solution 
```javascript
<script>
  $(document).ready(function() {
    $("#target1").parent().css("background-color", "red") // targets the parent element and changes it's background color to red
  });
</script>
```
