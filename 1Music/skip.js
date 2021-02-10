const { canModifyQueue, LOCALE } = require("../LayerCoding");


module.exports = {
  name: "skip",

  run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**There is nothing playing  that I could skip for you.**").catch(console.error);
    if (!canModifyQueue(message.member)) return "**You need to join a voice channel first!**"

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`**${message.author} ⏭ skipped the song**"`).catch(console.error);
  }
};
