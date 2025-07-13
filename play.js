const net = require('net');
// const chalk = require('chalk');
// const {connect}= require('./client');
// const { setupInput } = require('./input');

// setupInput(connect());

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  
  conn.setEncoding("utf-8");

  conn.on('data', data => {
    console.log('Incoming data: ', data);
  })
  
  return conn
}

// console.log(chalk.cyan('Connecting...'));
console.log('Connecting...');
connect();
