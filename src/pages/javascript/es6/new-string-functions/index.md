## New String Functions

Following four functions are added new to strings in ES6.

* startsWith
* endsWith
* includes
* repeat

## startsWith:

This is a case sensitive function which helps us to find if a particular string starts with some substring.

startsWith takes in the second optional argument called position which we can use in case when we want to skip particular number of characters from the beginning of the string before searching.

```javascript
const str ='Rachna';
str.startsWith('Rad') //false
str.startsWith('ra') //false as it is case sensitive
str.startsWith('Ra') //true
str.startsWith('ch',2) //true as we are searching from the second position
str.startsWith('ch',3) //false
```
## endsWith

This is a case sensitive function which helps us to find if a particular string ends with some substring.

endsWith takes in a second optional argument called endPosition which we can use to include the number of characters before searching.

```javascript
const city= 'Delhi';
city.endsWith('Hi'); //false as it is case sensitive
city.endsWith('hi');//true
city.endsWith('l',3);//true - include only first three characters before searching
city.endsWith('l',4);//false
```

## includes




