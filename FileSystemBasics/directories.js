const fs = require("fs");

fs.renameSync("./storage-files", "./storage");

fs.rmdir("./storage", err => {
    if(err) {
        throw err;
    }

    console.log("./storage directory removed");
});