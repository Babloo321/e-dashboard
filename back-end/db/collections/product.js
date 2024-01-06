require('../config');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: String,
    name: String,
    price: String,
    category: String,
    company: String
});
module.exports = mongoose.model("products", productSchema);