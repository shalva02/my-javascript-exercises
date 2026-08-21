const fibonacci = function (num) {
  num = +num;
  let current = 1;
  let prevOne = 1;
  let prevTwo = 0;
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  for (let i = 2; i <= num; i++) {
    current = prevOne + prevTwo;
    prevTwo = prevOne;
    prevOne = current;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
