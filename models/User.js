const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    IFID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password:{
        type: String
        
    },
    confirm:{
        type: String
        
    },
    photo:
    {
        type: Object
    },
    designation:
    {
        type: String,
        required: true,
    },
    department:
    {
        type: String,
        required: true
    },
    usertype:
    {
        type: String,
        
    }
});
module.exports = mongoose.model('user',userSchema);

