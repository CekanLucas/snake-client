const chalk = require('chalk');
// Stores the active TCP connection object.

let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data' , handleUserInput);
//   let i = 0; 
// const numConn = 100
// while(i < numConn){
//   connection.write("Move: left");
//   i++;
// }
  // connection.write();
  return stdin;
}

const handleUserInput = (key) => {
  //random function

   switch(key) {
    case 'w': // up 
      connection.write("Move: up");
      break;
    case 's': // down
      connection.write("Move: down");
      break;
    case 'a': // left
      connection.write("Move: left");
      break;
    case 'd': // right
      connection.write("Move: right");
      break;
    case 'e': // right
      connection.write("Say: We are Legion");
    break;
    case '\u0003':
      process.stdout.write(
        chalk.red('Exiting\n')
      );
      process.exit(1);
  }
}

module.exports = {
  setupInput
}