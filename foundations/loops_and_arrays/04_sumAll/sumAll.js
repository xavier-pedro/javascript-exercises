function sumAll(num1, num2) {
  let paramType = typeof (num1 + num2);

  if (
    num1 < 0 ||
    num2 < 0 ||
    paramType !== "number" ||
    num1 % 1 !== 0 ||
    num2 % 1 !== 0
  ) {
    return "ERROR";
  }

  let sum = 0;

  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
    return sum;
  } else {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  }
}

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
