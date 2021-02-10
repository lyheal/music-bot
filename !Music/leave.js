const Discord = require('discord.js')


module.exports = {
    name: 'leave',
    run(client, message, args){
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) return message.channel.send("You need to join a voice channel first!").catch(console.error);
        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.channel.send("**You must be in the same channel as bot.**")
            
        message.guild.voice.channel.leave()
        return message.channel.send('**Leave from voice channel.**')

    }
}