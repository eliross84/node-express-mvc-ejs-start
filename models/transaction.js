/** 
*  transaction model
*  Describes the characteristics of each attribute in an transaction resource.
*
* @author Revanth Davuluri <S534917@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({

  
    transactionID: { type: Number, required: true, unique: true, default: 555 }, 
    amount: { type: Number, required: true, default: 0}, 
    transactionDate: { type: Date, required: true,default:Date.now()},
    postedDate:{type:Date,required:true,default:Date.now()},
    transactionType: { type: String, enum: ['NA', 'Deposit', 'Withdraw', 'Purchase'], required: true, default: 'NA',unique:true },
    cardNumber: {type: String, required: true, default: '0000 0000 0000 0000'},
    transactionStatus:{type: boolean, required: true,default:false} 
     
    
})

module.exports = mongoose.model('Transaction', TransactionSchema)