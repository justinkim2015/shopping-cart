import '../styles/cart.css'

function Cart() {
  return (
    <div id="cart">
      <ul id='cart-list'>
        <h2 id='cart-number'>You have 5 items in your cart!</h2>
        <li className='cart-item'>Tooth - $5</li>
        <li className='cart-item'>Jake - $15</li>
        <li className='cart-item'>Humidifier - $55</li>
        <li className='cart-item'>Water - $500000</li>
        <li className='cart-item'>Coffee - FREE</li>
      </ul>

      <div id="bottom-cart">
        <p id='total'>The total is $409209</p>
        <button id='checkout'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
