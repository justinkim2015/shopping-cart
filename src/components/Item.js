import React, { useState } from "react";

const Item = ({item, index, addToCart}) => {
  const [info, setInfo] = useState({
    name: item.name,
    price: item.price,
    quantity: 0
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    let id = e.target.id.slice(-1)
    let value = document.getElementById('value'+id).value
    console.log(value)
    setInfo({name: item.name, price: item.price, quantity:value})
    addToCart(info)
  }

  return (
    <li className="item" key={index}>
      <div className='picture'>Picture Placeholder</div>
      <div className="product-info">
        <h2 className={'product-name'}>{item.name} - ${item.price}</h2>
        <p className='product-desc'>{item.desc}</p>
      </div>
      <form className='buy-form'>
        <input type='number' className='number' id={'value'+ index} />
        <input type='submit' value='Add to Cart!' className='add' id={'submit' + index} onClick={handleChange} />
      </form>
    </li>
  )
}

export default Item