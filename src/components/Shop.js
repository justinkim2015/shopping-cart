import React, { useState } from "react";
import '../styles/shop.css'
import Cart from './Cart'
import Items from './Items'

function Shop() {
  const products = [{name:"Clock", price:25, desc:'A Clock'},
                    {name:"Wine Bottle", price:19, desc:'An empty wine bottle'}, 
                    {name:"Waffle Maker", price:35, desc:'It makes waffles'}, 
                    {name:"Pen Case", price:3, desc:'It holds pens and pencils'}, 
                    {name:"Mystery Box", price:99, desc:'What\'s inside?!'}, 
                    {name:"An Apple", price:1, desc:'Just an apple'}, 
                    {name:"A tater", price:1, desc:'A raw potato'}, 
                    {name:"Dinosaur", price:19999, desc:'A real dinosaur, this is really a steal.'}, 
                    {name:"Young Spice", price:4, desc:'Don\'t be stinky!'}, 
                    {name:"Medicine", price:13, desc:'Mystery medicine, probably best not to take.'} 
                  ]

  const [items] = useState(products);
  const [cart, setCart] = useState([]);

  const addToCart = (info) => {
    if(info.quantity <= 0 || info.quantity.isNaN) {
      return
    } else {
      setCart([...cart, info])
    }
  };

  return (
    <div id="shop">
      < Cart />
      < Items items={items} addToCart={addToCart}/>
    </div>
  );
}

export default Shop;
