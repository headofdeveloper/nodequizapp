const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md","UTF-8");
console.log(text);

console.log("------------------------------------------");
fs.readFile("./assets/Readme.md", "UTF-8", (err, content) => {
    console.log(content);
});

console.log("------------------------------------------");
fs.readFile("./assets/whatsapp.png", (err, img) => {
    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log(img); // bunun buffer tipinde bir variable bastığını göreceğiz.
});


console.log("------------------------------------------");
fs.readFile("./assets/whatsapp.pnge", (err, img) => {
    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log(img); // bunun buffer tipinde bir variable bastığını göreceğiz.
});

