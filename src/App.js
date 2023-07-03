// import logo from './logo.svg';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from './Login';
import Product from './Product';
import SingleProduct from './SingleProduct'
import AddProduct from "./AddProduct";


function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/product"  element={<Product />} />
      <Route path="/product/:id"  element={<SingleProduct/>}/>
      <Route path="/AddProduct"  element={<AddProduct/>}/>
      </Routes>
      </Router>
      {/* <Login/>
      <Product/> */}
  
    </div>
  );
}

export default App;
