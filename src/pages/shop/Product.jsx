import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Cart3 } from 'react-bootstrap-icons';

export const Product = (props) => {
  const { id, name, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
      <img src={productImage} alt={name} />
      <div className='description'>
        <h3>{name}</h3>
        <div className='add'>
          <h6>${price}</h6>
          <button className='AddToCart' onClick={() => addToCart(id)}>
            <Cart3 />
             {' '}Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
