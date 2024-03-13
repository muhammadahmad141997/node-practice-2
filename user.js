const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin');
const userschema=new mongoose.Schema({
    name:String,
    age:Number,
    job:String
});

module.exports=mongoose.model('users',userschema);