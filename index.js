const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const isConfigured = dotenv.config({ path: 'client.env' });

if(isConfigured.error) {
	throw isConfigured.error;
}

client.once('ready', () => {
	console.log(`Developed by ${process.env.DEVELOPER}`);
});

client.on('interactionCreate', interaction => {
	console.log(interaction);
})

client.login(process.env.TOKEN);