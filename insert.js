// const db_connection = require('./mongodb');

// const main = async ()=>{
//     let data = await db_connection();
//     data  = await data.find().toArray();
//     console.log(data);
// }

// // main();
// const insert = async () => {
//     const db = await db_connection();
//     const result = await db.insertMany(
//         [{ name: 'redmi note 6', price: 500 },
//         { name: 'redmi note 7', price: 600 }]
//     );
//     console.log(result);
// }
// // if(result.acknowleged) {
// //     console.log("data inserted")
// // }
// // insert();
// const update = async () => {
//     const db = await db_connection();
//     const result = await db.updateOne(
//         {name:"m 20"},
//         {$set:{price:1000}
//     }
//     );
//     console.log(result);
// }
// const deleteData = async () => {
//     const db = await db_connection();
//     const result = await db.deleteMany(
//         { name: 'redmi note 6' }
     
//     );
//     console.log(result);
// }
// deleteData();

