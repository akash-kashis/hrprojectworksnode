var mongoose = require('mongoose');
var Schema = mongoose.Schema;
Notification = new Schema({
     message : String,
     'photo':Object,
     'IFID' : Number,
     messageType: String
    
 });
 module.exports = mongoose.model('Notifications', Notification);


