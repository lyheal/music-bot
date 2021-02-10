const { canModifyQueue, LOCALE } = require("../LayerCoding");


module.exports = {
  name: "reply",

    run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send('**There is nothing playing.**').catch(console.error);
    if (!canModifyQueue(message.member)) return "You need to join a voice channel first!"

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`reply is now ${queue.loop ? "**on**" : "**off**" }`)
      .catch(console.error);
  }
};
