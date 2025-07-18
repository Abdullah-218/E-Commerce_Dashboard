import React, { useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () => {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            getProductDetails();
        }
        // eslint-disable-next-line
    }, []);

    const updateProduct = async () => {
        console.warn(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: "PUT",
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
       });
       result= await result.json()
       console.warn(result);
       navigate('/')
    }

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    };

    return(
        <div className='product'>
            <h1>Update Product !</h1>

            <input
                className='inputBox'
                type="text"
                placeholder='Enter Product Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
           
            <input
                className='inputBox'
                type="text"
                placeholder='Enter Price of Product'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
           
            <input
                className='inputBox'
                type="text"
                placeholder='Category of Product'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                className='inputBox'
                type="text"
                placeholder='Enter Company Name'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
        
            <button 
               onClick={updateProduct} 
               className='appButton'>
                Update Product
            </button>

        </div>
    )
}

export default UpdateProduct;