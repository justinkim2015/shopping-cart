import '../styles/items.css'
import Item from './Item'

const Items = (props) =>{
  return (
    <ul id="all-items">
      {props.items.map((item, index) => (
        <Item item={item} key={index} index={index} addToCart={props.addToCart}/>
      ))}
    </ul>
  );
}
  

export default Items;
