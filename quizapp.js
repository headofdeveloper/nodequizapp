const fs = require("fs");
const quiz = require("./NodeModules/ExportExamples/quizModuleEvent");
const quizAssets = require("./FileSystemBasics/assets/questions.json");
var quizEvents = quiz(quizAssets.questions);

quizEvents.on("answer", (index, answer) => {
    if(quizAssets.correctAnswers[index] == answer){
        console.log(`Correct!`);// ${index} - ${correctAnswers[index]} - ${answer}`);
    }else{
        console.log(`Wrong! - Correct answer is ${quizAssets.correctAnswers[index]} `);
    }
});
quizEvents.on("complete", () => console.log("Done"));
quizEvents.on("complete", () => process.exit());




