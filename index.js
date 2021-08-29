const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const isConfigured = dotenv.config({ path: 'client.env' });

if (isConfigured.error) {
	throw isConfigured.error;
}

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`Hello there!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
	}
})

client.login(process.env.BOT_TOKEN);