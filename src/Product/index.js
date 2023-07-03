import React,{useState,useEffect}from "react";
import { Link} from 'react-router-dom'
import './style.css'

const Product = ()=>{

    const[products,setProduct] = useState([]);
    console.log(products)

   useEffect(()=>{
    (async()=>{
      await getProducts()
    })()
    getProducts()
   },[])

    const getProducts = async()=> {
         try{
          const response =  await fetch('https://dummyjson.com/products');
          const result = await response.json();
          setProduct (result.products)
         }
     
         catch(error){
          console.log(error.message)
         }
    }
    console.log({products});

      return(
        
        <div className="displayProducts">
            <Link to='/AddProduct'>
            <button>Add product</button>
            </Link>
          {products.map(item =>(
            <div className="products" key={item.id}>
             
            <img className="item" alt="" src ={item.images[1]}/>
            <p>{item.title}</p>
            <p>{item.price}$</p>
            <p>{item.discountPercentage}%</p>
            <Link to={`/product/${item.id}`}>
            <button className="detail">Details</button>
            </Link>
          
              </div>
          ))}
        </div>
      )
}

export default Product;
