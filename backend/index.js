const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require("./db/config");
const Users = require("./db/Users");
const Product = require("./db/Product")

const JWT = require('jsonwebtoken')
const JWTkey = 'e-comm';

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new Users(req.body);
  let result = await user.save();
  result = result.toObject(); 
  delete result.password; // To remove password when registering 
  JWT.sign({result},JWTkey,{expiresIn:"2h"},(err,token)=>{
        if(err){
          resp.send({ result: "Something went wrong, Please try again after some time !" });
        }
        resp.send({result,auth:token})
      })
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await Users.findOne(req.body).select("-password"); // To remove password to not display when logging in
    
    if (user) {
      JWT.sign({user},JWTkey,{expiresIn:"2h"},(err,token)=>{
        if(err){
          resp.send({ result: "Something went wrong, Please try again after some time !" });
        }
        resp.send({user,auth:token})
      })

    } else {
      resp.send({ result: "No user Found" });
    }
  } else {
    resp.send({ result: "Enter Proper Credentials..." });
  }

});

app.post("/addProduct", verifyToken, async (req,resp)=>{
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
})

app.get("/products",verifyToken, async (req,resp)=>{
  let products = await Product.find();
  if(products.length>0){
    resp.send(products);
  }else{
    resp.send({result:"No products Found !"});
  }
})

app.delete("/product/:id", verifyToken, async (req,resp)=>{
  const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.get("/product/:id", verifyToken, async (req,resp)=>{
  let result = await Product.findOne({_id:req.params.id});
  if(result){
    resp.send(result);
  } else {
    resp.send({ result: "No record Found!" });
  }
})

app.put("/product/:id", verifyToken, async (req,resp)=>{
  let result = await Product.updateOne(
    {_id:req.params.id},
    {
      $set: req.body
    }
  )
  resp.send(result);
})

app.get("/search/:key", verifyToken , async (req, resp) => {
  let result = await Product.find({
    "$or": [
      { name: { $regex: req.params.key, $options: "i" } },
      { company: { $regex: req.params.key, $options: "i" } },
      { category: { $regex: req.params.key, $options: "i" } }
    ]
  });
  resp.send(result);
});

function verifyToken(req,resp,next){
  let token = req.headers['authorization'];
  if(token){
    token = token.split(' ')[1];
    console.log("MiddleWare Called : ",token);

    JWT.verify(token,JWTkey, (err, valid)=>{
      if(err){
        resp.status(401).send({result:"Please Provide valid Token"})
      }else{
        next();
      }
    })

  }else{
    resp.status(403).send({result: "Please add token with header"})
  }

}

app.get("/", (req, resp) => {
  resp.send("App is running...");

});

app.listen(5000);
