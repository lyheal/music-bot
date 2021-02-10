const { canModifyQueue, LOCALE } = require("../LayerCoding");


module.exports = {
  name: "pause",

  run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**There is nothing playing.**").catch(console.error);
    if (!canModifyQueue(message.member)) return "**You need to join a voice channel first!**"

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel
        .send("**⏸ paused the music.**")
        .catch(console.error);
    }
  }
};
