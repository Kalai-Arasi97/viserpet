import React from 'react'
import Card from '../../Reusable/Card/Card'
import "./Trending.css"
import product09 from "../../../Asset/product09.png"
import product02 from "../../../Asset/product02.png"
import product03 from "../../../Asset/product03.png"
import product04 from "../../../Asset/product04.png"
import product05 from "../../../Asset/product05.png"
import product06 from "../../../Asset/product06.png"
import product07 from "../../../Asset/product07.png"
import product08 from "../../../Asset/product08.png"
const Trending = () => {
  
  return (
    <div className='carddiv1'>
        <div className='carddiv2'>
        <Card
        proimg = {product09}
        proname = "Coco Kat Kitten Milk"
        price ="$200"
        strike = "$180"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product02}
        proname = "Moderna Scoop & sift"
        price ="$310"
        strike = "$360"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product03}
        proname = "BonaCibo Kitten Pouch"
        price ="$180"
        strike = "$200"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product04}
        proname = "Oropharma"
        price ="$150"
        strike = "$300"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product05}
        proname = "Coco Kat Kitten Milk"
        price ="$280"
        strike = "$290"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product06}
        proname = "Cat Food Chicke"
        price ="$480"
        strike = "$490"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product07}
        proname = "Naughty Cat Bentonite"
        price ="$630"
        strike = "$760"
        cart = "Add To Cart"
        />
        <Card
        proimg = {product08}
        proname = "Moderna Trendy story"
        price ="$520"
        strike = "$620"
        cart = "Add To Cart"
        />
        </div>
    </div>
  )
}

export default Trending
