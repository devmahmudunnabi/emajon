import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props)=> {
   //   console.log(props.product);
     const {img,name,seller,price,stock} = props.product
     return (
        <div className='Product_sec'>
          <div>
             <img src={img} alt="Product Img" />
          </div>
          <div>
               <h4 className='product-name'>{name}</h4>
               <br />
               <p><small>by: {seller}</small></p>
               <p>${price}</p>
               <br />
               <p><small>only {stock} left in stock - Order soon</small></p>
               <button className='main-button' onClick={()=>props.hendelProductKey(props.product)}> <FontAwesomeIcon icon={ faShoppingCart }/> add to cart</button>
          </div>
        </div>
     );
}

export default Product;