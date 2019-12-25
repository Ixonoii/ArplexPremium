// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "with Arplex";
var prefix = "-";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}
