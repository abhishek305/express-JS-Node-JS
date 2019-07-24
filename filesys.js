// read content of a file

 
// const data=fs.readFileSync('filesys.js','utf-8');
// console.log(__filename);
// console.log(data);

//write into a file

// let someText="this is file content";
// fs.writeFileSync('./random.txt',someText);

// asychronus calls
// const fs = require('fs')
// //let appendtext='  this will be appended';
// fs.readFile('./random1.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);}
//     else{
//         fs.writeFile('./random.txt',data,(err)=>{
//             if(err){
//                 console.log("error occured");
                
//             }else{
//                 console.log('data written success');
//                 console.log(data);
        
//     }
// })


//     }
// })

// const fs = require('fs')
// const cse=fs.readFileSync('./cse.json','utf-8');
// //console.log(__filename);
// console.log(data);


//////////simple file reading

const fs = require('fs')
const raw=fs.readFileSync('./raw.json','utf-8');

//console.log(__filename);
//console.log(JSON.parse(raw));
//console.log(data);




// let person={
//     name:'abhishek',
//     surname:'ezhava'
// }
// console.log(person);
// console.log(JSON.stringify(person)); //convert json obj in string