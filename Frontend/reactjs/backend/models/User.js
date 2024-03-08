const mongoose = require("mongoose");

const { Shema } =mongoose

const Userschema = new Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:date.now()
    }
})

module.exports = mongoose.model('user',Userschema)