const net = require('net');
const chalk = require('chalk');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect',
    data => {
      const msgData = chalk.yellow('Data received: ');
      console.log(msgData,chalk.red(data));
    }
  )
  return conn;
}

console.log('Connecting ...');
connect();