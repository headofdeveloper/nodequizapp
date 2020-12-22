const readline = require("readline");
const { EventEmitter } = require("events");

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// done = f => f demediğimizde eğer bir callback gönderilmemişse hata verecektir.
// bu sayede 2. argument optional oldu
module.exports = (questions, done = f => f) => {
    let answers = [];
    const [question] = questions;

    const emitter = new EventEmitter();

    const answered = answer => {        
        answers.push(answer);   
        emitter.emit("answer", (answers.length - 1), answer);      
        if(answers.length < questions.length)
        {            
            rlInterface.question(questions[answers.length], answered);
        }
        else
        {
           //if(done) yaparak da callback gönderilmediğinde handle edebiliriz hata vermeden
           // ama dummy function vermek daha iyi bir yaklaşım.
           done(answers);

           emitter.emit("complete",answers);
        }
    };
    rlInterface.question(question, answered);

    return emitter; // artık bu module bir event emitter export etmiş olacka. yani ben bu module için .on ile bir event'i bekleyebilirim.
};
