const { canModifyQueue } = require("../LayerCoding");


module.exports = {
  name: "volume",

  run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.channel.send("**There is nothing playing .**").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.channel.send("**You need to join a voice channel first!**").catch(console.error);

    if (!args[0]) return message.channel.send(`🔊 The current volume is: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.channel.send("**Please use a number to set volume**.").catch(console.error)
    if (Number(args[0]) > 100 || Number(args[0]) < 0)
      return message.channel.send("**Please use a number between 0 - 100.**").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    return queue.textChannel.send(`Volume set to: **${args[0]}%**"`).catch(console.error);
  }
};
