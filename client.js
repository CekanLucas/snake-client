const net = require('net');
const chalk = require('chalk');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
// const connect = function () {
//   const conn = net.createConnection({
//     host: IP,
//     port: PORT
//   });

//   conn.setEncoding('utf8'); // interpret incoming data as text

//   conn.on('connect', //event triggers when connection first established
//     () => {
//       const msg = chalk.blackBright('Connection has been established');
//       console.log(msg);
//       conn.write("Name: LIC");

//       // send data on connection
//       conn.on('connection', //huh?
//         data => {
//           console.log('connection')
//           const msgData = chalk.yellow('Data received: ');
//           console.log(msgData, chalk.red(data));
//         }
//       )
//     }
//   )

//   return conn;
// }

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

// let i = 0;
// const numConn = 2
// while (i < numConn) {
//   connect();
//   i++;
// }

module.exports = {
  connect
};