const { canModifyQueue, LOCALE } = require("../LayerCoding");


module.exports = {
  name: "resume",

  run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**There is nothing playing .**").catch(console.error);
    if (!canModifyQueue(message.member)) return "**You need to join a voice channel first!**";

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel
        .send("**There is nothing playing.**")
        .catch(console.error);
    }

    return message.channel.send("**The queue is not paused.**").catch(console.error);
  }
};
