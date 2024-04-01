import React from 'react'
import arrival01 from "../../../Asset/arrival01.png"
import arrival02 from "../../../Asset/arrival02.png"
import arrival03 from "../../../Asset/arrival03.png"
import arrival04 from "../../../Asset/arrival04.png"
import sideimg from "../../../Asset/sideimg.png"
import product08 from "../../../Asset/product08.png"
import product03 from "../../../Asset/product03.png"
import tp02 from "../../../Asset/tp02.png"
import product01 from "../../../Asset/product01.png"
import product05 from "../../../Asset/product05.png"
import fp04 from "../../../Asset/fp04.png"
// import product03 from '../../../Asset/product03.png'

import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "./ProductContent.css"
const ProductContent = () => {
  return (
    <div>
              <div class="productdivmaincontent">
            <div class="productdivleftright">
                <div class="productdivleft">
                    <div class="productdivcategorycont">
                        <div class="productdivcategory">
                            <p class="productlefthead">Category</p>
                            <p class="productline"></p>
                            <div class="productcheck1">
                                <input type="checkbox" id="categ1" name="categ1" value="Pets"/>
                                <label for="categ1"> Cat Food</label>
                            </div>
                            <div class="productcheck2">
                                <input type="checkbox" id="categ2" name="categ2" value="Pets"/>
                                <label for="categ2"> Accessories</label>
                            </div>
                            <div class="productcheck3">
                                <input type="checkbox" id="categ3" name="categ3" value="Pets"/>
                                <label for="categ3"> Dog Food</label>
                            </div>
                            <div class="productcheck4">
                                <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                                <label for="categ1"> Small Animal</label>
                            </div>
                        </div>
                    </div>
                    <div class="productfilter">
                        <p class="productlefthead">Filter by Price</p>
                        <p class="productline"></p>
                        <p class="productpricerange">Price Range: $0 - $100</p>
                        <button class="productfilterbtn">Filter</button>
                    </div>
                    <div class="productdivcolor">
                        <p class="productlefthead">Color</p>
                        <p class="productline"></p>
                        <div class="productcheck1">
                            <input type="checkbox" id="categ1" name="categ1" value="Pets"/>
                            <label for="categ1"> Red (250)</label>
                        </div>
                        <div class="productcheck2">
                            <input type="checkbox" id="categ2" name="categ2" value="Pets"/>
                            <label for="categ2"> Green (85)</label>
                        </div>
                        <div class="productcheck3">
                            <input type="checkbox" id="categ3" name="categ3" value="Pets"/>
                            <label for="categ3"> Violet (10)</label>
                        </div>
                        <div class="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Blue (29)</label>
                        </div>
                        <div class="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Black (258)</label>
                        </div>
                    </div>
                    <div class="productdivbestseller">
                        <p class="productlefthead">Best Seller</p>
                        <p class="productline"></p> 
                        <div class="productdivbestseller01">
                            <div class="productdivbsimg">
                                <img  src = {arrival02}/>

                                {/* <img src="../Assets/Img/arrival-two02.png" alt=""> */}
                            </div>
                            <div class="productdivbstxt">
                                <p class="productdivbstxtblk">Impulse Duffle</p>
                                <p class="productdivbstxtblk">
                                    $210
                                    <span class="productdivbstxtbrown"> $150</span>
                                </p>
                            </div>
                        </div>
                        <div class="productdivbestseller02">
                            <div class="productdivbsimg">
                            <img  src = {product08}/>
                                
                                {/* <img src="../Assets/Img/product08.png" alt=""> */}
                            </div>
                            <div class="productdivbstxt">
                                <p class="productdivbstxtblk">Driven Backpack</p>
                                <p class="productdivbstxtblk">
                                    $210
                                    <span class="productdivbstxtbrown"> $150</span>
                                </p>
                            </div>
                        </div> 
                        <div class="productdivbestseller03">
                            <div class="productdivbsimg">
                            <img  src = {arrival02}/>

                                {/* <img src="../Assets/Img/arrival-two02.png" alt=""> */}
                            </div>
                            <div class="productdivbstxt">
                                <p class="productdivbstxtblk">Affirm cat food</p>
                                <p class="productdivbstxtblk">
                                    $210
                                    <span class="productdivbstxtbrown"> $150</span>
                                </p>
                            </div>
                        </div>                  
                    </div>
                    <div class="productdivbrand">
                        <p class="productlefthead">Brand</p>
                        <p class="productline"></p>
                        <div class="productcheck1">
                            <input type="checkbox" id="categ1" name="categ1" value="Pets/"/>
                            <label for="categ1"> Red (250)</label>
                        </div>
                        <div class="productcheck2">
                            <input type="checkbox" id="categ2" name="categ2" value="Pets"/>
                            <label for="categ2"> Petclub (09)</label>
                        </div>
                        <div class="productcheck3">
                            <input type="checkbox" id="categ3" name="categ3" value="Pets"/>
                            <label for="categ3"> Brothers (9)</label>
                        </div>
                        <div class="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Cat (3)</label>
                        </div>
                        <div class="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Pet Point (66)</label>
                        </div>
                    </div>
                    <div class="productdivleftimg">
                        <div class="productblackfriday">
                        <img  src = {sideimg}/>

                            {/* <img src="../Assets/Img/side-img.png" alt=""> */}
                        </div>
                    </div>
                </div>
                <div class="productdivright">
                    <a href="../index.html">
                        <div class="productcoco">
                        <img className='productproimg' src = {product01}/>

                            {/* <img class="proimg" src="../Assets/Img/product01.png" alt=""> */}
                            <p class="productproname">Coco Kat Kitten Milk</p>
                            <div class="productdivprostar">
                                <FaStar/>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$200</p>
                                <p class="productprice">$180</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/about.html">
                        <div class="productcoco">
                        <img className='productproimg' src = {tp02}/>

                            {/* <img class="proimg" src="../Assets/Img/tp02.png" alt=""> */}
                            <p class="productproname">Kat Kitten Milk</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$360</p>
                                <p class="productprice">$230</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/blog.html">
                        <div class="productbonacibo">
                        <img className='productproimg' src = {product03}/>

                            {/* <img class="proimg" src="../Assets/Img/product03.png" alt=""> */}
                            <p class="productproname">BonaCibo Kitten Pouch</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$360</p>
                                <p class="productprice">$230</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/contact.html">
                        <div class="productnaughty">
                        <img className='productproimg1' src = {arrival04}/>

                            {/* <img class="proimg1" src="../Assets/Img/arrival-two04.png" alt=""> */}
                            <p class="productproname">Naughty Cat Bentonite</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$360</p>
                                <p class="productprice">$230</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/product.html">
                        <div class="productmoderna">
                        <img className='productproimg' src = {arrival03}/>

                            {/* <img class="proimg" src="../Assets/Img/arrival-two03.png" alt=""> */}
                            <p class="productproname">Moderna Trendy Story</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar/>
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$420</p>
                                <p class="productprice">$330</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../index.html">
                        <div class="productmoderna">
                        <img className='productproimg' src = {product05}/>

                            {/* <img class="proimg" src="../Assets/Img/product05.png" alt=""> */}
                            <p class="productproname">Moderna Scoop & Sift</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$200</p>
                                <p class="productprice">$180</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="./about.html">
                        <div class="productdrools">
                        <img className='productproimg' src = {product08}/>

                            {/* <img class="proimg" src="../Assets/Img/product08.png" alt=""> */}
                            <p class="productproname">Drools Calcium</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$200</p>
                                <p class="productprice">$180</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="./blog.html">
                        <div class="productmoderna">
                        <img className='productproimg1' src = {arrival01}/>

                            {/* <img class="proimg1" src="../Assets/Img/arrival-two01.png" alt=""> */}
                            <p class="productproname">Moderna Trendy</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$360</p>
                                <p class="productprice">$230</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="./product.html">
                        <div class="productmeat">
                        <img className='productproimg1'  src = {fp04}/>

                            {/* <img class="proimg1" src="../Assets/Img/fp04.png" alt=""> */}
                            <p class="productproname">Meat Dog Can</p>
                            <div class="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <div class="productdivproprice">
                                <p class="productstrike">$200</p>
                                <p class="productprice">$180</p>
                            </div>
                            <button class="productcart">Add to Cart</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductContent
