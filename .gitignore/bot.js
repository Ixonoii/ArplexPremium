// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var embedcolor = "#7e05ca";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mention me | ;cmds", {type: "PLAYING"})
})                                                             

client.on('message', function(message){
    if(message.content === "<@650067878292357170>"){
        let informationembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle("Hello " + message.author.username + ". I'm Space Assistant, the official bot of Space Studios. Need help? Use the " + prefix + "cmds command!")
        .setColor(embedcolor)
        message.channel.send(informationembed)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "whois"){
        let memberMEN = message.mentions.members.first()
        if(!memberMEN) return message.channel.send("**You have to mention someone.**")
        let informationuser = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle("Information about " + memberMEN)
        .setColor(embedcolor)
        .addField("Username:", memberMEN)
        .addField("Discriminator:", memberMEN.discriminator)
        .addField("ID:", memberMEN.id)
        .addField("User joined at:", memberMEN.joinedAt)
        .addField("Permissions:", memberMEN.hasPermissions)
        message.channel.send(informationuser)
}
})
