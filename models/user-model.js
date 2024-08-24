const mongoose = require("mongoose");

 
const userSchema = mongoose.Schema({
    fullName:{
        String,
        minLength: 3,
        trim: true,
    }, 
    email: String,
    password: String,
    card: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    contact: Number,
    picture: String,

});

module.exports = mongoose.model("user", userSchema);