const express=require('express')
const fs=require('fs')
const app=express()

const users=[]
app.use(express.urlencoded({extended:true}))

app.get('/users',(req,res)=>{
    res.sendFile('/home/abhishek/Desktop/express server/src/create.html');
})

app.post('/users',(req,res)=>{
   console.log(req.body);
   req.body.id=users.length+1;
   users.push(req.body);
    fs.writeFile('../data/users.json',JSON.stringify(users),(err)={
        if(err){
            cosnole.log(err);
            res.json({
                message:"user registration failed",
            })
        } else{
               console.log("db updated");
               res.json({
                message:"user registration failed",
            })
        }

        }
        }

    })
   res.send("form gone");
   console.log(users)
})

app.listen(3000)
console.log("server started at 3000");