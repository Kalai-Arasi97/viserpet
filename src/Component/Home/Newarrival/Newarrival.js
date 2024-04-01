import React from 'react'
import "./Newarrival.css"
import Card from '../../Reusable/Card/Card'
import "./Newarrival.css"
import product04 from "../../../Asset/product04.png"
import product02 from "../../../Asset/product02.png"
import product08 from "../../../Asset/product08.png"
import product09 from "../../../Asset/product09.png"
import newofferimg from "../../../Asset/new-offer-img.png"
import axios from 'axios'
const Newarrival = () => {
  // const handleAddToCart = (proimg, proname, price, strike, cart) => {
  //   axios.post('http://localhost:3002/newarrivals', {proimg, proname, price, strike, cart})
  //   .then(response => {
  //     console.log(response.data);
  //     alert('Item added to cart successfully');
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     alert('Error adding item to cart');
  //   })
  // }
  return (
    <div>
    <div className='carddiv1'>
      <div className='carddiv2'>
      <Card
      proimg = {product04}
      proname = "Nekko Kitten Pouch"
      price ="$180"
      strike = "$220"
      cart = "Add to Cart"
      // cart = {() => handleAddToCart(product04, "Nekko Kitten Pouch",180,220,"Add To Cart")}
      />
      <Card
      proimg = {product02}
      proname = "Brit Premium"
      price ="$280"
      strike = "$330"
      cart = "Add to Cart"
      // cart = {() => handleAddToCart(product02, "Brit Premium",280,330,"Add To Cart")}
      />
      <Card
      proimg = {product08}
      proname = "Moderna Trendy Story"
      price ="$360"
      strike = "$490"
      cart = "Add to Cart"
      // cart = {() => handleAddToCart(product08, "Moderna Trendy Story",360,490,"Add To Cart")}
      />
      <Card
      proimg = {product09}
      proname = "Naughty Cat Bentonite"
      price ="$520"
      strike = "$620"
      cart = "Add to Cart"
      // cart = {() => handleAddToCart(product09, "Naughty Cat Bentonite",520,620,"Add To Cart")}
      />

    </div>
    </div>
    
    <div class="div10">
      <img className='newofferimg' src = {newofferimg}/>
    </div>

    </div>
    
  )
}

export default Newarrival
