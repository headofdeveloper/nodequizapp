const path = require("path");

/* tüm v8'i import ettiğimizde v8 içinde bir datayı veya fonk. kullanmak için v8 demek durumunda kalıyoru. */
//const v8 = require("v8"); 
//console.log(v8.getHeapStatistics());
/** Onun yerine sadece istediğimiz data veya fonk. import edip direkt kullanabiliriz */
const { getHeapStatistics } = require("v8");
console.log(getHeapStatistics());


const dirUploads = path.join(__dirname, "www","files","uploads");
console.log(dirUploads);
