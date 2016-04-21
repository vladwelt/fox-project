var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var capture = new Schema({
    name : String,
    parameters : [{
        name : String,
        value : Number,
        unit : String,
    }],
    date : {
        type: Date,
        required : false,
        default : Date.now
    },
});

module.exports = mongoose.model('Capture',capture);
