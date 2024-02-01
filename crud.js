
const dbconnect = require('./config/db_connection');
const ProductModel = require('./models/Products');

dbconnect();
// const ProductSchema =  new mongoose.Schema(
//     {
//         name:String,
//         price: Number
//     });
const saveData =  async ()=>{
    let data = new ProductModel({name:"m88", price:500})
    let result =  await data.save();
    console.log(result,"fwgt454g");
}
// saveData();
const updateInDB =async  () => {
    let data = await ProductModel.findOneAndUpdate(
        { name: "max pro " },
        {
            $set: { price: 550,name:'max pro 656' }
        },
        {new: true}
    )
    console.log(data,"dwfvr")
}
// updateInDB();
const findInDB =async  () => {
        let data = await ProductModel.find() 
        
        console.log(data,"dwfvr")
    }
    // deleteInDB();
    // findInDB();