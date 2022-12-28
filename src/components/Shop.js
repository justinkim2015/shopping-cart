import React, { useState } from "react";
import '../styles/shop.css'
import Cart from './Cart'
import Items from './Items'

function Shop() {
  const stuff = ['dog -$5', 'cat', 'frog', 'potato', 'human', 'dog', 'cat', 'frog', 'potato', 'human', 'stiff', 'uhhh']
  const [items, setItem] = useState(stuff);

  return (
    <div id="shop">
      < Cart />
      < Items items={items}/>
    </div>
  );
}

export default Shop;
