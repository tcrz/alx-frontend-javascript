"use strict";
exports.__esModule = true;
var CRUD = require("./crud");
var obj = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(obj);
console.log(newRowID);
