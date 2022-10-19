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

  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value)
    renderDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    renderDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    clearInput();
    renderDisplay();
    return;
  }
  inputDigit(target.value);
  renderDisplay();
});

function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite displayValue if the current value is 0
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
  console.log(calculator)
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { displayValue, firstOperand } = calculator;
  // parseFloat converts the string contents of 'displayValue' to floating number
  const inputValue = parseFloat(displayValue);
  // verify that 'firstOperand' is null and 'inputValue' isn't a NaN value
  if (firstOperand === null && !isNaN(inputValue)) {
    // update the firstOperand property
    calculator.firstOperand = inputValue;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator)
}

function clearInput() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator)
}

// View
function renderDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

renderDisplay();
