
const mongoose = require('mongoose');
const dbconnect=  async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    // const ProductModel = mongoose.model("products",ProductSchema);
    // let data = new ProductModel({name:"m88", price:500})
    // let result =  await data.save();
    // console.log(result,"fwgt454g");
    // console.clear()
    console.log("Connection to Database is successfully")
}

module.exports=  dbconnect;