const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function renderDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

renderDisplay();

const buttons = document.querySelector('.buttons-container');
buttons.addEventListener('click', (event) => {
  
  const { target } = event;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});