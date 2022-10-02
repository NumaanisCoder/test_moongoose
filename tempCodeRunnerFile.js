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