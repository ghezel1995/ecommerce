import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import { BalloonHeart } from 'react-bootstrap-icons';
import './shop.css';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1><BalloonHeart />Goods</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
