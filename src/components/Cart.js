import '../styles/cart.css'

function Cart() {
  return (
    <div id="cart">
      <ul id='cart-list'>
        <li class='cart-item'>Tooth - $5</li>
        <li class='cart-item'>Jake - $15</li>
        <li class='cart-item'>Humidifier - $55</li>
        <li class='cart-item'>Water - $500000</li>
        <li class='cart-item'>Coffee - FREE</li>
      </ul>

      <div id="bottom-cart">
        <p id='total'>The total is $409209</p>
        <button id='checkout'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
