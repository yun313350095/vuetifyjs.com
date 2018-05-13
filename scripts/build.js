const fs = require('fs')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const examples = {}
// Get all folders
const folders = fs.readdirSync(resolve('../examples'))

for (const folder of folders) {
  const files = fs.readdirSync(resolve(`../examples/${folder}`))
  // Set entry
  examples[folder] = files.map(file => file.replace('.vue', ''))
}

fs.writeFile(
  resolve('../data/examples.json'),
  JSON.stringify(examples, null, 2),
  err => {
    err && console.log(err)
  }
)
