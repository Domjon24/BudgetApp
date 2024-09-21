import readline from "https://esm.sh/readline";
let randomPaycheckArr = [525, 601, 498, 494, 700];
function generateRandomPaycheckArr(amountOfPaychecks) {
  let currentPaycheckArr = [];
  var total = 0;
   for (let i = 0; i < amountOfPaychecks; i++) {
        //currentPaycheckArr.push(Math.floor(Math.random() * 1000));  //gets random num < 1000
      currentPaycheckArr.push(Math.floor(Math.random() * 950) + 250);
   }
   for(let i = 0; i < currentPaycheckArr.length; i++) {
    total += currentPaycheckArr[i];
 }
  var avg = total / currentPaycheckArr.length;
  
  if (amountOfPaychecks != currentPaycheckArr.length) {
    return "error"
  }
   if (amountOfPaychecks < 1) {
    return "Must be 1 or higher"
  }
  else {return "the paychecks are: " + currentPaycheckArr + " my average is " + avg}
}

function getArrayAverage(arr) {
 var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
 }
  var avg = Math.floor(total / arr.length);
  return avg; 
}

let myStatement = `The paychecks are  ${randomPaycheckArr}. The average is ${getArrayAverage(randomPaycheckArr)}.`;

console.log(myStatement)

document.getElementById("statementText").innerHTML = myStatement