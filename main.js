const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  // if enter go to next
  if (key.ctrl && key.name === 'c') {
    step2();
  } else {
    console.log(`You pressed the "${str}" key`);
    console.log();
    console.log(key);
    console.log();

  }
});
console.log('Press any key...');

function step2(){
process.stdin.on('keypress', (str, key) => {
  // if enter go to next
  if (key.ctrl && key.name === 'j') {
    step3();
  } else {
    console.log(`You pressed the "${str}" key`);
    console.log();
    console.log(key);
    console.log();

  }
});
console.log('Press nany key...');
}

function step3(){
process.stdin.on('keypress', (str, key) => {
  // if enter go to next
  if (key.ctrl && key.name === 'k') {
    process.exit();
  } else {
    console.log(`You pressed the "${str}" key`);
    console.log();
    console.log(key);
    console.log();
  }
});
console.log('Dope...');
}
