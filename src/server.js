require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(process.env.DISCORD_TOKEN);
