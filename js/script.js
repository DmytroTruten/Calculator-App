const buttonsContainer = document.querySelectorAll(".buttons-container");
const calculatorScreen = document.getElementById('screen')

const printNumber = event => {
  calculatorScreen.value += event.target.value;
  console.log(event.target.value)
}

buttonsContainer.forEach(button => {
  button.addEventListener("click", printNumber)
})