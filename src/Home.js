import React,{useEffect} from 'react'
import axios from 'axios'
import Products from './CartComponent/Products';
import Cart from './CartComponent/Cart';
import {useDispatch} from "react-redux"


function Home() {
  const dispatch = useDispatch()

  const fetchProducts = async() => {
      const {data} = await axios.get("https://dummyjson.com/products");
      dispatch({type : "ADD_PRODUCTS" , payload : data.products})
      // console.log(data.products)
  }
  useEffect(() => {
      fetchProducts()
  },[])
return (
  <div style={{display : "flex"}}>
    <Products />
    <Cart />
  </div>
  )
}

export default Home
