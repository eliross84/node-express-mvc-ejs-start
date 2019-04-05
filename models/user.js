const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true, unique: false, default: 'smith' },
  useraccountid: { type: String, required: true, default: 'AA001' },
  city: { type: String, required: true, default: 'Maryville'},
  state: { type: String, required: true, default: 'MO'},
  zipcode: {type: String, required: true, default: 64468}
})

module.exports = mongoose.model('User', UserSchema)
