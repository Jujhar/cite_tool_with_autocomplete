// data
let page = '',
    fname = '',
    lname = '',
    book = '',
    year = '',
    quote = '';

let state = 0;
// let journal = '';

// add esc / undo

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (state === 0) {
    if (key.name === 'return') {
      console.log(page)
      state = 1;
      step2();
      return;
    } else {
      page += key.name;
    }
  }
});
if (state === 0) {
  console.log('page ?');
}

function step2(){
  process.stdin.on('keypress', (str, key) => {
    if (state === 1) {
      if (key.name === 'return') {
          state = 2;
          step3();
          return;
      } else {
        fname += key.name;
      }
    }
  });
  if (state === 1) {
    console.log('firstname ?');
  }
}

function step3(){
  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'return') {
      if (state === 2) {
        state = 3;
        step4();
        return;
      }
    } else {
      if (state === 2) {
        lname += key.name;
      }
    }
  });
console.log('lastname ?');
}

function step4(){
  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'return') {
      if (state === 3) {
        state = 4;
        step5();
        return;
      }
    } else {
      if (state === 3) {
        book += key.name;
      }
    }
  });
console.log('book name ?');
}

function step5(){
  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'return') {
      if (state === 4) {
        state = 5;
        step6();
        return;
      }
    } else {
      if (state === 4) {
        year += key.name;
      }
    }
  });
console.log('year ?');
}

// Use different method here
function step6(){
  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'return') {
      if (state === 5) {
        console.log(page + " " + fname + ", " + lname
          + " (" + year + ") " + book + "p. " + page
          + ' "' + quote + '"');
        state = 6;
        process.exit();
      }
    } else {
      if (state === 5) {
        quote += key.name;
      }
    }
  });
console.log('quote / text of citation (optional) ?');
}

// Made by Rebare
