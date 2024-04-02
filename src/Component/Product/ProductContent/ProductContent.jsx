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
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "./ProductContent.css"
const ProductContent = () => {
  return (
    <div>
              <div className="productdivmaincontent">
            <div className="productdivleftright">
                <div className="productdivleft">
                    <div className="productdivcategorycont">
                        <div className="productdivcategory">
                            <p className="productlefthead">Category</p>
                            <p className="productline"></p>
                            <div className="productcheck1">
                                <input type="checkbox" id="categ1" name="categ1" value="Pets"/>
                                <label for="categ1"> Cat Food</label>
                            </div>
                            <div className="productcheck2">
                                <input type="checkbox" id="categ2" name="categ2" value="Pets"/>
                                <label for="categ2"> Accessories</label>
                            </div>
                            <div className="productcheck3">
                                <input type="checkbox" id="categ3" name="categ3" value="Pets"/>
                                <label for="categ3"> Dog Food</label>
                            </div>
                            <div className="productcheck4">
                                <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                                <label for="categ1"> Small Animal</label>
                            </div>
                        </div>
                    </div>
                    <div className="productfilter">
                        <p className="productlefthead">Filter by Price</p>
                        <p className="productline"></p>
                        <p className="productpricerange">Price Range: $0 - $100</p>
                        <button className="productfilterbtn">Filter</button>
                    </div>
                    <div className="productdivcolor">
                        <p className="productlefthead">Color</p>
                        <p className="productline"></p>
                        <div className="productcheck1">
                            <input type="checkbox" id="categ1" name="categ1" value="Pets"/>
                            <label for="categ1"> Red (250)</label>
                        </div>
                        <div className="productcheck2">
                            <input type="checkbox" id="categ2" name="categ2" value="Pets"/>
                            <label for="categ2"> Green (85)</label>
                        </div>
                        <div className="productcheck3">
                            <input type="checkbox" id="categ3" name="categ3" value="Pets"/>
                            <label for="categ3"> Violet (10)</label>
                        </div>
                        <div className="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Blue (29)</label>
                        </div>
                        <div className="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Black (258)</label>
                        </div>
                    </div>
                    <div className="productdivbestseller">
                        <p className="productlefthead">Best Seller</p>
                        <p className="productline"></p> 
                        <div className="productdivbestseller01">
                            <div className="productdivbsimg">
                                <img  src = {arrival02} alt=''/>
                            </div>
                            <div className="productdivbstxt">
                                <p className="productdivbstxtblk">Impulse Duffle</p>
                                <p className="productdivbstxtblk">
                                    $210
                                    <span className="productdivbstxtbrown"> $150</span>
                                </p>
                            </div>
                        </div>
                        <div className="productdivbestseller02">
                            <div className="productdivbsimg">
                            <img  src = {product08} alt=''/>
                            </div>
                            <div className="productdivbstxt">
                                <p className="productdivbstxtblk">Driven Backpack</p>
                                <p className="productdivbstxtblk">
                                    $210
                                    <span className="productdivbstxtbrown"> $150</span>
                                </p>
                            </div>
                        </div> 
                        <div className="productdivbestseller03">
                            <div className="productdivbsimg">
                                <img  src = {arrival02} alt=''/>
                            </div>
                            <div className="productdivbstxt">
                                <p className="productdivbstxtblk">Affirm cat food</p>
                                <p className="productdivbstxtblk">
                                    $210
                                    <span className="productdivbstxtbrown"> $150</span>
                                </p>
                            </div>
                        </div>                  
                    </div>
                    <div className="productdivbrand">
                        <p className="productlefthead">Brand</p>
                        <p className="productline"></p>
                        <div className="productcheck1">
                            <input type="checkbox" id="categ1" name="categ1" value="Pets/"/>
                            <label for="categ1"> Red (250)</label>
                        </div>
                        <div className="productcheck2">
                            <input type="checkbox" id="categ2" name="categ2" value="Pets"/>
                            <label for="categ2"> Petclub (09)</label>
                        </div>
                        <div className="productcheck3">
                            <input type="checkbox" id="categ3" name="categ3" value="Pets"/>
                            <label for="categ3"> Brothers (9)</label>
                        </div>
                        <div className="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Cat (3)</label>
                        </div>
                        <div className="productcheck4">
                            <input type="checkbox" id="categ4" name="categ4" value="Pets"/>
                            <label for="categ1"> Pet Point (66)</label>
                        </div>
                    </div>
                    <div className="productdivleftimg">
                        <div className="productblackfriday">
                        <img  src = {sideimg} alt=''/>
                        </div>
                    </div>
                </div>
                <div className="productdivright">
                    <a href="../index.html">
                        <div className="productcoco">
                        <img className='productproimg' src = {product01} alt=''/>
                            <p className="productproname">Coco Kat Kitten Milk</p>
                            <div className="productdivprostar">
                                <FaStar/>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$200</p>
                                <p className="productprice">$180</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/about.html">
                        <div className="productcoco">
                        <img className='productproimg' src = {tp02} alt=''/>
                            <p className="productproname">Kat Kitten Milk</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$360</p>
                                <p className="productprice">$230</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/blog.html">
                        <div className="productbonacibo">
                        <img className='productproimg' src = {product03} alt=''/>
                            <p className="productproname">BonaCibo Kitten Pouch</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$360</p>
                                <p className="productprice">$230</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/contact.html">
                        <div className="productnaughty">
                        <img className='productproimg1' src = {arrival04} alt=''/>
                            <p className="productproname">Naughty Cat Bentonite</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$360</p>
                                <p className="productprice">$230</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../Pages/product.html">
                        <div className="productmoderna">
                        <img className='productproimg' src = {arrival03} alt=''/>
                            <p className="productproname">Moderna Trendy Story</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar/>
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$420</p>
                                <p className="productprice">$330</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="../index.html">
                        <div className="productmoderna">
                        <img className='productproimg' src = {product05} alt=''/>
                            <p className="productproname">Moderna Scoop & Sift</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$200</p>
                                <p className="productprice">$180</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="./about.html">
                        <div className="productdrools">
                        <img className='productproimg' src = {product08} alt=''/>
                            <p className="productproname">Drools Calcium</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$200</p>
                                <p className="productprice">$180</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="./blog.html">
                        <div className="productmoderna">
                        <img className='productproimg1' src = {arrival01} alt=''/>
                            <p className="productproname">Moderna Trendy</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$360</p>
                                <p className="productprice">$230</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                    <a href="./product.html">
                        <div className="productmeat">
                        <img className='productproimg1'  src = {fp04} alt=''/>
                            <p className="productproname">Meat Dog Can</p>
                            <div className="productdivprostar">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <div className="productdivproprice">
                                <p className="productstrike">$200</p>
                                <p className="productprice">$180</p>
                            </div>
                            <button className="productcart">Add to Cart</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductContent
