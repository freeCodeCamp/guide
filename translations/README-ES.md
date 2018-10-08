![](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

# Guia freeCodeCamp
The freeCodeCamp community is building a massive, searchable "Guide." This reference tool will eventually include thousands of articles that cover all areas of development, design, and data science - all written to be easily understood by people new to coding.

This repo is where we plan and maintain these Guide articles, which we then host on our community's wiki-like [Guide website](https://guide.freecodecamp.org).


La comunidad freeCodeCamp está construyendo una "Guía" masiva y de búsqueda. Esta herramienta de referencia eventualmente incluirá miles de artículos que cubren todas las áreas de desarrollo, diseño y ciencia de datos, todo escrito para que sea entendido fácilmente por personas nuevas en codificación.

Este repositorio es donde planificamos y mantenemos estos artículos de la guía, que luego alojamos en el [sitio web de la Guía](https://guide.freecodecamp.org), similar a la wiki.


**Tabla de Contenido**

- [¿Qué son los artículos de la Guía?](#Qué-son-los-artículos-de-la-Guía)
- [¿Sobre qué puedo escribir un artículo?](#Sobre-qué-puedo-escribir-un-artículo)
- [Cómo contribuir](#Cómo-contribuir)
- [Ejecutar la Guía localmente en tu propia computadora](#Ejecutar-la-Guía-localmente-en-tu-propia-computadora)
- [Guía de estilo de los artículos](#Guía-de-estilo)
- [Licencia](#licencia)

## ¿Qué son los artículos de la Guía?
Los artículos de la guía pueden ser una explicación de la sintaxis, los patrones de diseño, para qué sirven las etiquetas de aria o algo parecido a lo que significan los números en la esquina superior derecha de su pantalla cuando se encuentra en freecodecamp.org. Puede encontrar un [artículo de ejemplo sobre elementos HTML aquí](./src/pages/html/elements/index.md).

## ¿Sobre qué puedo escribir un artículo?
Agradecemos tu ayuda al escribir estos artículos. No tiene que ser un experto en un tema para escribir sobre él: toda esta Guía es de código abierto, por lo que incluso si cometes un error, otro colaborador lo corregirá eventualmente.

Para ayudar, busca un `artículo corto (stub)' en nuestro [sitio web de la Guía](https://guide.freecodecamp.org/), escribe el artículo y luego abre una Pull Request (PR) para reemplazarlo.

Si no puedes encontrar un 'stub' sobre el tema sobre el que deseas escribir, puedes abrir un PR que crear e incluir tu borrador del artículo. No dude en hacernos preguntas si no está seguro de dónde colocar un nuevo artículo en la estructura del directorio.

Antes de comenzar a escribir, asegúrate de leer la [guía de estilo del artículo](#guía-de-estilo-del-artículo) a continuación.

## ¿Cómo contribuir?
Puedes crear un PR (Pull Request) con su borrador del artículo (o ediciones en un artículo existente) de dos maneras:

1) El método más sencillo es utilizar la interfaz de GitHub. Mira el video de demostración o siga los pasos a continuación:

![Gif que muestra los pasos de la interfaz de GitHub](https://i.imgur.com/0cmxJwN.gif)

- Ve a la carpeta "pages" (ubicada en `guides/src`) y encuentra el apéndice del artículo sobre el que deseas escribir o editar. Todos los apéndices estarán en un archivo index.md
- Haz click en el icono del lápiz "Editar este archivo" y realiza los cambios en el archivo en Markdown al estilo GitHub
- Desplázate hasta la parte inferior de la pantalla y agrega un mensaje de confirmación que explique tus cambios. Luego, selecciona la opción del "Create a new branch for this commit and start a pull request" y haga clic en "Propose file changes"
- En la siguiente pantalla, puedes agregar cualquier otro detalle sobre su PR, luego haz click en "Create pull request"
- On the next screen, you can add any other details about your PR, then click "Create pull request"

2) If you prefer to write locally before submitting a PR, then follow these steps:
2) Si prefieres escribir localmente antes de enviar un RP, siga estos pasos:
- 'Fork' este repositorio
- copialo en tu máquina local ejecutando el comando `git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git`
- Agrega un 'remote upstream' para que git sepa dónde se encuentra el repositorio oficial de guías de freeCodeCamp ejecutando el comando `git remote add upstream https://github.com/freeCodeCamp/guides.git`
- Crea una nueva 'branch' para tu trabajo con el comando `git checkout -b NEW-BRANCH-NAME`. Intenta nombrar tu branch de una manera que describa el tema del artículo, como `fix/ArticleHTMLElements`
- Escribe tu artículo, confirma sus cambios localmente con el comando `git commit -m "SHORT MESSAGE"`, y envía tu nueva branch a GitHub con el comando `git push origin NEW-BRANCH-NAME`
- Ve a tu repositorio en GitHub y abra un PR

Asegúrate de mantener tu fork local en el futuro para que esté actualizado con el repositorio de guías freeCodeCamp. La próxima vez que desees contribuir, verifica tu branch 'maestra' local y ejecute el comando `git pull --rebase upstream master` antes de crear una nueva branch. Esto capturará todos los cambios en la rama oficial 'maestra' sin realizar una confirmación adicional en tu repositorio local.

## Ejecutar la Guía localmente en tu propia computadora

Finalmente, si deseas ejecutar una versión del repositorio de guías localmente, sigue estos pasos:

1. Asegúrate de tener instalado el administrador de paquetes `yarn` `npm install -g yarn`
2. 'Fork' este repositorio.
3.: point_down:
```sh
git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git
cd guides
yarn install
yarn run dev
```

En este proyecto, estamos usando `yarn` porque` netlify` construye nuestro sitio con `yarn`.

## Guía-de-estilo
Hemos escrito la siguiente guía de estilo para escribir artículos para ayudarte a comenzar a contribuir.

**Tabla de contenido**

- [Título del artículo](#título-del-artículo)
- [Modularidad](#modularidad)
- [Consejos generales de escritura](#consejos-generales-de-escritura)
- [Código de ejemplo del formato](#código-de ejemplo-del-formato)
- [Agregar imágenes a los artículos](#agregando-imágenes-a-artículos)
- [Nombres propios](#nombres-propio)
- [Dónde conseguir ayuda](#dónde-conseguir-ayuda)


### Título del artículo

Los títulos de los artículos deben ser lo más cortos, concisos y al punto posible. Queremos que los participantes encuentren rápidamente la información que buscan, y el título debe reflejar el tema principal del artículo.

Aquí hay algunos ejemplos de títulos:

- "Listas HTML"
- "Bordes CSS"
- "For Loop de JavaScript"

El nombre de la carpeta se usa en la URL, así que solo usa los guiones `-`, los números` 0-9` y las letras minúsculas `a-z` para ello.

Aquí hay algunos ejemplos de nombres de carpetas:

- listas-html
- bordes-css
- javascript-for-loop

Sin embargo, puedes incluir caracteres especiales en el título del artículo.

### Modularidad

Cada artículo debe explicar exactamente un concepto, y ese concepto debe ser evidente a partir del título del artículo.

Podemos hacer referencia a otros artículos enlazándolos en línea o en una sección de "Otros recursos" al final del artículo.

Nuestro objetivo es tener miles de artículos que cubren una amplia gama de temas técnicos.

### Consejos generales de escritura

Antes de comenzar a escribir, crea un esquema del tema y piensa en los ejemplos de codigo que usará (si corresponde). Esto ayuda a organizar tus pensamientos y facilita el proceso de escritura.

Los artículos deben escribirse con oraciones cortas y claras, y usar tan poca jerga como sea necesario. Toda la jerga debe definirse inmediatamente en inglés simple.

El párrafo de introducción debe tener solo 1-2 oraciones y debe ser una explicación simple del tema principal. Debe limitar el uso de cualquier enlace a otros artículos de la Guía, ya que pueden distraer.

Mantenga los párrafos cortos (alrededor de 1-4 oraciones). Es más probable que las personas lean varios párrafos cortos sobre un muro de texto.

Use la voz activa en lugar de la voz pasiva. En general, es una forma más fuerte y directa de comunicar un tema. Por ejemplo:
   - (Pasiva) Los programadores utilizan el bucle `for` en JavaScript para ...
   - (Activa) Los programadores usan el bucle `for` en JavaScript para ...

Si deseas abreviar un término en tu artículo, escríbelo completamente primero, luego pon la abreviatura entre paréntesis. Por ejemplo, "En informática, un árbol de sintaxis abstracta (AST) es ..."

El texto debe usar la segunda persona ("you") para ayudar a darle un tono de conversación. De esta manera, el texto y las instrucciones parecen hablar directamente con el campista que lo lee. Trata de evitar usar la primera persona ("I", "we", "let's", y "us").

If there are other Guide resources you think campers would benefit from, add them at the bottom in an "Other Resources" section.

Puedes agregar diagramas, gráficos o visualizaciones según sea necesario. También puedes insertar videos relevantes de YouTube y editores de códigos interactivos [REPL.it](https://repl.it/).

No uses emojis o emoticonos en la Guía. freeCodeCamp tiene una comunidad global, y el significado cultural de un emoji o emoticon puede ser diferente en todo el mundo. Además, los emojis pueden renderizarse de manera diferente en diferentes sistemas.

Use comillas dobles cuando corresponda.

Formatea las palabras clave del lenguaje como código: esto se hace con la tecla de comillas invertidas (ubicada a la izquierda de la tecla "1" en un teclado de EE.UU.) En el menú de opciones con sabor a GitHub. Por ejemplo, ponga comillas invertidas alrededor de nombres de etiquetas HTML o nombres de propiedades CSS.

Use la coma de Oxford cuando sea posible (es una coma que se usa después del penúltimo elemento en una lista de tres o más elementos, antes de "y" o "o", por ejemplo: un pintor, escultor, y arquitecto italiano). Hace las cosas más fáciles, más claras y más bonitas de leer.

### Código de ejemplo del formato

Los campistas probablemente usarán los artículos de la Guía como una referencia rápida para buscar la sintaxis. Los artículos deben tener ejemplos simples del mundo real que muestren casos de uso común de esa sintaxis.

Aquí están las pautas de formato específicas para cualquier código:

- Las declaraciones de JavaScript terminan con un punto y coma
- Utiliza comillas dobles cuando corresponda
- Muestra las mejores prácticas generalmente aceptadas, particularmente para accesibilidad
- Los comentarios deben tener un espacio entre los caracteres del comentario y el comentario en sí

    `// Corrige esta línea`
- Markdown al estilo GitHub admite [resaltado de sintaxis en bloques de código](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) para muchos lenguajes de programación. Para usarlo, indica el idioma después de comenzar.
```
```
    ```html
        <div class='awesome' id='more-awesome'>
          <p>This is text in html</p>
        </div>
    ```

    ```javascript
        function logTheThings(stuff) {
         console.log(stuff);
        }
    ```

    ```css
       .awesome {
          background-color: #FCCFCC;
        }
    ```
```

### Agregar imágenes a los artículos

Para incluir imágenes, si las imágenes aún no están alojadas en ningún otro lugar de la web, deberá ponerlas en línea tu mismo. Una buena manera de hacerlo es enviarlos a un repositorio de GitHub, y luego empujarlos a GitHub. Luego puedes hacer click derecho en la imagen y copiar su fuente de imagen.

Entonces solo deberías hacer referencia a ellos en tu archivo de markdown con esta sintaxis:

`![your alt text](your url)`

Luego, las imágenes deberían aparecer al hacer click en la pestaña "preview table".


### Nombres propios

Los nombres propios deben usar mayúsculas correctaamente cuando sea posible. A continuación hay una lista de palabras de la manera en que deberían aparecer en los artículos de la Guía:

- JavaScript (mayúsculas en "J" y "S" y sin abreviaturas)
- Node.js
- jQuery
- SQL

El desarrollo Front-end (forma de adjetivo con un guión) es cuando se trabaja en el front end (forma de nombre sin guión). Lo mismo ocurre con el back end, full stack y muchos otros términos compuestos.

### Dónde conseguir ayuda

La redacción técnica, o la literatura de la ciencia y la tecnología, es difícil. Deberás tomar un tema técnico (generalmente abstracto) y explicarlo de manera clara, precisa y objetiva. Probablemente pasarás por varias rondas de revisión y edición antes de que estés satisfecho con el resultado.

Utiliza la [Aplicación Hemingway](http://www.hemingwayapp.com/). No hay nada mágico en esta sencilla herramienta, pero detectará automáticamente problemas de estilo ampliamente aceptados:

- Voz pasiva
- Adverbios innecesarios
- Palabras que tienen equivalentes más comunes.

La aplicación Hemingway asignará un "nivel de grado" para su escritura. Deberías apuntar a un nivel de grado de 6. Otra herramienta disponible es el [De-Jargonizer](http://scienceandpublic.com/), originalmente diseñado para la comunicación científica, pero podría ayudar a evitar una redacción demasiado especializada.

Además, hay una comunidad de apoyo de todo un equipo de colaboradores, con los que puedes intercambiar ideas y solicitar comentarios sobre tu escritura. Mantente activo en la [contributor's chat room](https://gitter.im/freecodecamp/contributors) y haz muchas preguntas.

Con tu ayuda, podemos crear una herramienta de referencia integral que ayudará a millones de personas que están aprendiendo a programar en los próximos años.

## Licencia

Copyright (c) 2017 freeCodeCamp.

El contenido de este repositorio está sujeto a las siguientes licencias:
- El software de computadora está bajo la licencia [BSD-3-Clause](./LICENSE.md).
- El contenido de referencia como en ./src/pages y subdirectorios está bajo la licencia [CC-BY-SA-4.0](./LICENSE-freeCodeCamp-Guide-Articles.md).
