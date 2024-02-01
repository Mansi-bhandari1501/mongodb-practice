const express = require('express');
const dbconnect=require('./config/db_connection');
const Product = require('./models/Products');

const app = express();
dbconnect();
app.use(express.json());
app.post ("/",async (req,res)=>{
    let data = await new Product(req.body);
    console.log(req.body);
    let result =  data.save();
    res.send("done");
});

app.listen(8080,()=>{
    console.log("server is connected")
})