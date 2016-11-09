
const tap = require('tap')
const depictsWholeNumber = require('../index.js')

tap.equal(depictsWholeNumber(0), true, '0 should be true')
tap.equal(depictsWholeNumber(false), false, 'false should be false')
tap.equal(depictsWholeNumber(''), false, '"" should be false')
tap.equal(depictsWholeNumber(null), false, 'null should be false')
tap.equal(depictsWholeNumber(undefined), false, 'undefined should be false')
tap.equal(depictsWholeNumber(NaN), false, 'NaN should be false')
