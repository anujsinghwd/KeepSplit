let mongoose = require('mongoose');
let validator = require('validator');

let usersSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isAlpha(value)
        }
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
        validate: (value) => {
            return validator.isAlphanumeric(value)
        }
    }
});

module.exports = mongoose.model('User', usersSchema);