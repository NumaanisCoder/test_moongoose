const Product = require('./models/product')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("Mongo Connected");
})
.catch(err => {
    console.log("ERROR BY MONGO");
    console.log(err)
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