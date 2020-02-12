/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data' , handleUserInput)
  return stdin;
}

const handleUserInput = key => {
  const stdin = process.stdin;
  switch(key) {
    case 'w': // up 
      "Move: up";
      break;
    case 's': // down
      "Move: down";
      break;
    case 'a': // left
      "Move: left";
      break;
    case 'd': // right
      "Move: right";
      break;
    case '\u0003':
      process.stdout.write(
        chalk.red('Exiting\n')
      );
      process.exit(1);
    default: 
  }
}

module.exports = {
  setupInput
}