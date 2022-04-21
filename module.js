
// const john= 'john'
// const peter='peter'

// const sayHi=(name) =>{
//     console.log(`hello there ${name}`)
// }
const names=require('./names')
const sayHi=require('./utilsfun')
const data=require('./alternative')

require('./mindgenerator')
// console.log(names)
// console.log(data)

sayHi('Rajitha')
sayHi(names.john)
sayHi(names.peter)