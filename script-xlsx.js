var xlsx = require("xlsx");
var wb = xlsx.readFile("1a.xlsx");
// 
// var ws = wb.Sheets["parts-list-1"];
var ws = wb.Sheets["loopers"];
// 

var data = xlsx.utils.sheet_to_json(ws);

// 
// console.log("export const brandsPartsList =", data);
console.log("export const categoryLoopers =", data);

// вставить в терминал и нажать enter ///  node script-xlsx.js > script-xlsx-result.js