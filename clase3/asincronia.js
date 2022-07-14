///Callbacks 

const fs = require('fs')
let x;
console.log("ANTES")
fs.readFile('modulosDelCore.js', (err, data)=>{
    if(err){
        console.log(err)
        return
    }
    x = data;
    console.log(data)
})
console.log(x)

// Proomesas

const done = false

const isItDoneYet = new Promise((resolve, reject)=>{
    if(done){
        resolve("Exito")
    }else{
        reject("Fallo")
    }
});

const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        });
}

checkIfItsDone()

// Promisifying

const fs = require('fs')

const getFileConPromesa = fileName => {
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, (err, data)=>{
            if(err){
                reject(err)
                return
            }
            x = data;
            resolve(data);
    });
});
}

getFileConPromesa('modulosDelCore.js')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Async / Await
    
const doSomethingAsync = () => {
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Exito"), 3000);
    });
};

const doSomething = async () => {
    console.log('antes')
    console.log(await doSomethingAsync());
    console.log('despues')
}

doSomething();