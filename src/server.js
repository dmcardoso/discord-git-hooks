require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello world!',
  });
});

app.post('/branchs', (request, response) => {
  return response.send('branchs');
});

app.post('/forks', (request, response) => {
  return response.send('forks');
});

app.post('/pull-requests', (request, response) => {
  return response.send('pull-requests');
});

app.post('/stars', (request, response) => {
  return response.send('stars');
});

app.listen(process.env.APP_PORT, () => {
  console.log(`I'm on port ${process.env.APP_PORT}`);
});

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(process.env.DISCORD_TOKEN);
