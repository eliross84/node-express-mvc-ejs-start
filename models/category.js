/** 
*  Product model
*  Describes the characteristics of each attribute in a product resource.
*
* @author Harshith Gudapati <s534886@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  categoryID: { type: Number, required: true },
  categoryType: { type: String, required: true },  
  categoryAmount: { type: Number, required: true, default: 0 } 
})

module.exports = mongoose.model('Category', ProductSchema)