const { canModifyQueue, LOCALE } = require("../LayerCoding");


module.exports = {
  name: "stop",

  run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.channel.send("**There is nothing playing .**").catch(console.error);
    if (!canModifyQueue(message.member)) return "**You need to join a voice channel first!**"

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send("** ⏹ stopped the music!**").catch(console.error);
  }
};
