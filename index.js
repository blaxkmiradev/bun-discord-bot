import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("pong 🏓");
  }

  if (message.content === "!hello") {
    message.reply("សួស្តី 👋 ខ្ញុំជា bot ប្រើ Bun.js");
  }
});

client.login(process.env.DISCORD_TOKEN);
