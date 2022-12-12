const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: [true, "Company name is required"],
        maxlength: 50,
    },
    position:{
        type: String,
        required: [true, "position is required"],
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "plaese provide an user"]
    }
}, {timestamps: true,})

module.exports = mongoose.model("Job", jobSchema)