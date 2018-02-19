---
title: Converting Units Centimeters to Meters
---
## Converting Units Centimeters to Meters

Per definition, _one_ centimeter is _one hundreth_ of a meter
In the following formula the units are notated with brackets [ ] around them

```
[cm] / 100 = [m]
```

If you enter the value you have, let's say 50 centimeters, it will be calculated like this:
```
50[cm] / 100 = 0.5[m]
```
The result of the calculation returns a value of 0.5 meters, the amount of meters 50 centimeter is.

### Coding 
Of course, as a Free Code Camp guide, where would we be without a coding example!
For this example we will use JavaScript syntax, but it's simple enough for everything else

```js
var lengthInCm = 300;
var lengthInM;

function convertCentimeterToMeter (cm) {
  return ( cm / 100 );
}

lengthInM = convertCentimeterToMeter(lengthInCm); // 3
```
