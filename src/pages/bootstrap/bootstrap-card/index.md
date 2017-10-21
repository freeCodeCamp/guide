Title | 
------------ |
Cards |

# Bootstrap Cards
A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,  
contextual background colors, and powerful display options.  
  
  
If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components   
is available as modifier classes for cards.  
#### Sample code of bootsrap cards:  
```html
<div class="card" style="width: 20rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```  
Understanding the above classes:  
## Content types  
### Images  

`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card. Text within. 
`.card-text` can also be styled with the standard HTML tags.

### body  
The building block of a card is the `.card-body` Use it whenever you need a padded section within a card.  
### Titles, text, and links  
  
Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other. 
by adding `.card-link` to an `<a>` tag.  


Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `card-subtitle` items are placed  
in a `.card-body` item, the card title and subtitle are aligned nicely.  
`<h*>` refers to any type of heading `h1`,`h2`,`h3`,`h4`,`h5`,`h6` ....  
### Buttons  
you can add buttons to the cards by using the `.btn` class and also you can add buttons style classes of your choice  
using `.btn-primary`,`.btn-success`,`.btn-secondary`...and [many more](https://getbootstrap.com/docs/4.0/components/buttons/).  
#
 More details : [bootstrap card](https://getbootstrap.com/docs/4.0/components/card/)





