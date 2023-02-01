const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stepsSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        details: {
                type: String,
                required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = stepsSchema