const net = require('net');
const chalk = require('chalk');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8'); // interpret incoming data as text

  conn.on('connect', //event triggers when connection first established
    () => {
      const msg = chalk.blackBright('Connection has been established');
      console.log(msg);

      conn.write("Name: LIC");
    }
  )

  // Log any message from server
  conn.on('data', data => {
    console.log('Incoming data: ', chalk.yellow(data));
  })

  return conn;
};

module.exports = {
  connect
};