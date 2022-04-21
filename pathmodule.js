const path=require('path')

console.log(path.sep)
//file path
const filePath=path.join('./content', 'subfolder', 'file.txt')
console.log(filePath)

//base path
const base=path.basename(filePath)
console.log(base)

//absolute path

const absolute=path.resolve(__dirname, 'content', 'subfolder', 'file.txt')
console.log(absolute)