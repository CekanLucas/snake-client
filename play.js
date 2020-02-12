const net = require('net');
const chalk = require('chalk');
const {connect}= require('./client');

console.log(chalk.cyan('Connecting...'));
connect();