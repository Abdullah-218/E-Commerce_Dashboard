import React from 'react'

const AddProduct = () => {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error,setError] = React.useState(false);

    const addProduct = async () => {

        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }

        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'));
        console.warn(userId._id);
        let result = await fetch('http://localhost:5000/addProduct',{
            method: "POST",
            body: JSON.stringify({name,price,category,company}),
            headers: {
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }


    return(
        <div className='product'>
            <h1>Add Product !</h1>

            <input
                className='inputBox'
                type="text"
                placeholder='Enter Product Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className='invalidSpan'>Enter Valid Name</span>}

            <input
                className='inputBox'
                type="text"
                placeholder='Enter Price of Product'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <span className='invalidSpan'>Enter Valid Price</span>}

            <input
                className='inputBox'
                type="text"
                placeholder='Category of Product'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <span className='invalidSpan'>Enter Valid Category</span>}

            <input
                className='inputBox'
                type="text"
                placeholder='Enter Company Name'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <span className='invalidSpan'>Enter Valid Company </span>}

            <button 
               onClick={addProduct} 
               className='appButton'>
                Add Product
            </button>

        </div>
    )
}

export default AddProduct;