import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {

    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    
    const productHandler = async() => {
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        // const id = userid._id;
        let pro =await fetch('http://localhost:5000/add', {
            method: "POST",
            body: JSON.stringify({userId,name, price, category,company}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        pro = await pro.json();
        // pro = await pro.save()
        localStorage.setItem("product", JSON.stringify(pro));
        console.log(pro);
        // if(pro) navigate('/');
        setName('');
        setPrice('');
        setCompany('');
        setCategory('');
    }
    return(
        <div className='product'>
            <h1>Add a product</h1>

            <input
            className='inputBox' 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type='text'
            placeholder='Enter Product Name'
            />

            <input 
            className='inputBox'
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            type='text'
            placeholder='Enter Product Price'
            />

            <input
            className='inputBox' 
            value={company}
            onChange={(e)=> setCompany(e.target.value)}
            type='text'
            placeholder='Enter Company Name'
            />

            <input
            className='inputBox' 
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            type='text'
            placeholder='Enter Category'
            />

            <button
            onClick={productHandler}
            className='btn'
            >Add product</button>
        </div>
    )
}
export default AddProduct;