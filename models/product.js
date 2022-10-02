const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    price:{
        type:Number,
        required: true,
        min: 0
    },
    category:{
        type:String,
        enum: ['fruit','vegetable','diary']
    }
})
productSchema.plugin(validator);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;