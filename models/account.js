/**
Account MOdel
Describes the characteristic of an acount (balance, number, routing number, etc)
@author Jacob Briar Hughes <s527770@nwmissouri.edu>
*/
const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    _id: {type: Number, required: true, unique: true},
    accountNum: {type: Number, required: true},
    balance: {type: Number, required: true},
    routingNum: {type: Number, required: true, unique: true}
})
module.exports = mongoose.model('Account', OrderSchema)