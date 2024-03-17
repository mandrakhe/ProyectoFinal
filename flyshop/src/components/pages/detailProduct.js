import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    getProductDetails();
  }, [id]);

  if (!product) {
    return <div>Espera por favor</div>;
  }

  return (
    <div className='detail-product'>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default DetailProduct;