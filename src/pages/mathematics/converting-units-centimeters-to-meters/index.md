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

### Examples

1. 1 cm = 0.01 m (<span class="fraction"><sup>1</sup>⁄<sub>100</sub></span>)
2. 25 cm = 0.25 m (<span class="fraction"><sup>25</sup>⁄<sub>100</sub></span>)
3. 200 cm = 2 m (<span class="fraction"><sup>200</sup>⁄<sub>100</sub></span>)

### Coding

```js
function convertCentimeterToMeter (cm) {
  return ( cm / 100 );
}

// Set some example measurements
var lengthInCm = 300;
var lengthInM;

lengthInM = convertCentimeterToMeter(lengthInCm); // 3
```

### More Information:

- [Convert cm to m](https://www.convertunits.com/from/cm/to/m)