
import React from 'react'
// import {Link} from 'react-router-dom'
import {useState} from 'react'
import './style.css'

const AddProduct =()=> {

const [newProduct, setNewProduct] = useState({})

const {id, title, description, price, discountPercentage, rating, stock, brand, category} = newProduct;
  
console.log(newProduct)

 const handleChange =(e)=> {
   setNewProduct({
     ...newProduct,
     [e.target.name]: [e.target.value]
   })
   
 }

  const handleSubmit = async()=> {
    const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, title, description, price, discountPercentage, rating, stock, brand, category
  })
    })
   const result = await response.json()
    console.log(result)
  }

  return (
    <div className='input_product'>
     <h1>Add your products</h1>
      <input name='id' value={newProduct.id} type='text' placeholder="Enter product id" onChange={handleChange} />
      <br/>
      <br/>
      
      <input name='title' value={newProduct.title} type='text' placeholder="Enter product title" onChange={handleChange} />
      <br/>
      <br/>
      <input name='description' value={newProduct.description} type='text' placeholder="Enter product description" onChange={handleChange} />
      <br/>
      <br/>
  
      <input name='price' value={newProduct.price} type='text' placeholder="Enter product price" onChange={handleChange} />
      <br/>
      <br/>
      <input name='discountPercentage' value={newProduct.discountPercentage} type='text' placeholder="Enter product discountPercentage" onChange={handleChange} />
      <br/>
      <br/>
      <input name='rating' value={newProduct.rating}  type='text' placeholder="Enter product rating" onChange={handleChange} />
      <br/>
      <br/>
      <input name='stock' value= {newProduct.stock} type='text' placeholder="Enter product stock" onChange={handleChange} />
      <br/>
      <br/>
      <input name='brand' value={newProduct.brand}  type='text' placeholder="Enter product brand" onChange={handleChange} />
      <br/>
      <br/>
      <input name='category'value={newProduct.category} type='text' placeholder="Enter product category"  onChange={handleChange} />
      <br/>
      <br/>
       <p></p>
       <button onClick={handleSubmit}>
         ADD PRODUCT
        </button>
      </div>
    )
}
  

export default AddProduct;