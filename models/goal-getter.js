const mongoose = require('mongoose')

const goalGetterSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password : {
            type: String, 
            required: true,
        },
        token: String,
    },
    {
        timestamps: true,
        toJSON: {
            transform: (_doc, goalGetter) => {
                delete goalGetter.password
                return goalGetter
            },
        },
    }
)

module.exports = mongoose.model('GoalGetter', goalGetterSchema)