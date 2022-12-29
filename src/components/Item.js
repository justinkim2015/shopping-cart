// import React, { useState } from "react";

const Item = ({item, key}) => {
  // const [count, setCount] = useState(0);

  return (
    <li key={key} className="item">
      <div className='picture'>Picture Placeholder</div>
      <div className="product-info">
        <h2 className='product-name'>{item.name} - ${item.price}</h2>
        <p className='product-desc'>{item.desc}</p>
      </div>
      <form className='buy-form'>
        <input type='number' className='number' />
        <input type='submit' value='Add to Cart!' className='add' />
      </form>
    </li>
  )
}

export default Item