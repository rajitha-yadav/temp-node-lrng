//__dirname => path to current directory
//__filename => file name
//required ---> function to use modules (commonjs)
// module ---> info about current module (file)
// process --> info about env where the program is being executed
console.log(__dirname)

setInterval(()=> {
    console.log("hello")
},1000)

const john= 'john'
const peter='peter'

const sayHi=(name) =>{
    console.log(`hello there ${name}`)
}

sayHi('Rajitha')
sayHi(john)
sayHi(peter)