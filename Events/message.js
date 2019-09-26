module.exports = (client, message) => {
    if (message.content === 'ping') {
        message.reply('Pong!')
    }
    /*
    if (message.content === ':pepega:' || ':Pepega:') {
        message.react(":Pepega:545430540539658240")
    }
    */
    if (message.content === 'Hello there') {
        message.reply('General Kenobi!')
    }
    if (message.content === "listemojis") {
        const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
        message.channel.send(emojiList);
    }
}
const practice = require('../Commands/practice')
module.exports = (client, message) => {
    //real stuff
    if (message.content.startsWith("!practice", 0)){
        return practice(message);
    }
}