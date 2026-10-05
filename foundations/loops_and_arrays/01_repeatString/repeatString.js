const repeatString = function (string, num) {

  let auxString = "";

  if (num < 0) {
    return (string = "ERROR");
  }

  for (let i = 0; i < num; i++) {
    auxString += string
  }

  return auxString;
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
