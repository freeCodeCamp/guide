---
title: Reto De Algoritmo Bu
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3c8584a085a0deaea66b3400e6321eeadab552a2.jpg)

### Explicación del problema:

*   Este programa es muy simple, el truco está en entender que es un boolaneo primitivo. El programa recibir un parámetro verdadero o falso.

## Pista: 1

*   Deberás comprobar que el tipo de parámetro recibido sea boolaneo.

## Pista: 2

*   Para comprobar el tipo de un parámetro puedes utilizar `typeof`

## Pista: 3

*   Debido a que a que debes retornar true o false puedes utilizar una declaración if o simplemente retornar la sentencia que usarías en la declaración if.

## ¡Alerta de Spoiler!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución abajo!**

## Solución del código:

    function booWho(bool) {
      return typeof bool === 'boolean';
    }

    // realizamos el test
    booWho(null);

![:rocket:](/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [¡En REPL!](https://repl.it/CLnK/0)

# Explicación del código:

Utilizamos el operador `typeof` para comprobar si una variable es boolanea. Si lo es retornará `true`. En caso contrario, al ser otro tipo retornará `falso`.

> **NOTA:** Por favor añade tu nombre de usuario solamente si has añadido **contenido relevante** al artículo. (Por favor no remuevas ningún nombre existente.)