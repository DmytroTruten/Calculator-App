const buttonsContainer = document.querySelectorAll(".buttons-container");
const calculatorScreen = document.getElementById('screen')

const printNumber = event => {
  console.log(event.target.value)
}

buttonsContainer.forEach(button => {
  button.addEventListener("click", printNumber)
})