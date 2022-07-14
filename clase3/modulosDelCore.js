const os = require('os')

// console.log(os.totalmem())
// console.log(os.freemem())

// console.log(os.networkInterfaces())

// const fs = require('fs/promises')
// console.time()
// async function exampleFS(){
//     const data = await fs.readFile('asincronia.js', { encoding: 'utf8' });
//     const data2 = await fs.readdir(".");
//     console.log("==============")
//     // console.log(data);
//     console.log("==============")
//     await fs.writeFile('test.js', 'console.log("tests")')
//     await fs.appendFile('test.js', '\nlet a = 5;')
//     await fs.unlink('test.js')
// }

// exampleFS()
// console.timeEnd()

// const http = require('http')

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//     res.end("<h3>Hola</h3>")
// });

// server.listen(3000, ()=>{
//     console.log("Server arriba");
// })

let a = process.argv
console.log(a)