// user can press b and it will beep right away
// user can input any number from 1-9 and it will output "setting timer for x seconds" and beep after that # seconds
// user can use ctrl c to exit program

let array = process.argv.slice(2);
let delay = array[0] * 1000;

for (let i = 0; i < array.length; i++) {
  if (array[i] <= 0 || isNaN(array[i])) {
    process.exit();
  } else {
    console.log(`setting timer for ${array[i]} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
    delay = array[i + 1] * 1000;
  }
}

// beep on press b and ctrl c to exit program
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\x62') {
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});

