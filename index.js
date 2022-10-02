const express = require('express');
const path = require('path');
const app = express();
const Product = require('./models/product')
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const DB = "mongodb+srv://numaan:21032002@cluster0.h0rjrno.mongodb.net/testfarms?retryWrites=true&w=majority"

// mongoose.connect('mongodb://localhost:27017/farmStand')
// .then(()=>{
//     console.log("Mongo Connected");
// })
// .catch(err => {
//     console.log("ERROR BY MONGO");
//     console.log(err)
// })

//mongoose Connetion

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

// MiddleWare
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Routes

app.get('/',(req,res)=>{
    res.redirect('/products')
})
app.get('/products',async (req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.render('products/index',{products})
})


app.post('/products', async (req,res)=>{
    const product = new Product(req.body);
    await product.save()
    // .then(()=>{
    //     res.redirect('/products');
    // })
    // .catch(()=>{
    //     res.redirect('/products/error')
    // })
    // res.send('Your Product is Added');
    res.redirect('/products');
})

app.get('/products/new', (req,res)=>{
    res.render('products/new');
})

app.get('/products/:id', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show',{product});
})

app.get('/products/:id/edit', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{product}); 
})


app.put('/products/:id', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body, {runValidators:true});
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})


app.listen(port,()=>{
    console.log(`Listening at ${port}`);
})