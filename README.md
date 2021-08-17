# Āśrava
Developing a personalized Discord bot using `discord.js`.

## Requirements
* [discord.js](https://discord.js.org/)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Setup
After cloning this repository, open [this](https://discord.com/developers/applications/) link and click on the **Bot** option in the sidemenu. Copy the token underneath the bot's username. Create a `client.env` file and paste the token. Your file should look like this.
```
BOT_TOKEN=token-goes-here
``` 

Create a `config.json` file with the following code. The value of `prefix` will act as the bot's trigger.
```json
{
	"prefix": ">"
}
```

## Basic features
- [x] Purge 		`purge`
- [x] User avatar 	`pfp`
- [x] Server info 	`server`

## Planned features
- [ ] F1 statistics
- [ ] Time and Weather
- [ ] Google and Wikipedia search
- [ ] COVID-19 statistics for India
- [ ] Podcasts
- [ ] Random wallpaper from [Unsplash](https://unsplash.com/)