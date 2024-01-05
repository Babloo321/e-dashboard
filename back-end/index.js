const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('./db/config');
const users = require('./db/collections/users');
const app = express();
app.use(express.json())
app.use(cors());                // used as middleware
// const connectDb = async () => {
//     mongoose.connect("mongodb://localhost:27017/e-commerce");
//     const productSchema = new mongoose.Schema({
//         name: String,
//         price: String,
//         brand: String,
//         category: String
//     })

//     const products = mongoose.model("users", productSchema);
//     const data = await products.find();
//     console.log(data);
// }
// connectDb();

app.post('/register', async (req, res) => {
    let user = new users(req.body);
    user = await user.save();
    res.send(req.body);
})
app.listen(5000);