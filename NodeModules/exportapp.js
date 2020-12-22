/** string export sample */
const name = require("./ExportExamples/stringexport");
console.log(name);

/** counter example */
//const {inc, dec, getCounter} = require("./ExportExamples/count"); // bu şekilde yaparsam namespace gibi kullanamama gerek yok.
const counter = require("./ExportExamples/count");
counter.inc();
counter.inc();
counter.inc();
counter.dec();
console.log(counter.getCount());

/** */

