const sumAll = function (f, l) {
  let result = 0;
  if (f < 0 || l < 0 || !Number.isInteger(f) || !Number.isInteger(l)) {
    return "ERROR";
  }
  let arr = Array.from(arguments).sort((a, b) => a - b);
  for (i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }
  return result;
};
// Do not edit below this line
module.exports = sumAll;
