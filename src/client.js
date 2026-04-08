import { Client } from "discord.js";
import "dotenv/config";
import { intents } from "./config/intents.js";

import ready from "./events/ready.js";
import messageCreate from "./events/messageCreate.js";

export const client = new Client({ intents });

ready(client);
messageCreate(client);

client.login(process.env.DISCORD_TOKEN);
