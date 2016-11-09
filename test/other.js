
const tap = require('tap')
const depictsWholeNumber = require('../index.js')

tap.equal(depictsWholeNumber(true), false, 'Boolean should be false')
tap.equal(depictsWholeNumber({Object: 1}), false, 'Object should be false')
tap.equal(depictsWholeNumber(['Array']), false, 'Array should be false')
tap.equal(depictsWholeNumber(/RegExp/), false, 'RegExp should be false')
tap.equal(depictsWholeNumber(Symbol()), false, 'Symbol should be false')
tap.equal(depictsWholeNumber(new Date()), false, 'Date should be false')
tap.equal(depictsWholeNumber(new Map()), false, 'Map should be false')
tap.equal(depictsWholeNumber(function () { return }), false, 'Function should be false')
