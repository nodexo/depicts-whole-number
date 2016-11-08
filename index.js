
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991

function depictsWholeNumber (v) {
  if (typeof v === 'string') {
    return v === '0' || !!/^[1-9][0-9]*$/.exec(v)
  } else if (typeof v === 'number') {
    if (('' + v).indexOf('e') > -1) {
      return false
    }
    return v === Math.abs(Math.round(v))
  }
  return false
}

function onlySafeNumbers (v) {
  return depictsWholeNumber(v) && v <= MAX_SAFE_INTEGER
}

module.exports = depictsWholeNumber
module.exports.onlySafeNumbers = onlySafeNumbers
