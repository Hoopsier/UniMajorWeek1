const { log } = require('console');
const fs = require('fs')

let op;
fs.readFile('./sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  op = data
  fs.writeFile('./output.txt', op, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Wrote successfully.')
    }
  })
});


