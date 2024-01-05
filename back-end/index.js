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
    // console.log(req.body.email);
    // let email = req.body.email;
    // if(email == await users.findOne(email)){
    //     res.send({result: "Invalid email address:: Please enter a valid email address"});
    // }else{
    let user = new users(req.body);
    user = await user.save();
    user = user.toObject();         // convert json into the object
    delete user.password;           // to delete the password for front end
    res.send(user);
    // }
})

app.post('/login', async (req, res) => {
    if(req.body.email && req.body.password){
        let user = await users.findOne(req.body).select("-password");
        if(user) res.send(user);
        else res.send({result: "No User found"})
    }
    else res.send({result: "No User found"});
   
})
app.listen(5000);