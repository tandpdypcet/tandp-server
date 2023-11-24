const mongoose = require('mongoose');

const addStudPlacedSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },  
    company: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("addstudplaced", addStudPlacedSchema);