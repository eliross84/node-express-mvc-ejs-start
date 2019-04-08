const mongoose = require('mongoose')

const TranscationSchema = new mongoose.Schema({

_id: {
type: Number,
required: true
},
name: {
type: String,
required: true,
unique: false // change this
},
accountNumber: {
type: String,
required: true
},
transacation_number:{

type:String,
required:true,
},
transacation_type:{

type:String,
required:true,
},
transaction_date:{

type:String,
required:true,
}
})
module.exports = mongoose.model('Transcation', TranscationSchema); 