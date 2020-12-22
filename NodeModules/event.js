const events = require("events");
const { emit } = require("process");

// event emiiter isntance'ı oluşturuyoruz bu sayede kendimiz custom event'ler başlatabilieceğiz
// ve bu event'leri de handle edebileceğiz
const emitter = new events.EventEmitter();

// .on ile ismi verilen event olduğunda neler yapacağımızı register ediyoruz.
emitter.on("customEvent", (message, user) => {
    console.log(`${user} : ${message}`);
});

// emit fonk. ile yeni bir event başlatıyorum.
// sonra da bu event'i handle edecek arkadaşa göndermek istediğim dataları parametre olarak gönderebiliyorum.
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool", "Mustafa");

// event emitter default olarak async çalışır. Mesela user input'unu bekleyen bir event yazsam. Sistem onu bekler ve bitmez.

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input === "exit") {
        emitter.emit("customEvent","GoodBye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});