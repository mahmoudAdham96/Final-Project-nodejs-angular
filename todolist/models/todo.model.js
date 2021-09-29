const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:true
    },
    createdBy:{
        id:{
            type: String,
            required:true
        },
        name:{
            type: String,
            required:true
        }

    },
     createdAt:{
        type:Date,
        default:Date.now
    }
})


const Todo = mongoose.model('todos',todoSchema)

module.exports = {Todo}