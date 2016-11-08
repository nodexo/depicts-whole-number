
depicts-whole-number
====================

Tests a variable to see if it represents a whole number.<sup>[1]</sup>

The following numbers are not whole numbers, but identical up to an isomorphism<sup>[2]</sup>:
- 1e+21 (scientific notation) 
- 1000.00 (natural number with a fraction) 


Installation
------------

    npm install depicts-whole-number


Usage
-----

```javascript
const depictsWholeNumber = require('depicts-whole-number')

depictsWholeNumber(0) // true
depictsWholeNumber(1) // true
depictsWholeNumber(-1) // false
depictsWholeNumber(1.2) // false

depictsWholeNumber('0') // true
depictsWholeNumber('01') // false
depictsWholeNumber('1') // true
depictsWholeNumber('-1') // false
depictsWholeNumber('1.2') // false
depictsWholeNumber('1e+3') // false
depictsWholeNumber('string') // false

depictsWholeNumber(null) // false
depictsWholeNumber(undefined) // false
depictsWholeNumber('') // false
depictsWholeNumber(false) // false
depictsWholeNumber(true) // false
```

You will find more examples in the **test** folder.


Only Safe Numbers
-----------------
Using this option, true is only returned for whole numbers being less or equal than `Number.MAX_SAFE_INTEGER`.  
Visit [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) 
for further reference.

```javascript
const depictsWholeNumber = require('depicts-whole-number').onlySafeNumbers

depictsWholeNumber(Number.MAX_SAFE_INTEGER) // true
depictsWholeNumber(Number.MAX_SAFE_INTEGER + 1) // false
depictsWholeNumber(Number.MAX_VALUE) // false
```

License
-------
ISC

<p>&nbsp;</p> 
  
[1] Whole numbers are natural numbers (including zero) written in decimal notation without a decimal fraction.  
[2] Isomorphism: Sameness between two different structures.
