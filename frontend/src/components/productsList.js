import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';

const ProductList = () =>{
    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        getProducts();
    },[])


    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }
    console.warn("products",products);


    const deleteProduct= async (id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:"DELETE",
        headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
    });

    result = await result.json()
    if(result){
        alert("Record is deleted ! ");
        getProducts();
    }
};

const searchHandle = async (event) =>{
    let key = event.target.value
    if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
    });
    result = await result.json();
    if(result){
        setProducts(result);
    }
  }else{
    getProducts();
  }
}
    return (
        <div className="product-list">
            <h3>Product List !</h3>
            <input className="searchProd" type = "text" placeholder="searchProduct" 
             onChange = {searchHandle}
            />
            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? 
                products.map((item,index)=>
                <ul key = {item._id}>
                  <li>{index+1}</li>
                  <li>{item.name}</li>
                  <li>{item.price}</li>
                  <li>{item.category}</li>
                  <li>{item.company}</li>
                  <li>
                    <button onClick = {()=> deleteProduct(item._id)}>Delete</button>
                    <Link to={"/update/"+item._id}>Update</Link>
                  </li>
                </ul>
                )
                :
                <h1> No Result Found ! </h1>
            }

        </div>
    )
}

export default ProductList;