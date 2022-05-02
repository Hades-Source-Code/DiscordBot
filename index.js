const Discord = require("discord.js")
require("dotenv").config
const TOKEN = "OTcwNzE3MDY4ODY3NTYzNjIz.YnAAuA.Occk_bY-ZuyMNGKqO6tlSTjr-Mo"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})





client.login(TOKEN)