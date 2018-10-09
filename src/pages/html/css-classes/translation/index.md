---
title: CSS Classes
---
## CSS Classes

Classes são uma maneira eficiente de agrupar elementos HTML para que eles possam compartilhar os mesmos estilos. As classes CSS (Cascading Style Sheets) podem ser usadas para organizar e decorar elementos de páginas web.

Ao escrever HTML, você pode adicionar classes a um elemento. Apenas adicione o atributo `class="myclass"` ao elemento. Vários elementos podem ter a mesma classe e um elemento pode ter várias classes. Você pode atribuir várias classes a um elemento adicionando todos os nomes de classes desejados separados por um espaço ao atributo `class` em HTML.

```html
<h1 class="super-man other-class third-class">"Eu venho aqui para salvar o dia!"</h1>
<p>é um slogan popular que
  <span class="super-man">Super Man</span> disse muitas vezes.</p>
```

Você pode, então, estilizar esses elementos com CSS. As classes são referenciadas com o caractere (.) Antes delas no CSS, mas você não deve colocar pontos no seu HTML.

```css
.super-man {
  color: red;
  background-color: blue;
}
```

Este código dá um fundo azul e uma cor vermelha ao texto para todos os elementos que têm a classe `super-man`.
[Veja este exemplo no CodePen](https://codepen.io/Tlandis/pen/RLvomV).

Você também pode declarar mais de uma classe para seu elemento, como:

```html

<div class="ironMan alfred">
 We're going to save you.
</div>

```

Then in your css file:

```css

.ironMan{
color:red;
}

.alfred{
background-color: black;
}

```

**Nota:** os nomes de classe são por padrão todos minúsculos, com cada palavra por nome de classe e quando houver mais de uma palavra serão separadas por hifens (por exemplo, "super-man").

Você também pode combinar classes na mesma linha:
```css
.superMan .spiderMan {
color: red;
background-color: blue;
}
```

Você pode ver o resultado do código acima <a href='https://codepen.io/Tlandis/pen/RLvomV' target='_blank' rel='nofollow'>aqui</a>.
Aprenda como combinar classes css usando seletores <a href='https://www.w3schools.com/css/css_combinators.asp' target='_blank' rel='nofollow'>here</a>. 

#### Mais informações:

<!-- Please add any articles you think might be helpful to read before writing the article -->

- [CSS Class Selector, w3 schools](https://www.w3schools.com/cssref/sel_class.asp)
- [HTML Classes, w3 Schools](https://www.w3schools.com/html/html_classes.asp)
- [css-tricks](https://css-tricks.com/how-css-selectors-work/)
- [How to Code in HTML5 and CSS3](http://howtocodeinhtml.com/chapter7.html)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
