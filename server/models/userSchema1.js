const mongoose = require('mongoose');

const userScema1 = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:Number,
        required:true
    },
})
const register = new mongoose.model("register",userScema1)

module.exports = register;