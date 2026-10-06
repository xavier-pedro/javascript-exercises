const removeFromArray = function (arr, ...num) {
  return arr.filter((item) => !num.includes(item));
};

removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
