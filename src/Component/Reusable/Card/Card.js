import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='trend'>
      <img className = "productimg" src={props.proimg} alt=''/>
      <p className='productname'>{props.proname}</p>   
      <p className='new'>{props.price}
        <span className='old'>{props.strike}</span>
      </p>
      <button className='cart'>{props.cart}</button>
    </div>  
  )
}

export default Card
