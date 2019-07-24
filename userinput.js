/* // //console.log(process);


// //Input & Output in node 

// // process.stdout.write("whats your name");  //similar to console.log("");

// // process.stdin.on('data',(name)=>{
// //     console.log("welcome",`${name}`);
// // })



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

// //   rl.close();
// });


// const readline=require('readline') // inporting module readline using require
// const r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });



// r1.question("What is your fullname",(name)=>{
//     r1.question("what is surname",(surname)=>
//     {
//         console.log(`your name is:${name} ${surname}`);
//     r1.close();
// })
// });


const readline=require('readline') // importing module readline using require
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const r2=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



//addition

r1.question("num1",(num1)=>{
    r1.question("num2",(num2)=>
    {
        console.log(parseInt(num1)+parseInt(num2));
        r1.close();
    })
})

//subtarction

r1.question("num1",(num1)=>{
    r1.question("num2",(num2)=>
    {
        console.log(parseInt(num1)-parseInt(num2));
        r1.close();
    })
})
 */
//division
const readline = require('readline');

const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
r1.question(" ",(num1)=>{
    r1.question(" ",(sign)=>
    {
        r1.question(" ",(num2)=>{
           switch(sign){
               case'+':
               console.log(`${parseInt(num1)+parseInt(num2)}`);
               break;
               case'-':
               console.log(`${parseInt(num1)-parseInt(num2)}`);
               break;
               case'*':
               console.log(`${parseInt(num1)*parseInt(num2)}`);
               break;
               case'/':
               console.log(`${parseInt(num1)/parseInt(num2)}`);
               break;
           }
           r1.close();
       })
        
    })
})











