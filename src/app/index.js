const express = require('express');
const Discord = require('discord.js');
const routes = require('./routes');

class Application {
  constructor() {
    this.begin();
    this.middlewares();
    this.routes();
  }

  begin() {
    this.app = express();
    this.discord = new Discord.Client();
  }

  middlewares() {
    this.app.use(express.json());

    this.app.use('*', (request, response, next) => {
      request.discord = this.discord;
      next();
    });
  }

  routes() {
    this.app.use('/', routes);
  }

  start() {
    this.app.listen(process.env.APP_PORT, () => {
      console.log(`[http-server:${process.env.APP_PORT}] http server ready`);
      this.discord.login(process.env.DISCORD_TOKEN);
    });

    this.discord.on('ready', () => {
      console.log('[discord]: discord ready');
    });
  }
}

module.exports = Application;
