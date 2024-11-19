// src/components/ProductCard.js
import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 200px;
  margin: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);  // Ensure the function is called correctly
  };

  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </ProductInfo>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </CardContainer>
  );
};

export default ProductCard;
