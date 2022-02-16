const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beepTimer = timer => {
  console.log(`Setting timer for ${timer} seconds...`);
  setTimeout(()=> {
    process.stdout.write('Beep\n');
  }, (timer * 1000))
};

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('Beep\n');
  }
  if (isFinite(key)) {
    beepTimer(key);
  }
});
