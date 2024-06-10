import React from 'react';
import logo from '../../Image/Amazon-Logo.png'
import'./Header.css'

function Header(props) {
     return (
          <div className='header'>
               <img src={logo} alt="head logo"/>
               <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Rewiew</a>
                    <a href="/manage">Manage Inventory</a>
               </nav>
          </div>
     );
}

export default Header;