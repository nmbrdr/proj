const express= require("express");
const path = require("path");
require("./db/conn");
const User=require("./models/registers");
const hbs = require("hbs");
const {registerPartials} = require("hbs");
const app = express();
const port = process.env.PORT || 3000;


// setting the path
const staticpath = path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
// console.log(path.join(__dirname,"../public"));



// middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
// app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use("/cs",express.static(path.join(__dirname,"../public/css")));
app.use("/img",express.static(path.join(__dirname,"../public/images")));
app.use("/page",express.static(path.join(__dirname,"../templates/views/")));
app.use(express.urlencoded({extended:false}));



// console.log(path.join(__dirname,"../templates/"))

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);
// app.use(express.static(staticpath));




// routing 
app.get("/",(req,res)=>{
    res.render("index");
})

// app.get("/about",(req,res)=>{
//     res.render("about");
// })


app.post("/",async(req,res)=>{
    try{
        const userData= new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(500).send(error)
    }
})




// server creation 
app.listen(port,()=>{
    console.log('connected hai')
});