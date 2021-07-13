require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', async () => {
  const channel = await client.channels.fetch(process.env.CHANNEL_ID);

  const embed = new Discord.MessageEmbed()
    .addField('Hello', 'there')
    .addFields([
      {
        name: 'its',
        value: 'here',
      },
      {
        name: 'its',
        value: '@everyone',
      },
    ])
    .setTitle('A slick little embed')
    .setURL('https://google.com')
    .setAuthor('Author')
    .setFooter('Footer stand by')
    .setThumbnail(
      'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    )
    .setImage('https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png')
    .setColor('RANDOM')
    .setDescription('Hello, this is a slick embed!')
    .setTimestamp();

  await channel.send('@here hello there', embed);
});

client.login(process.env.DISCORD_TOKEN);
