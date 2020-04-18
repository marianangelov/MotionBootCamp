const mongoose = require('mongoose');

const gridSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    job_title: String,
    department: String,
});


module.exports = mongoose.model('grid', gridSchema);