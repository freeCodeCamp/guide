---
title: How to Create a Dropdown Menu with CSS and JavaScript
---
## How to Create a Dropdown Menu with CSS and JavaScript

Headmaster Albus Dumbledore is in desperate need of your technical wizardry. He needs you to conjure a menu for Hogwart's Faculty & Staff. Luckily for you, you've just stumbled upon this ancient tome that describes how to do just that with the powers of Vanilla Javascript...!

All magic aside, a dropdown is a toggleable menu capable of showcasing a list of items to your users. Sometimes there's just not enough real estate on your navigation bar, or perhaps, you have a set of options that would fit under one category: faculty members, products, countries, or languages, etc. This is where a dropdown comes in handy. 

The tutorial is broken into three sections: the markup, the javascript, and the styling. Each section has a set of bullet points highlighting key details. The complete example can be found here on <a href="https://codepen.io/bteng22/pen/yzdRvO">Codepen.io</a>.

### The Markup 

* The HTML markup is essentially a navigation bar inside a semantic header element.
* The Block, Element, Modifier (<a href="http://getbem.com/introduction/">BEM</a>) methodology of CSS is used here for CSS class names.
* The actual dropdown can be placed structurally below the dropdown button. This doesn't always have to be the case, but doing so makes it easier to position your dropdown relative to your button.
* Any kind of content can live inside your dropdown. It doesn't necessarily have to always be a list
* Lorem Ipsum is provided below the navigation header to show how the dropdown slides ABOVE the content. 

```html
<header class="header">
  <div class="header__container">
    <h1 class="title">
      Hogwarts School of Witchcraft and Wizardry
    </h1>
    <nav>
      <ul class="nav__list">
        <li class="nav__list-dropdown">
          <button id="dropdown-button" class="dropdown__button">
            Faculty & Staff
          </button>
          <div class="dropdown">
            <ul class="dropdown__list">
              <li>
                <a href="#">Albus Dumbledore</a>  
              </li>
              <li>
                <a href="#">Minerva McGonagall</a> 
              </li>
              <li>
                <a href="#">Rubeus Hagrid</a> 
              </li>
              <li>
                <a href="#">Severus Snape</a> 
              </li>
              <li>
                <a href="#">Poppy Pompfrey</a> 
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>
<div class="content">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper, urna ac hendrerit feugiat, justo nunc sollicitudin nulla, vitae luctus magna massa sit amet urna. Etiam ultrices eleifend ante sed blandit. Sed finibus tempor nisl et vehicula. Praesent ac arcu eget velit maximus mattis. Nullam condimentum ac purus ac pulvinar. Nunc tempus, diam sed ullamcorper molestie, purus ipsum convallis turpis, in rutrum lorem lectus eu turpis. Curabitur ac ex et urna condimentum tempus. Praesent eu mi in enim vehicula dictum.
  </p>
  <p>
    Ut interdum, arcu sit amet euismod ultrices, justo dolor eleifend enim, non consequat quam justo non lacus. Mauris justo nisl, ornare vitae commodo a, consectetur nec eros. Etiam vitae tempor justo. In hac habitasse platea dictumst. Aenean blandit tempor interdum. Vestibulum volutpat, ex id semper fringilla, nisl urna tempus augue, in euismod nibh ante nec dui. Quisque justo erat, sollicitudin luctus lectus ut, porta efficitur enim. In non magna vel odio faucibus posuere. Ut fringilla mauris mauris, non bibendum eros aliquet sed. Duis dignissim euismod dui a semper. Quisque quis ante vitae neque tempor elementum.
  </p>
</div>
```

### The Javascript 

***
#### Event Propagation (or How to Detect a Click Outside the Dropdown)

You will see the three lines of code shown below used inside our listeners. These three lines are used to detect whether or not a click was made outside of the dropdown container. If the click event is outside the dropdown, then the dropdown should be closed, otherwise nothing should happen. 

`event.data = { stopDropdownPropagation: true }` // sets a flag on the event object to prevent hiding the dropdown when the event bubbles to the event listener on the document.body

`document.body.addEventListener("click", hideDropdown)` // registering an event listener to hide the dropdown when clicked outside the dropdown

`if (event.data && event.data.stopDropdownPropagation) return` // the first line in the function hideDropdown which prevents the hiding of the dropdown if clicked within the dropdown

