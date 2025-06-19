const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require("./db/config");
const Users = require("./db/Users");
const Product = require("./db/Product")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new Users(req.body);
  let result = await user.save();
  result = result.toObject(); 
  delete result.password; // To remove password when registering 
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await Users.findOne(req.body).select("-password"); // To remove password to not display when logging in
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user Found" });
    }
  } else {
    resp.send({ result: "Enter Proper Credentials..." });
  }

});

app.post("/addProduct",async (req,resp)=>{
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
})

app.get("/products", async (req,resp)=>{
  let products = await Product.find();
  if(products.length>0){
    resp.send(products);
  }else{
    resp.send({result:"No products Found !"});
  }
})

app.get("/", (req, resp) => {
  resp.send("App is running...");
});

app.listen(5000);
