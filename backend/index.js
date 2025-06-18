const express = require('express');
const cors = require("cors");
//const mongoose = require('mongoose');
require("./db/config");
const Users = require("./db/Users");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp)=>{
    let user = new Users(req.body);
    let result = await user.save();
    resp.send(result);
})

/* const connectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('product',productSchema);
    const data = await product.find();
    console.warn(data); 
}
connectDB(); */

app.get("/",(req,resp)=>{
    resp.send("App is running...")
});

app.listen(5000)