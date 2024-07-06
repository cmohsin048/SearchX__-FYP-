const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  url: { type: String, required: true },
  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  product_id: { type: String, required: true },
  sku: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  Brand: { type: String, required: true },
  delivery_fee: { type: String, required: true },
  Total_sales: { type: Number, required: true },
  Rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  Thirty_day_sales: { type: Number, required: true },
}, { collection: 'product_data' });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

