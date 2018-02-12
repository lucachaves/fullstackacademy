const fs = require('fs')
const path = './'

// fs.readdir(path, (err, files) => {
//   if(err){
//     console.log('ocorreu um erro.')
//   }else{
//     console.log(files)
//   }
// })

function readdirPromise(path){
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) =>{
      if(err){
        reject(`ocorreu um erro: ${err}`)
      }else{
        resolve(files)
      }
    })
  })
}

readdirPromise(path)
  .then(files => console.log(files))
