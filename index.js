let fs = require('fs')
let path = require('path')
const fileName = path.join(__dirname, './data/data.txt')
// const fileName = './data/data.txt'
function writeToAFIle(content) {
    try{
     fs.writeFile(fileName, content, err=>{
        if(!err) console.log('Saved!') 
     })
    }catch(e) {
        console.log('Issue when writing to a file');
    }
}

function readFromAFIle() {
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(!err) console.log(data);
    })
}

function appendToAFIle(content) {
    try{
        fs.appendFile(fileName, content, err=>{
            if(!err) console.log('Your data has been modified.')
        })
    }catch(e) {
        console.log('Issue when appending data to a file');
    }
}

// Call functions
writeToAFIle('First content') //13 Character
writeToAFIle('Second content') //14 Character
// readFromAFIle()
// appendToAFIle(' appending ... ')
// appendToAFIle(' appending ... ')
// readFromAFIle()