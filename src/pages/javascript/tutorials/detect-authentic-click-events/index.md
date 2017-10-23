
## Detect authentic click events

There might be a situation where you want to do some specific things only if the click event was genuinely triggered by a user and not by some script to simulate a click event.

There is a very simple solution to this problem, javascript event object provides us with a property **.istrusted** which can be used to tell the difference.

#### Here is an example of using this method - 


```javascript

    // assuming that there is a button in the html.
    
    const button = document.querySelector('button');
    
    button.addEventListener('click', (e) => {
      if (e.isTrusted) {
        console.log('Button clicked by a real user.');
      } else {
        console.log('Button click simulated by a script.');
      }
    });
    
    button.click() // this would output "Button click simulated by a script."

```
