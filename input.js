const chalk = require('chalk');

// Stores the active TCP connection object.



/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
*/
const setupInput = (conn) => {

  const handleUserInput = (key) => {

  switch (key) {
    case 'w': // up 
      conn.write("Move: up");
      break;
    case 's': // down
      conn.write("Move: down");
      break;
    case 'a': // left
      conn.write("Move: left");
      break;
    case 'd': // right
      conn.write("Move: right");
      break;
    case 'e': // right
      conn.write("Say: We are Legion");
      break;
    case '\u0003':
      console.log("ctrl+c pressed");
      process.stdout.write(
        chalk.red('Exiting\n')
      );
      process.exit();
  }
}





  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  //   let i = 0; 
  // const numConn = 100
  // while(i < numConn){
  //   connection.write("Move: left");
  //   i++;
  // }
  // connection.write();



  return stdin;
}



module.exports = {
  setupInput
}