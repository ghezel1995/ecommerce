import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const products = PRODUCTS.find(product => product.id === Number(id))

  if (!products) {
    return <div>Product not found</div>;
  }

  const { name, price, productImage, description} = products

  return (
    <div className='product-detail'>
      <h3>{name}</h3>
      <img src={productImage} alt={name} />
      <div className='description'>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
