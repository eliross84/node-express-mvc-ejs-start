const mongoose = require('mongoose')

//briar will change this

const UserSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true, unique: false, default: 'smith' },
  useraccountid: { type: String, required: true, default: 'AA001' },
  balance: { type: Number, required: true, default: 0.0, min: 0, max: 10000000 },
  state: {type: String, required: true, default: 'MO'},
  city:{type: String, required: true, default: 'Maryville'},
  zipcode: {type: String, required: true, default: 64468}
  //add in an amount we have in store
})

module.exports = mongoose.model('User', UserSchema)
