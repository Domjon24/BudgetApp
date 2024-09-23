import BudgetTracker from "./BudgetTracker.js"; //main from project

// import fusioncharts from "./fusioncharts";

import FusionCharts from 'fusioncharts/core';
import TimeSeries from 'fusioncharts/viz/timeseries';
import DataStore from 'fusioncharts/datastore';
import data from './data';
import schema from './schema';

FusionCharts.addDep(TimeSeries);

let fusionDataStore = new DataStore();
let fusionTable = fusionDataStore.createDataTable(data, schema);


new BudgetTracker("#app");

window.charInstance = new FusionCharts({
  type: 'timeseries',
  renderAt: 'container',
  width: "90%",
  height: 650,
  dataSource: {
  data: fusionTable,
  caption: {
  text: 'Online Sales of a SuperStore'
  }
  }
  });

function getArrayAverage(arr) {
 var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
 }
  var avg = Math.floor(total / arr.length);
  return avg; 
}
