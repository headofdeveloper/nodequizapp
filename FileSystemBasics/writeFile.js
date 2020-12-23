const fs = require("fs");

const md = `

# This is a new file 

We can write text to a file with fs.writeFile



`;

fs.writeFile("./assets/notes.md",md.trim(), err => {
    if(err) {
        throw err;
    }

    console.log("File Saved");

} );


const jsonData = {
    name : 'Mustafa'
};

//writes [object Object]
fs.writeFile("sample.json", jsonData.toString(), err => {
    if(err)
    {
        throw err;
    }
});

//writes {"name":"Mustafa"}
fs.writeFile("beautifulSample.json", JSON.stringify(jsonData), err => {
    if(err)
    {
        throw err;
    }
});

