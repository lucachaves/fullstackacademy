const fs = require('fs')
const path = './'

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

async function readdir(path){
  try {
    const files = await readdirPromise(path)
    console.log(files)
  } catch (e) {
    console.log(e)
  }
}

readdir(path)
