const Discord = require('discord.js');

const token = '' //token here
const path = require ('path')
const client = new Discord.Client(); //layer//layer//layer//layer//layer//layer//layer
const fs = require('fs');//layer//layer//layer//layer//layer//layer
client.commands = new Discord.Collection();
client.queue = new Map()
const i18n = require('i18n')
const commandFiles = fs.readdirSync('./1Music').filter(file => file.endsWith('.js'));
for(const file  of commandFiles){//layer//layer//layer//layer//layer
    const command = require(`./1Music/${file}`);//layer//layer//layer//layer//layer//layer//layer//layer//layer//layer//layer
    client.commands.set(command.name, command );//layer//layer//layer//layer//layer//layer//layer//layer

//layer//layer//layer//layer//layer//layer
}
//layer//layer//layer
 //layer//layer//layer//layer

    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;//layer//layer//layer//layer
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);//layer//layer//layer//layer
        const command = args.shift().toLowerCase();
        const cmds = client.commands.get(command)//layer//layer//layer//layer//layer
        try {
            cmds.run(client, message, args);
        } catch (error) {
            return;
        }
    });//layer//layer//layer//layer//layer


    


    client.once('ready', () => {//layer//layer//layer//layer
        console.log('Bot is now online!')
    })
  






    
  client.on('message', message => {//layer//layer//layer//layer
    if(message.content === (`<@!${client.user.id}>`)){
        message.channel.send(`**Prefix:** \`${prefix}\``)
    }//layer//layer//layer//layer//layer

})






//layer//layer//layer//layer//layer
client.login(token)