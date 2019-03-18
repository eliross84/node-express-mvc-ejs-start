/** 
*  Product model
*  Describes the characteristics of each attribute in a product resource.
*
* @author Denise Case <dcase@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

//briar will change this

const ProductSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  productKey: { type: String, required: true, unique: true, default: 'product' },
  description: { type: String, required: false, default: 'description' },
  unitPrice: { type: Number, required: true, default: 9.99, min: 0, max: 100000 },
  stock: {type: Number, required: true, default: 0, min: 0, max: 100000}
  //add in an amount we have in store
})

module.exports = mongoose.model('Product', ProductSchema)
