import React, { useState } from 'react';
import'./Shop.css';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
     const fast10 = fakeData.slice(0, 10);
     const [products, setProducts] = useState(fast10);
     const [cart , setCart] = useState([]);
     const hendelProductKey =(product)=>{
          // console.log('product added' , product)
          const newcard =[...cart, product] 
          setCart(newcard);
     }
     return (
          <div className='NameContainer'>
              <div className='productName'>                   
                    {
                         
                         products.map(pd => <Product hendelProductKey ={hendelProductKey} product = {pd}></Product>)
                    }                    
              </div>
              <div className='priceName'>
                    <Cart cart={cart}></Cart>
              </div>
          </div>
     );
};

export default Shop;