---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/logic/dining-philosophers-problem/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The **dining-philosophers problem** shows synchronization issues and how to deal with them. 

Consider five philosophers sitting around the table. In front of each philosopher there is a plate of pasta (noodles or rice) and one single chopstick. While the philosophers think they do not eat and do not require a chopstick. Once a philosopher gets hungry he or she must obtain two closest chopsticks, one from the right and one from the left. After eating the philosopher puts down both chopsticks and resumes thinking. Since chopsticks are shared resources, neither a philosopher to the right no philosopher to the left of a dining philosopher can eat.

The problem is how to avoid situation when each philosopher keeps one chopstick infinitely long, waiting for another chopstick to be released (deadlock). Or another extreme situation when some philosophers do not release the chopsticks eating infinitely long, forcing other philosophers to starve (starvation). 

The dining-philosopher problem represents the need to allocate limited resources among several processes without deadlock and starvation.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


