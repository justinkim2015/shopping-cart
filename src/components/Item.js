import React, { useState } from "react";

const Item = ({item, key}) => {
  const [count, setCount] = useState(0);

  return (
    <li key={key} className="item">
      <div className='picture'>Picture Placeholder</div>
      <h2 className='product-name'>{item}</h2>
      <form className='buy-form'>
        <input type='number' className='number' />
        <input type='submit' value='Add to Cart!' className='add' />
      </form>
    </li>
  )
}

export default Item