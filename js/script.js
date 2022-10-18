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
    console.log("operator", target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    renderDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
    return;
  }
  inputDigit(target.value);
  renderDisplay();
});

function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite displayValue if the current value is 0
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

// View
function renderDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

renderDisplay();