Instead of using the notorious [event.stopPropagation](https://css-tricks.com/dangers-stopping-event-propagation/), I've added a flag onto the event object. This flag when clicked INSIDE the dropdown container will eventually bubble to the listener registered on the body. When it bubbles to the hideDropdown function it will prevent the listener from hiding the dropdown if the click originated from within the dropdown.
***

* The dropdown container and button elements are assigned to variables.
* `dropdownButton.addEventListneer("click", toggleDropdown)` registers the `toggleDropdown` listener to the `click` event. The `toggleDropdown` function will toggle the `show` class and make sure that the click event doesn't hide the dropdown on the click handler on the document.body.
* `dropdownContainer.addEventListener("click", handleclick)` ensures clicking inside the dropdown container will NOT close the container.
* `document.body.addEventListener("click", hideDropdown)` will hide the dropdown if clicked anywhere beside the dropdown container.

```javascript
const dropdownContainer = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('#dropdown-button');

const handleClick = (event) => {
  event.data = { stopDropdownPropagation: true };
}

const toggleDropdown = (event) => {
  event.data = { stopDropdownPropagation: true };
  dropdownContainer.classList.toggle('show');
  dropdownButton.classList.toggle('show');
}

const hideDropdown = (event) => {
  if (event.data && event.data.stopDropdownPropagation) return
  dropdownContainer.classList.remove('show');
  dropdownButton.classList.remove('show');
}

dropdownButton.addEventListener("click", toggleDropdown);
dropdownContainer.addEventListener("click", handleClick);
document.body.addEventListener("click", hideDropdown);
```

### The Styling

***
#### Dropdown Animation

There are plenty of ways to animate a dropdown. Everything from modifying the z-index to changing the height of your dropdown to physically moving the dropdown. In this tutorial, we use the height property and flexbox (specifically `align-items: flex-end`) to get a sort of drawer-like animation. In other words, the last item on the dropdown will appear first as it slides below underneath the navigation bar.
***

* The `nav__list-dropdown` is positioned relative to the absolutely positioned dropdown. This allows you to 'anchor' your dropdown in relation to the button.
* The `dropdown` has an `overflow: hidden` property to hide the content within it when the height is 0.
* `dropdown.show` will be the styles applied when the javascript toggle is invoked. Again, Flexbox and the `align-items: flex-end` property allows the list to slide below the navigation bar last item first. The height is then set to a fixed length and a transition property is used on height to give it a smooth animation. 

```css
body {
  background-color: #FFF;
}

.header {
  background-color: #f2f2f2;
  border-bottom: 1px solid #d9d9d9;
}

.header__container {
  display: flex;
  justify-content: space-between;
  max-width: 992px;
  margin: 0 auto;
}

.title {
  margin: 1rem;
  text-shadow: 1px 2px 1px #6e766d; 
  font-family: "Magorian Regular",Georgia,Times,"Times New Roman", serif;
  color: #0f2d37;
}

nav {
  display: flex;
}

.nav__list {
  padding: 0;
  margin: 0 1rem;
  list-style: none;
}

.nav__list-dropdown {
  height: 100%;
  position: relative;
}

.dropdown__button {
  width: 140px;
  height: 100%;
  padding: 0;
  
  background: transparent;
  border: none;
  outline: none;
  
  font-family: "Magorian Regular",Georgia,Times,"Times New Roman", serif;
  font-size: 1.25rem;
  
  cursor: pointer;
}

.dropdown__button.show {
  background-color: #0f2d37;
  color: #FFF;
}

.dropdown {
  height: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  
  background-color: #0f2d37;
}

.dropdown.show {
  display: flex;
  align-items: flex-end;
  border-radius: 0 0 5px 5px;
  
  height: 230px;
  transition: height 0.5s;
}

.dropdown__list {
  box-sizing: border-box;
  width: 280px;
  padding: 1rem 0 0;
  
  font-family: Georgia, Gotham;
  font-size: 1.5rem;
  list-style: none;
  color: #FFF;
}

.dropdown__list li {
  padding-left: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.dropdown__list li::after {
  display: inline-block;
  content: '›';
  transition: transform 0.5s;
  color: #f2c841;
}

.dropdown__list li:hover::after {
  transform: translateX(10px);
}

.dropdown__list li > a {
  text-decoration: none;
  color: #FFF;
}

.content {
  width: 100%;
  max-width: 992px;
  margin-right: auto;
  margin-left: auto;
}
```

#### Resources:

- Check out the complete Dropdown Menu on <a href="https://codepen.io/bteng22/pen/yzdRvO">Codepen.io</a>
- [Stack Overflow Post on Event Propagation](https://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element)
- [BEM](http://getbem.com/introduction/)
- [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)