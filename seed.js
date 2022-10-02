const Product = require('./models/product')
const mongoose = require('mongoose');
const DB = "mongodb+srv://numaan:21032002@cluster0.h0rjrno.mongodb.net/testfarms?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connection Successfull");
})
.catch(err =>{
    console.log(err);
})
// const p = new Product({
//     name: "Ruby Grapefruit",
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(res => console.log(res))
//         .catch(err => console.log(err));

Product.insertMany([
    {name: "Apple Daseri", price:9.99, category:'fruit'},
    {name: "Langda Aam", price:10.99, category:'fruit'},
    {name: "Ras Malai", price:15.99, category:'diary'},
    {name: "Kashmiri dhanya", price:19.99, category:'vegetable'}
]).then((res)=>{
    console.log("Inserted...")
})
.catch(err => {
    console.log(err);
})