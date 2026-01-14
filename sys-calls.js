const fs = require('fs')
const os = require('os')
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  fs.writeFile("./output.txt", JSON.stringify(data), err => {
    if (err) {
      console.error(err)
    }
  })
})

console.log('hostname:', os.hostname())
console.log('platform:', os.platform())
console.log('cpus:', os.cpus())
