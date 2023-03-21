const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    saleId:{
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    qty: {
        type:Number,
        required:true
    },
    amount: {
        type:Number,
        required:true
    },
})

const sale = new mongoose.model("sales",userScema)

module.exports = sale;