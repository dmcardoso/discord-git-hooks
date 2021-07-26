const { MessageEmbed } = require('discord.js');

class DiscordService {
  buildStarsMessage({ repository, sender, starredAt }) {
    const embed = new MessageEmbed()
      .setTitle(`${sender.login} starred ${repository.name}!`)
      .setDescription(
        `Check ${sender.login} and start following! ${sender.html_url}`,
      )
      .setURL(repository.html_url)
      .setFooter(repository.full_name)
      .setThumbnail(sender.avatar_url)
      .setColor('RANDOM')
      .setTimestamp(new Date(starredAt).getTime());

    const extraFields = [
      {
        name: 'Repository description',
        value: repository.description,
      },
      {
        name: 'Repository stars count',
        value: repository.stargazers_count,
      },
      {
        name: 'Repository language',
        value: repository.language,
      },
      {
        name: 'Repository open issues',
        value: repository.open_issues,
      },
    ];

    this.addFields(embed, extraFields);

    return embed;
  }

  buildBranchesMessage({ ref, repository, sender }) {
    const embed = new MessageEmbed()
      .setTitle(`New branch ${ref} on ${repository.name}!`)
      .setDescription(
        `${sender.login} created a new branch on ${repository.name}, check it out ${repository.html_url}/tree/${ref}`,
      )
      .setURL(repository.html_url)
      .setFooter(repository.full_name)
      .setThumbnail(sender.avatar_url)
      .setColor('RANDOM')
      .setTimestamp();

    const extraFields = [
      {
        name: 'Repository description',
        value: repository.description,
      },
      {
        name: 'Repository stars count',
        value: repository.stargazers_count,
      },
      {
        name: 'Repository language',
        value: repository.language,
      },
      {
        name: 'Repository open issues',
        value: repository.open_issues,
      },
    ];

    this.addFields(embed, extraFields);

    return embed;
  }

  addFields(embed, fields) {
    fields.forEach((field) => {
      if (field.value) {
        embed.addField(field.name, field.value);
      }
    });
  }

  async sendMessage(discord, ...messages) {
    const channel = await discord.channels.fetch(process.env.CHANNEL_ID);
    return channel.send(...messages);
  }
}

module.exports = new DiscordService();
