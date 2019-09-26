import {consoleLog, readLines} from "../functions/readingfile";
const file = '../WordDatabase/listOfKanji.txt';
module.exports = message =>{
    message.reply("Let's begin");
    readLines(file, consoleLog());
}