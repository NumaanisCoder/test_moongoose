const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type:String,
        required: true,
        min: 0
    },
    category:{
        type:String,
        enum: ['fruit','vegetable','diary','Mobile','Laptop','Shoes']
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;