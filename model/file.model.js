const { fileLoader } = require('ejs');
const mongoose=require('mongoose');
const schema = mongoose.Schema({ title:String , file:String})
module.exports=mongoose.model('file',schema)