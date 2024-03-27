import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { SkipBackward } from 'react-bootstrap-icons';
import { ShopContext } from '../../context/shop-context';
import { PlusLg } from 'react-bootstrap-icons';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const products = PRODUCTS.find((product) => product.id === Number(id));

  if (!products) {
    return <div>Product not found</div>;
  }

  const { name, price, productImage, description } = products;
  const cartItemAmount = cartItems[id];

  return (
    <div className='product-detail'>
      <h3 className='productName'>{name}</h3>
      <div className='productDescription'>
        <img src={productImage} alt={name} />
        <div className='middle'>
          <div className='description-price'>
            <p>{description}</p>
            <p>${price}</p>
          </div>
          <div className='detailButtons'>
            <button className='backBtn' onClick={() => addToCart(id)}>
              <PlusLg /> Add to cart{' '}
              {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
            {/* <CartBtn id={id} /> */}
            <Link to='/shop' className='backBtn'>
              <SkipBackward /> back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
