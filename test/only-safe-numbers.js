
const tap = require('tap')
const depictsWholeNumber = require('../index.js').onlySafeNumbers

tap.equal(depictsWholeNumber(Number.MAX_SAFE_INTEGER), true, 'Number.MAX_SAFE_INTEGER should be true')
tap.equal(depictsWholeNumber(Number.MAX_SAFE_INTEGER + 1), false, 'Number.MAX_SAFE_INTEGER + 1 should be false')

tap.equal(depictsWholeNumber('9007199254740991'), true, '"9007199254740991" should be true')
tap.equal(depictsWholeNumber('9007199254740992'), false, '"9007199254740992" should be false')
