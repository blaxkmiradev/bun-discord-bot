import ping from "../commands/ping.js";
import hello from "../commands/hello.js";

export default (client) => {
  client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    ping(message);
    hello(message);
  });
};
