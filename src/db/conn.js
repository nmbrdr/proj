const mongoose = require("mongoose");

// creating a database 
mongoose.connect('mongodb://localhost:27017/coaching',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connectin successful");
}).catch((error)=>{
    console.log(error);
})