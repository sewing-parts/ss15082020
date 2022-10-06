var xlsx = require("xlsx");
var wb = xlsx.readFile("1a.xlsx");
var ws = wb.Sheets["parts-list-1"];
// 
var data = xlsx.utils.sheet_to_json(ws);


console.log("export const brandsPartsList =", data);

// node script-xlsx.js > oo.js