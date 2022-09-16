const output = document.getElementsByClassName("output-view")[0]
const calcPreviewContainer = document.querySelector(".calculation-preview")
const equalButton = document.querySelector(".equal")
const clearButton = document.getElementsByClassName("AC")[0]
const decimalButton = document.querySelector(".decimals")
const deleteButton = document.querySelector(".deleteCharacter")
const button0 = document.querySelector(".add0")
const valueButtons = document.querySelectorAll(".valueOutput");
const addButton = document.querySelector(".add")
const multiplyButton = document.querySelector(".multiply")
const subtractButton = document.querySelector(".subtract")
const divideButton = document.querySelector(".divide")
let calculation;
let mathHappening;


//Event listeners

addButton.addEventListener('click', add)
multiplyButton.addEventListener('click', multiply)
subtractButton.addEventListener('click', subtract)
divideButton.addEventListener('click', divide)

clearButton.addEventListener('click', clear)
decimalButton.addEventListener("click", decimals);
deleteButton.addEventListener("click", deleteCharacter);
button0.addEventListener("click", add0);
equalButton.addEventListener("click", equal)
valueButtons.forEach((button) => {
  button.addEventListener("click", outputValuesToView)
})

function calculatePreview() {
  const calculation = eval(output.textContent)
  const outputText = output.textContent
  if (calculation !== undefined && calculation != outputText) {
    calcPreviewContainer.textContent = eval(output.textContent)
  } else {
    return
  }
}

function deleteCharacter() {
  const text = output.textContent
  return output.textContent = text.slice(0, -1)
}
const containsCalculationCharacters = (text) => {

  const specialChars = `/*+=.`;

  const result = specialChars.split('').some(specialChar => {
    if (text.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;

}
function add() {

  if (output.textContent && !mathHappening) {
    output.textContent = `${output.textContent} + `
    mathHappening = true
  } else {
    return
  }
}
function divide() {
  if (output.textContent && !mathHappening) {
    output.textContent = `${output.textContent} / `
    mathHappening = true
  }
}
function multiply() {
  if (output.textContent && !mathHappening) {
    output.textContent = `${output.textContent} * `
    mathHappening = true
  }
}
function subtract() {
  if (output.textContent && !mathHappening) {
    output.textContent = `${output.textContent} - `
    mathHappening = true
  }
}
function equal() {
  if (eval(output.textContent)) {
    output.textContent = eval(output.textContent)
    calcPreviewContainer.textContent = ""

  }
  mathHappening = false
}
function add0(event) {
  let outputText = output.textContent
  let buttonValue = event.target.value
  if (outputText.indexOf("0") === 0 && !outputText.includes(".")) {
    outputText = `${buttonValue}.`
  } else {
    output.textContent = `${outputText}${buttonValue}`
  }
  if (outputText.length > 0 && outputText.includes(".")) {
    output.textContent = `${outputText}${buttonValue}`
  }

}
function outputValuesToView(event) {
  let outputText = output.textContent
  let buttonValue = event.target.value
  output.textContent = `${outputText}${buttonValue}`
  calculatePreview()
  mathHappening = false
}

function decimals(event) {
  let outputText = output.textContent
  let buttonValue = event.target.value
  if (output.textContent.includes(".") && buttonValue === "." || output.textContent.length === 0) {
    return
  } else {
    output.textContent = `${outputText}${event.target.value}`
  }
}


function clear(event) {
  calculation = ""
  output.textContent = ""
  calcPreviewContainer.textContent = ""


}