---
title: Create a Horizontal Line Using the hr Element
---
## Create a Horizontal Line Using the hr Element

I had an issue when trying to complete this task and saw online that I was not the only one so I figured I would give some advice for this task: 

If you place the <hr> tag in the correct place and it fails check that you have the <emp> from the last task placed BEFORE the <p> tag.

This fails (even if <hr> is placed in the code correctly):
<h4><s>Google</s>Alphabet</h4>
      
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
      
This Passes (when <hr> is placed in the code correctly):
<h4><s>Google</s>Alphabet</h4>
      
<em><p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p></em>

I hope this helps anyone else who gets stuck here as this issue is not addressed and is not actually part of this lesson.
