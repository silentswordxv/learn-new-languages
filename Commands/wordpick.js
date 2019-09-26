const readline = require('readline');
const fs = require('fs');
const FILE_PATH = './WordDatabase/listOfKanji.txt';

module.exports = async() => {
    const linesCount = await getLinesCount();
    const randomLineIndex = Math.floor(Math.random() * linesCount);
    const content = await getLineContent(randomLineIndex);
    //await console.log('inside getWord: ' +content);
    //console.log(linesCount);
    //message.reply(await getLineContent(randomLineIndex));
    return content;
}

/*
module.exports = message => {
    async function getWord() {
        const linesCount = await getLinesCount();
        const randomLineIndex = Math.floor(Math.random() * linesCount);
        const content = await getLineContent(randomLineIndex);
        await console.log('inside getWord: ' +content);
        //console.log(linesCount);
        //message.reply(await getLineContent(randomLineIndex));
        return content;
    };
    //message.reply(getWord());
    console.log('from getWord:' + getWord().valueOf());
    console.log('then:' + getWord().then());
    console.log('catch:' + getWord().catch());
    message.reply(getWord().valueOf());
}
*/
//
// HELPERS
//

function getLineReader()
{
    return readline.createInterface({
        input: fs.createReadStream(FILE_PATH)
    });
}

async function getLinesCount()
{
    return new Promise(resolve =>
    {
        let counter = 0;
        getLineReader()
            .on('line', function (line)
            {
                counter++;
            })
            .on('close', () =>
            {
                resolve(counter);
            });
    });
}

async function getLineContent(index)
{
    return new Promise(resolve =>
    {
        let counter = 0;
        getLineReader().on('line', function (line)
        {
            if (counter === index)
            {
                resolve(line);
            }
            counter++;
        });
    });
}
