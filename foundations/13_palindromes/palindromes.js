const palindromes = function (str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  const string = str
    .toLowerCase()
    .split("")
    .filter((item) => alpha.includes(item))
    .join("");
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
