const fs = require("fs");
const { threadId } = require("worker_threads");
const quiz = require("./assets/questions.json");

quiz.questions.forEach(q => {
    fs.appendFile("./storage-files/questions.md", `Q: ${q} \n`, err => {
        if(err) {
            throw err;
        }
    });
});

