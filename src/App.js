import React from 'react'
import Product from './components/product'
import Cart from './components/Cart'
import { useState,useEffect } from 'react'
import data from './components/data'



const App = () => {
  const [basket, setBasket] = useState([]);

useEffect(() => {
  
console.log(basket)

}, [basket])
  



  return (
    <div className="container">
      <div className="row">
        {data.map(product =>
          <Product key={product.id} product={product} basket={basket} setBasket={setBasket}/>
        )}
      </div>


      <Cart basket={basket}/>
    </div>
  )
}

export default App
