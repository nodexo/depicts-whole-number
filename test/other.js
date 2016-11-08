
const tap = require('tap')
const depictsWholeNumber = require('../index.js')

tap.equal(depictsWholeNumber(null), false)
tap.equal(depictsWholeNumber(undefined), false)
tap.equal(depictsWholeNumber(''), false)
tap.equal(depictsWholeNumber(false), false)

tap.equal(depictsWholeNumber(true), false)
tap.equal(depictsWholeNumber({object: 1}), false)
tap.equal(depictsWholeNumber(['array']), false)
tap.equal(depictsWholeNumber(/regex/), false)
tap.equal(depictsWholeNumber(Symbol()), false)
tap.equal(depictsWholeNumber(new Date()), false)
tap.equal(depictsWholeNumber(function () { return }), false)
