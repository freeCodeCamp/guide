---
title: Bootstrap Collapse
---
## Bootstrap Collapse

We can use Bootstrap Collapse to toggle the visibility of, or hide and show content. The class `.collapse` hides the content, and the class `.collapse.show` shows the content.

### Examples

Using the `href` attribute:

    <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
      </button>
    </p>

Using the `data-target` attribute:

    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
 
#### More Information:
http://getbootstrap.com/docs/4.0/components/collapse/


