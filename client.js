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

  conn.on('connect', //event triggers when connection first established
    () => {
      const msg = chalk.blackBright('Connection has been established');
      console.log(msg);
      conn.write("Name: LIC");
      
      // send data on connection
      conn.on('connection', //huh?
        data => {
          console.log('connection')
          const msgData = chalk.yellow('Data received: ');
          console.log(msgData,chalk.red(data));
        }
      )
    }
  )
  conn.write("Name: LIC");
  conn.write("Move: left");
  conn.write("Move: up");
  conn.write("Move: down");
  conn.write("Move: right");
  return conn;
}

// let i = 0; 
// const numConn = 100
// while(i < numConn){
//   connect();
//   i++;
// }

module.exports = {
  connect
};