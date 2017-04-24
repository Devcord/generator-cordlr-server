'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Get your awesome ' + chalk.red('Cordlr Server') + ' in just a minute!'
    ));

    const prompts = [{
      type: 'input',
      name: 'botName',
      message: 'How do you want to call your bot?',
      default: 'cordlr-bot',
      required: true
    }, {
      type: 'input',
      name: 'botToken',
      message: 'Please enter your bots token [https://discordapp.com/developers/applications/me]',
      required: true
    }, {
      type: 'input',
      name: 'botPrefix',
      message: 'Please enter your bots chat prefix which triggers commands',
      default: '!',
      required: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('server/**/*.*'),
      this.destinationPath(this.props.botName + '/'),
      this.props
    );
  }

  install() {
    process.chdir(process.cwd() + '/' + this.props.botName)
    this.npmInstall();
  }

  end() {
    this.spawnCommand('cd', ['./' + this.props.botName])
  }
};
