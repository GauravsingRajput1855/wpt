const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors")


app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Gaurav@1855",
    database:"curd"
})

app.get("/",(req,res)=>{
    //res.json("hello from backend");
    const sql="select *from student";
    db.query(sql,(err,data)=>{
        if(err)
            return app.json("error");
        else
        return app.json(data);
    })
    
    
})


app.listen(3000,()=>{
    console.log("listning")
})