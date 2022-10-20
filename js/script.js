//  Model
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

// Controller
const buttons = document.querySelector(".buttons-container");
buttons.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;

  if (!target.matches("button")) {
    return;
  }

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      handleOperator(value);
      break;
    case "±":
      reverseOperand();
      break;
    case ".":
      inputDecimal(value);
      break;
    case "all-clear":
      clearInput();
      break;
    case "delete-digit":
      deleteLastDigit();
      break;
    default:
      // check if the key is integer
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }
  renderDisplay();
});

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    // Overwrite displayValue if the current value is 0
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  console.log(calculator);
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function reverseOperand() {
  let reversedOperand = (calculator.displayValue *= -1);
  let result = reversedOperand.toString();
  calculator.displayValue = result;
  console.log(calculator);
}

function deleteLastDigit() {
  const { displayValue } = calculator;
  if (displayValue.length !== 1) {
    calculator.displayValue = displayValue.slice(0, -1);
  } else if (displayValue.length === 1) {
    calculator.displayValue = "0";
  }
  console.log(calculator);
}

function handleOperator(nextOperator) {
  const { displayValue, firstOperand, operator } = calculator;
  // parseFloat converts the string contents of 'displayValue' to floating number
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }
  // verify that 'firstOperand' is null and 'inputValue' isn't a NaN value
  if (firstOperand === null && !isNaN(inputValue)) {
    // update the firstOperand property
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function clearInput() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

// View
function renderDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

renderDisplay();
