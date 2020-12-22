const fs = require("fs");

fs.renameSync("./assets/allquestions.json", "./assets/questions.json");

// rename fonk. dosya move etmek için de kullanabilirz.
fs.rename( "./assets/allquestions.md" ,"./storage-files/allquestions.md", err => {
    if(err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./assets/whatsapp.png");
}, 4000);