const fs = require("fs");
const { threadId } = require("worker_threads");

if(fs.existsSync("storage-files")) {
    console.log("Already There");
}
else {
    fs.mkdir("storage-files", err => {
        if(err) {
            throw err;
        }
    
        console.log("directory created");
    });
}
