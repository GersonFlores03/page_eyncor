import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/producto/1/producto');
        setProductData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, []);

  
  if (!productData) {
    return <div className="loading">Cargando producto...</div>;
  }

  return (
    <div className="product-details">
      <h2>{productData.nombre}</h2>
      <p>{productData.descripcion}</p>
      <p>Precio: ${productData.precio}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default Product;
