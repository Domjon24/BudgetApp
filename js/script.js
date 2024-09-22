import BudgetTracker from "./BudgetTracker.js";
// import fusioncharts from "./fusioncharts";


new BudgetTracker("#app");



function getArrayAverage(arr) {
 var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
 }
  var avg = Math.floor(total / arr.length);
  return avg; 
}
