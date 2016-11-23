
depicts-whole-number
====================

Test a variable to see if it represents a whole number.<sup>[1]</sup>

[![Build Status](https://travis-ci.org/nodexo/depicts-whole-number.svg?branch=master)](https://travis-ci.org/nodexo/depicts-whole-number)
[![Test Coverage](https://codeclimate.com/github/nodexo/depicts-whole-number/badges/coverage.svg?v=1.0.6)](https://codeclimate.com/github/nodexo/depicts-whole-number/coverage)
[![Code Climate](https://codeclimate.com/github/nodexo/depicts-whole-number/badges/gpa.svg?v=1.0.6)](https://codeclimate.com/github/nodexo/depicts-whole-number)

[![Dependency Status](https://david-dm.org/nodexo/depicts-whole-number.svg?v=1.0.6)](https://david-dm.org/nodexo/depicts-whole-number)
[![devDependencies Status](https://david-dm.org/nodexo/depicts-whole-number/dev-status.svg?v=1.0.6)](https://david-dm.org/nodexo/depicts-whole-number?type=dev)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


Installation
------------

    $ npm install depicts-whole-number


Usage
-----

```javascript
const depictsWholeNumber = require('depicts-whole-number')

depictsWholeNumber(0) // true
depictsWholeNumber(123) // true
depictsWholeNumber(-123) // false
depictsWholeNumber(1.23) // false
depictsWholeNumber(1e+21) // false
depictsWholeNumber(Number.MAX_VALUE) // false
depictsWholeNumber(Infinity) // false

depictsWholeNumber('0') // true
depictsWholeNumber('123') // true
depictsWholeNumber('-123') // false
depictsWholeNumber('1.23') // false
depictsWholeNumber('1e3') // false
depictsWholeNumber('1e+3') // false
depictsWholeNumber('0123') // false
depictsWholeNumber('123s45') // false

depictsWholeNumber('') // false
depictsWholeNumber(null) // false
depictsWholeNumber(undefined) // false
depictsWholeNumber(NaN) // false
```

Take a look into the [test folder](https://github.com/nodexo/depicts-whole-number/tree/master/test) for more examples.

Note: The following numbers are not whole numbers, but identical up to an isomorphism:<sup>[2]</sup>
- 1e+3 (scientific notation) ~ 1000
- 1000.00 (natural number with a fraction) ~ 1000


Only Safe Numbers
-----------------
When using this option, `true` is only returned for whole numbers being less or equal than `Number.MAX_SAFE_INTEGER`.  
Visit [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) 
for further reference.

```javascript
const depictsWholeNumber = require('depicts-whole-number').onlySafeNumbers

depictsWholeNumber(Number.MAX_SAFE_INTEGER) // true
depictsWholeNumber(Number.MAX_SAFE_INTEGER + 1) // false

depictsWholeNumber('9007199254740991') // true
depictsWholeNumber('9007199254740992') // false
```

License
-------
ISC

<p>&nbsp;</p> 
  
[1] Whole numbers are natural numbers (including zero) written in decimal notation without a decimal fraction.  
[2] Isomorphism: Sameness between two different structures.
