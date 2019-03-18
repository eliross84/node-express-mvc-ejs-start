


const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({
    _id: {},
    name: {},
    email: {},
    gitUsername: {},
    major: {},
    yearOfGrad: {}
})

module.exports = mongoose.model('Developer', DeveloperSchema)