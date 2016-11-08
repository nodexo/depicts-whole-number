
const tap = require('tap')
const depictsWholeNumber = require('../index.js').onlySafeNumbers

tap.equal(depictsWholeNumber(Number.MAX_SAFE_INTEGER), true)
tap.equal(depictsWholeNumber(Number.MAX_SAFE_INTEGER + 1), false)
tap.equal(depictsWholeNumber(1e+18), false)
tap.equal(depictsWholeNumber(Number.MAX_VALUE), false)
