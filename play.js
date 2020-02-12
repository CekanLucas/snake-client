const net = require('net');
const chalk = require('chalk');
const {connect}= require('./client');
const { setupInput } = require('./input');


console.log(chalk.cyan('Connecting...'));
connect();
setupInput();

module.exports = 'handleUserInput'
