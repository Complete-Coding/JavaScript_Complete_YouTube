let display = document.querySelector('#display');
let currentInput = "";

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function calculate() {
}
