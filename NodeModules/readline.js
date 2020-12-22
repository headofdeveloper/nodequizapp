const { read } = require("fs");
const readline = require("readline");

//readline'ı kullanabilmek için bir interface oluşturmamız gerekiyor.
//bu sayede okumayı veya yazmayı hangi stream'den yapabileceğimizi seçebiliyoruz.
//bu örnekte normak cosole'u kullanacağım. o yüzden process.stdin, process.stdout'u kullandım.
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

// readline kendi içinde bir question fonk. var. 2. parametre olarak da callback function'ı alıyor.
rl.question("How do you like Node?", answer => {
    console.log(`Your answer: ${answer}`);
});