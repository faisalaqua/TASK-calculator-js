/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
//  */


function buttonClick(text) {
  console.log("Clicking", text);
  const NO1 = Number.isInteger(text);
  if (NO1 === true) {
    const integer1 = `${text}`;
    return printOnConsole(text);
  } else {
    printOnConsole(" ");
  }
}
// console.log(integer1);
// let numbers = [1,2,3,4,5,6,7,8,9,0]

let operation = {num1:, num2:, ops: }

const operation = ((buttonClick(text)) =>
const numberOperation = Number.isInteger(text)
if (numberOperation === true) {
  operation.num1 = text

}

// )

// CONST buttonClick = (text) => ( console.log("Clicking", text)
//  const NO1 = Number.isInteger(text)
//  if (NO1 === true){
//   return printOnConsole (text)
//  }
//   else {printOnConsole (""))

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
