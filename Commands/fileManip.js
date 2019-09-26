//This module is in charge of separating the text line using regex " : "
//It will then assign 3 variables:
//1. the word
//2. its translation
//3. a hint (eg. situation how the kanji was learned (MIA))
const fs = require('fs');
const FILE_PATH = './WordDatabase/listOFKanji.txt';

const line = require('./wordpick');
const fullLine = line().finally()[Symbol.toStringTag];
String[] words;
for (int i=0; i>2; i++){
    word = fullLine.split(' : ')[i];
}
