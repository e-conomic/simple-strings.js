exports.startsWith = function (haystack, needle) {
  return haystack.lastIndexOf(needle, 0) === 0
}

exports.endsWith = function (haystack, needle) {
  return haystack.indexOf(needle, haystack.length - needle.length) >= 0
}

exports.contains = function (haystack, needle) {
  return haystack.indexOf(needle) !== -1
}

exports.rsplit = function (str, delimiter, limit) {
  delimiter = str.split(delimiter);
  return limit ? delimiter.splice(-limit) : delimiter;
}
