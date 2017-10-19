---
title: jQuery CSS Method
---
## jQuery CSS Method

The jQuery .css() method gets the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.

### Getting value of the properties:

To return the value of a specified CSS property, use the following syntax:

    $(selector).css(propertyName);
For eg:

    $('#element').css('background');

### Changing/setting properties:
For one element:

    <script>
      $(document).ready(function() {
        $("#target1").css("color", "red");

      });
    </script>

For two or more elements/properties:
    $('#element').css({
        'background': 'gray',
        'color': 'white'
    });

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->
=======

Documentation: <a href='http://api.jquery.com/css/' target='_blank' rel='nofollow'>api.jquery</a>

