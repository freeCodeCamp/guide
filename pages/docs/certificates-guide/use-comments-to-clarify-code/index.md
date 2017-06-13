---
title: "Use Comments to Clarify Code"
parent: "certificates-guide"
---

When we start using jQuery, we will modify HTML elements without needing to actually change them in HTML.

This is a great way to make websites with a particular structure. Remember that you can start a comment with `<!-- and end a comment with -->`

    <!--You shouldn't need to modify code below this line -->
    <div class="container-fluid">
     <h3 class="text-primary text-center">jQuery Playground</h3>
     <div class="row">
       <div class="col-xs-6">
         <h4>#left-well</h4>
         <div class="well" id="left-well">
           <button class="btn btn-default target" id="target1">#target1</button>
           <button class="btn btn-default target" id="target2">#target2</button>
           <button class="btn btn-default target" id="target3">#target3</button>
         </div>
       </div>
       <div class="col-xs-6">
         <h4>#right-well</h4>
         <div class="well" id="right-well">
           <button class="btn btn-default target" id="target4">#target4</button>
           <button class="btn btn-default target" id="target5">#target5</button>
           <button class="btn btn-default target" id="target6">#target6</button>
         </div>
       </div>
     </div>
    </div>
