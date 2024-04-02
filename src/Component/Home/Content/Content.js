import React from 'react'
import dog01 from "../../../Asset/dog01.png"
import cat from "../../../Asset/cat.png"
import fish from "../../../Asset/fish.png"
import toys from "../../../Asset/toys.png"
import parrot from "../../../Asset/parrot.png"
import rabbit from "../../../Asset/rabbit.png"
import accessories from "../../../Asset/accessories.png"
import dog02 from "../../../Asset/dog02.png"
import offerimg from "../../../Asset/offerimg.png"
import offer03img from "../../../Asset/offerimg03.png"
import bannerimg from "../../../Asset/bannerimg.png"
import "./Content.css"
const Content = () => {
  return (
    <div>
      <div className='div01'>
        <div className='div01cont'>
          <div className='div011'>
            <ul className='list2'>
              <li>
                <img className='dog01img' src = {dog01} alt=''/>
                <p className="list2p">Dog Food</p>
              </li>
              <li>
                <img className='catimg' src = {cat} alt=''/>
                <p className="list2p">Cat</p>
              </li>
              <li>
                <img className='fishimg' src = {fish} alt=''/>
                <p className="list2p">Fish</p>
              </li>
              <li>
                <img className='toysimg' src = {toys} alt=''/>
                <p className="list2p">Pet Toy</p>
              </li>
              <li>
                <img className='parrotimg' src = {parrot} alt=''/>
                <p className="list2p">Parrot</p>
              </li>
              <li>
                <img className='rabbitimg' src = {rabbit} alt=''/>
                <p className="list2p">Rabbit</p>
              </li>
              <li>
                <img className='accessoriesimg' src = {accessories} alt=''/>
                <p className="list2p">Accessories</p>
              </li>
              <li>
                <img className='dog02img' src = {dog02} alt=''/>
                <p className="list2p">Small Pet</p>
              </li>
            </ul>
          </div>
          <div className='div01center'>

          </div>
          <div className="div012">
            <div className="div012cont">
              <p className="bestproduct">Best Product</p>
              <h1>DOG FOOD</h1>
              <p className="text012">Wusmod tempor incididu nt ut labore et dolore magna aliqua.</p>
              <button className="shopnow">SHOP NOW</button>
            </div>
            <div className="div012img">
              <img className='bannerimg' src = {bannerimg} alt=''/>
            </div>
          </div>
        </div>
      </div>

      <div className="div02">
            <div className="div02cont">
              <img className='offerimg' src = {offerimg} alt=''/>
              <img className='offer03img' src = {offer03img} alt=''/>
            </div>
        </div>
        <div className="div03">
            <div className="div03cont">
                <p className="special">Special products</p>
                <h2 className="trending">Trending Products</h2>
            </div>
        </div>
      </div>
  )
}

export default Content
