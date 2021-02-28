const mongoose = require("mongoose");
const validator = require("validator");

const userschema = mongoose.Schema({

    fname:{
        type:String,
        required:true

    },
    lname:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("invalid mail id")
            }
        }

    },
    Phone:{
        type:Number,
        required:true
    },
    comments:{
        type:String,
    }
})

// collection

const User= mongoose.model("User",userschema);
module.exports=User;