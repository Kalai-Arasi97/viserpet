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

// import dog01 from "../../../Asset/dog01.png"
import "./Content.css"
const Content = () => {
  return (
    <div>
      <div className='div01'>
        <div className='div01cont'>
          <div className='div011'>
            <ul className='list2'>
              <li>
                <img className='dog01img' src = {dog01}/>
                <p class="list2p">Dog Food</p>
              </li>
              <li>
                <img className='catimg' src = {cat}/>
                <p class="list2p">Cat</p>
              </li>
              <li>
                <img className='fishimg' src = {fish}/>
                <p class="list2p">Fish</p>
              </li>
              <li>
                <img className='toysimg' src = {toys}/>
                <p class="list2p">Pet Toy</p>
              </li>
              <li>
                <img className='parrotimg' src = {parrot}/>
                <p class="list2p">Parrot</p>
              </li>
              <li>
                <img className='rabbitimg' src = {rabbit}/>
                <p class="list2p">Rabbit</p>
              </li>
              <li>
                <img className='accessoriesimg' src = {accessories}/>
                <p class="list2p">Accessories</p>
              </li>
              <li>
                <img className='dog02img' src = {dog02}/>
                <p class="list2p">Small Pet</p>
              </li>
            </ul>
          </div>
          <div className='div01center'>

          </div>
          <div class="div012">
            <div class="div012cont">
              <p class="bestproduct">Best Product</p>
              <h1>DOG FOOD</h1>
              <p class="text012">Wusmod tempor incididu nt ut labore et dolore magna aliqua.</p>
              <button class="shopnow">SHOP NOW</button>
            </div>
            <div class="div012img">
              <img className='bannerimg' src = {bannerimg}/>
            </div>
          </div>
        </div>
      </div>

      <div class="div02">
            <div class="div02cont">
              <img className='offerimg' src = {offerimg}/>
              <img className='offer03img' src = {offer03img}/>
            </div>
        </div>
        <div class="div03">
            <div class="div03cont">
                <p class="special">Special products</p>
                <h2 class="trending">Trending Products</h2>
            </div>
        </div>
      </div>
  )
}

export default Content
