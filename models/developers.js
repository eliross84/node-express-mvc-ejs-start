


const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gitUsername: { type: String, required: true, unique: true },
    major: { type: String, required: true, default: 'Computer Science'},
    yearOfGrad: { type: Number, required: true, unique: true }
})

module.exports = mongoose.model('Developer', DeveloperSchema)