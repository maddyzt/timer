// to beep
// process.stdout.write('\x07');

// edge cases
  // no numbers provided, no beep & end
  // negative number, ignore
  // NaN input, ignore

// implement a timer which will beep after specific seconds have passed
// user can pass in unlimited # of alarms using command line arguments

let array = process.argv.slice(2);
let delay = array[0]*1000;

for (let i = 0; i < array.length; i++) {
  if (array[i] <= 0 || isNaN(array[i])) {
    process.exit();
  } else {
  
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay)
  delay = array[i + 1]*1000;
}};
