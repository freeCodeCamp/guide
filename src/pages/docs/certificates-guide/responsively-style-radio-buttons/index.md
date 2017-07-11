---
title: "Responsively Style Radio Buttons"
parent: "certificates-guide"
---

You can use Bootstrap's `col-xs-*` classes on `form` elements. That will make radio buttons evenly spread out across the page regardless of how wide the screen might be.

Nest all of your radio buttons within a `<div class="row">` element. Then nest each of them within a `<div class="col-xs-6">` element.

    <form action="/submit-cat-photo">
      <div class="row">
        <div class="col-xs-6"><label><input type="radio" name="indoor-outdoor"> Indoor</label></div>
        <div class="col-xs-6"><label><input type="radio" name="indoor-outdoor"> Outdoor</label></div>
        <div class="col-xs-6"><label><input type="checkbox" name="personality"> Loving</label></div>
        <div class="col-xs-6"><label><input type="checkbox" name="personality"> Lazy</label></div>
        <div class="col-xs-6"><label><input type="checkbox" name="personality"> Crazy</label></div>
      </div>
      <input type="text" placeholder="cat photo URL" required>
      <button type="submit">Submit</button>
    </form>
