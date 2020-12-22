let hour = 500;
let day = 24 * hour;
let year = 365 * day;
let currentTime = 0;
let timeInterval = hour;

const intervalFunc = setInterval(() => {
    currentTime += timeInterval;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${currentTime/hour} hour passed...`);
}, timeInterval);


const oneDayFunc = (planet, time) => {
    process.stdout.write(`${(currentTime+hour)/time} day(s) passed in ${planet} \n`);
};

var earthInterval = setInterval(oneDayFunc, day, "Earth", day);
var saturnInterval = setInterval(oneDayFunc, 11 *hour, "Saturn", 11 *hour);


setTimeout( () => 
{
    clearInterval(intervalFunc);
    clearInterval(earthInterval);   
    clearInterval(saturnInterval);   
}, day * 3 + hour);
