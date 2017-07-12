---
title: Use HTML5 To Require A Field
---
You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.

For example, if you wanted to make a text input field required, you can just add the word required within your input element, you would use: `<input type="text" required>`.

    <form action="/submit-cat-photo">
      <input type="text" placeholder="cat photo URL" required>
      <button type="submit">Submit</button>
    </form>