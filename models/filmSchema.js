const mongoose = require("mongoose");
const { type } = require("os");

const fileSchema = new mongoose.Schema({
    director:
    {
        type: String,
        required: true
    },
    ticket_price:
    {
        type: Number,
        required: true,
        default: 100
    },
    file_name:
    {
        type: String,
        required: true
    },
    cast: {
        type: [String],
        default: []
    },
    category:
    {
        type: String,
        enum: ['Action', 'Horror', 'Adventure', 'Drama','Romance','Comedy'],
        required: true
    },
    rating:
    {
        type:Number,
        min:0,
        max:10,
        default:0
    },
    release:{
        type:Date,
        default: Date.now // Automatically set the current date   
    }
});

module.exports = mongoose.model('Movie', fileSchema);