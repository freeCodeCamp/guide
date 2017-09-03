---
title: Bootstrap Modals
---
## Bootstrap Modals
Bootstrap Modals are dialog boxes/popout windows that are positioned over everything else in a document when activated.

<div class="modal-content">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
    </div>
    <div class="modal-body">
        This is a modal! Wow!
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
</div>

### How to use
Bootstrap Modals are activated using either data-attributes or JavaScript. To use either method you first need to include Bootstrap CSS, Bootstrap JS, and Jquery from a <a href='https://getbootstrap.com/docs/3.3/getting-started/' target='_blank' rel='nofollow'>CDN</a> or local environment. Once you've got your development environment set up: <br>
###### data-toggle or href method:
  1. Add a `data-target` or `href` attribute on the link or button element used with the id of your target modal: `data-target="#myModal"` or `href="#myModal"`.
  1. Make sure the id attribute matches on the modal element `id="myModal"` (see below example)

###### JavaScript method:
  * Activate a modal with an id of `myModal` using jQuery:
  ```javascript
    $('#myModal').modal('show')
  ```

###Live Demo: 
```HTML
<!--Button Trigger-->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        Launch live demo modal
</button>

<!--Modal-->
<div class="modal fade" id="myModal" role="dialog">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"></button>
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
            This is a modal! Wow!
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
    </div>
</div>
</div>
```

  ``` 
  <div class= "text-center">
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Launch live demo modal
    </button>
</div>

    <div class="modal fade" id="myModal" role="dialog"">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                    This is a modal! Wow!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
There are many different ways to incorporate Bootstrap Modals into a user interface. For more information on using modals in Bootstrap, check out the <a href='https://getbootstrap.com/docs/3.3/javascript/#modals' target='_blank' rel='nofollow'>Bootstrap website</a> or this w3Schools <a href='https://www.w3schools.com/bootstrap/bootstrap_modal.asp' target='_blank' rel='nofollow'>article</a>.