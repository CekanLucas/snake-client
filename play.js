const net = require('net');
const chalk = require('chalk');
const {connect}= require('./client');
// const { setupInput } = require('./input');

// setupInput(connect());

console.log(chalk.cyan('Connecting...'));
connect();
