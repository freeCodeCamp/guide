---
title: Section
---
## Section

The section tag is a crucial element in all HTML projects. It is used to separate your website files, which makes for significantly easier collaboration, reading and updating of the project. It also makes the site easier to style and arrange.

The section tag starts out the same as other elements, `<section>Content in here</section>`. Typically, you want to apply a certain class to the section that explains what it is going to be used for. For example, a section that is an About Us section, may look something like this: `<section class="about-us-section">About Us Content</section>`. Of course, in your projects, you are free to name your sections whatever you like, this is just an example of what a good practice may be.

The section makes it much easier to code out a big project, because you can split up the different big parts into separate chunks of code, that can be re-used, re-arranged, styled, and updated independently of any other sections. When using sections, we should not get carried away with splitting every little thing into it's own section, as that may begin to get confusing, but it is a good practice to split up your code into multiple chunks like this.

If you use PHP in your projects, you could even create a section that could be re-used on multiple pages or in different places, only ever writing it once and including it in the appropriate sections, like so: `<?php include 'inc/testimonials.php'; ?>`. This assumes that your project features an inc directory, which would house your different sections to be included in one or more spots. For more information on sections, check out the [MDN Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


