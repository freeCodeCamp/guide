## Onclick Event Attribute
when the element is clicked fires a event, It works just like *onclick method* or  ```addEventListener('click')``` to the element

```html
<element onclick="event"></element>
```
* event: it can be a javascript function or you can write raw javascript

### Examples
Changing the color of a ```<p>``` element when clicked
```html
<p id="text" onclick="redify()">
Change my color
</p>

<script>
function redify(){
  let text = document.querySelector('#text');
  text.style.color = "red";
}
</script>
```

Using raw javascript onclick attribute 
```html
<button onclick="alert('Hello')"> Hello World </button>
```

#### More Information:
[MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)

