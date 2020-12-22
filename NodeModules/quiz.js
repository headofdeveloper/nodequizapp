const readline = require("readline");

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const evaluateQuiz = (questions, done) => {
    let answers = [];
    const [question] = questions;
    const answered = answer => {
        answers.push(answer);         
        if(answers.length < questions.length)
        {            
            rlInterface.question(questions[answers.length], answered);
        }
        else
        {
           done(answers);
        }
    };
    rlInterface.question(question, answered);
};

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

evaluateQuiz(questions, userAnswers => {
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