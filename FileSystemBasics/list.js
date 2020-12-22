const fs = require("fs");

console.log("started reading files before");
const files = fs.readdirSync("./assets"); // sync -> javascript blocks everything to run that

// bunun yerine async olan readdir 'i kullanabiliriz. Burada farkedeceğiniz üzere diğer dillerde veya framework'lerde
// bir fonk. async olduğunu genelde ismine yazarlar. Burada is sync oldu. yazıyoruz.

fs.readdir("./assets", (err, files) => {
    if(err){
        throw err;
    }
    console.log("complete");
    console.log(files);
});

console.log("started reading files after");