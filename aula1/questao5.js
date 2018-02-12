const fs = require('fs')
const path = './'

function isFilePromise(path){
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) =>{
      if(err){
        reject(`ocorreu um erro: ${err}`)
      }else{
        resolve(stat.isFile())
      }
    })
  })
}

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

// async function listFiles(path){
//   try {
//     const paths = await readdirPromise(path)
//     for(let path of paths){
//       if(await isFilePromise(path)){
//         console.log(path)
//       }
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }

async function listFiles(path){
  try {
    const paths = await readdirPromise(path)
    const statPromises = paths.filter(async path => await isFilePromise(path))
    const stats = await Promise.all(statPromises)
    console.log(stats)
  } catch (e) {
    console.log(e)
  }
}

listFiles(path)
