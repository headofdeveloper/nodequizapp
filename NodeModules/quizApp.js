
const quiz = require("./ExportExamples/quizModule");

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

/** with a callback  */
quiz(questions, userAnswers => {
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
    process.exit();
});


/** w/o callback */
quiz(questions);