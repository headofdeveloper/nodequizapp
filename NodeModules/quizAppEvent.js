
const quiz = require("./ExportExamples/quizModuleEvent");

const questions = [
    "Do all planets rotate the same speed? > ",
    "How many hours does Saturn have in a day? ? > ",
    "What planet rotates around its axis the fastest? > "    
];

const correctAnswers = [
    "No",
    "11",
    "Jupiter"
];

//quizModuleEvent içinde artık bir emitter dönüyoruz. Bunu bir değişkene alalım.
const answerEvents = quiz(questions, userAnswers => {
    console.log("Thanks for your answers:");
    let correctAnswerCount = 0;
    for (let index = 0; index < questions.length; index++) {
        if(correctAnswers[index] == userAnswers[index])
        {
            correctAnswerCount++;
        }
    }
    if(correctAnswerCount == 0)
    {
        console.log(`You dont have any correct answers`); 
    }
    else if(correctAnswerCount == questions.length)
    {
        console.log(`Congratulations. All answers are correct`); 
    }
    else
    {
        console.log(`You have ${correctAnswerCount} correct answers out of ${questions.length} question`);
    }    
    //process.exit(); // bunu buradan kaldırıp complete event'i için yeni bir handler yazıcam ve orada exit yapıcam.
});

answerEvents.on("answer", (index, answer) => {
    //console.log(`Correct! ${index} - ${correctAnswers[index]} - ${answer}`);
    if(correctAnswers[index] == answer){
        console.log(`Correct!`);// ${index} - ${correctAnswers[index]} - ${answer}`);
    }else{
        console.log(`Wrong! - Correct answer is ${correctAnswers[index]} `);
    }
});
answerEvents.on("complete", () => console.log("Done"));
answerEvents.on("complete", () => process.exit());

