const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    a1: {
        type: String,
        required: true
    },
    a2: {
        type: String,
        required: true
    },
    a3: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("announcement", announcementSchema);