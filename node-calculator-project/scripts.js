var readlineSync = require("readline-sync");

function nodeCalc(first, second) {
  let result;
  first = firstNumber;
  second = secondNumber;

  if (operation === "+") {
    result = first + second;
  } else if (operation === "-") {
    result = first - second;
  } else if (operation === "*") {
    result = first * second;
  } else if (operation === "/") {
    result = first / second;
  }
  return `The result is: ${result}`;
}

const operation = readlineSync.question(
  "What operation would you like to perform? ",
  {
    limit: ["/", "*", "-", "+"],
    limitMessage:
      "That is not a valid operation. Valid operations include (/, *, -, +)",
  }
);
const firstNumber = readlineSync.questionInt(
  "Please enter the first number: ",
  {
    limitMessage: "This is not a number.",
  }
);

const secondNumber = readlineSync.questionInt(
  "Please enter the second number: ",
  {
    limitMessage: "This is not a number.",
  }
);

console.log(nodeCalc());
