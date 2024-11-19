// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    setProducts([
      { id: 1, name: "Product 1", description: "Description 1", price: 29.99, image: "https://via.placeholder.com/200" },
      { id: 2, name: "Product 2", description: "Description 2", price: 39.99, image: "https://via.placeholder.com/200" },
      { id: 3, name: "Product 3", description: "Description 3", price: 49.99, image: "https://via.placeholder.com/200" },
    ]);
  }, []);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
