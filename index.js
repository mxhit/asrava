const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const isConfigured = dotenv.config({ path: 'client.env' });

if (isConfigured.error) {
	throw isConfigured.error;
}

client.once('ready', () => {
	console.log(`Developed by ${process.env.DEVELOPER}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: \`${interaction.guild.name}\`\nTotal members: \`${interaction.guild.memberCount}\`\nCreated at: \`${interaction.guild.createdAt}\``);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: \`${interaction.user.tag}\``);
	}
})

client.login(process.env.BOT_TOKEN);