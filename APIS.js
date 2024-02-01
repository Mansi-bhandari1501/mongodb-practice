// const express = require('express');
// const dbconnect =  require('./mongodb');
// const mongodb =  require('mongodb');
// const app = express();

// app.use(express.json())
// app.get('/', async (req,res)=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data);
//     res.send(data);
// });
// app.post('/', async (req,res)=>{
  
//     let data = await dbconnect()
//     let result = await data.insertOne(req.body);
//     res.send(result);
// });
// app.put('/', async (req,res)=>{
  
//     let data = await dbconnect()
//     let result = await data.updateOne(
//         {  name:req.body.name  },
//         {$set:req.body});
//     // console.log(req.body);
//     res.send(result);
// });
// app.delete('/:id', async (req,res)=>{
  
//     let data = await dbconnect()
//     let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
       
//     // console.log(req.body);
//     res.send(result);
// });

// app.listen(5000,()=>{
//     console.log('server is running');
// }); 