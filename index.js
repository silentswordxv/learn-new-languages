const fs = require('fs')
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

fs.readdir('./Events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./Events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, arg => eventHandler(client, arg))
    })
})
/*
fs.readdir('./Events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require('./Events/ready)
        const eventName = file.split('.')[0]
        client.on(eventName, arg => eventHandler(client, arg))
    })
})

fs.readdir('./Events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require('./Events/message)
        const eventName = file.split('.')[0]
        client.on(eventName, arg => eventHandler(client, arg))
    })
})
*/

client.login(process.env.BOT_TOKEN)