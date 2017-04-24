# Cordlr Server

This is a server boilerplate for the Discord bot framework [**Cordlr**](https://github.com/Devcord/cordlr-cli).

You can use this boilerplate to setup a server without setting up the configuration by your own. Just follow the instructions and watch your bot breathe!

## Setup

1) Do `npm install` in terminal
2) Configure your `cordlr.json` file (Read **Configuration** below)
3) Install cordlr via `npm i Devcord/cordlr`
4) Do `cordlr` in terminal

## Configuration

Open the **cordlr.example.json** and add your bot token so your bot can actually login. You can retrieve your bots token from the [Discord API](https://discordapp.com/developers/applications/me). Save the file as **cordlr.json**

* **token**: Your bot token. Is used to authenticate the bot
* **prefix**: The bot prefix which will trigger your bot. `!` by default
* **plugins**: Array containing all loaded plugins with the *cordlr-* prefix. Make sure to install the packages before adding them here
* **plugin specific configuration**: every plugin can load values from here. Read your installed plugins documentation for configuration values

**IMPORTANT NOTE**: Make sure to not push your private bot token to Github or any other public site.

## Installed Plugins

By default the following plugins are installed:

* **cordlr-help2**: Lists all commands & plugins with usage info and descriptions using **!help** or **!plugins**
* **cordlr-giphy**: Retrieves a random giphy via **!giphy** or **!giphy <tag>**

## Contribute

Hop over to [Cordlr CLI](https://github.com/Devcord/cordlr-cli) to help us!
