import React from 'react';

function Cart(props) {
     const cart = props.cart;
     const total = cart.reduce((total,prd)=> total + prd.price, 0) 
     
     let shipping = 0;
     if (total > 200) {
          shipping = 2;
     } 
     else if(total>15){
          shipping = 4.99;
     }
     else if(total>0){  
          shipping = 12.99;
     }
     const tex = Math.round(total / 10);

     // const fixed = num =>{
     //      const result = num.toFixed(2);
     //      return Number(result);
     // }

     return (
          <div>
               <h3>Order Summary</h3>
               <p>Items Order: {cart.length}</p>
               <p>Product Price{total}</p>
               <p><small>Shiping Cast {shipping}</small></p>
               <p><small>Tax + Vat {tex}</small></p>
               <h4>Total {total +shipping + tex}</h4>
               
          </div>
     );
}

export default Cart;