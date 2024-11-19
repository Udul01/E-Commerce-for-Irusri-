
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const products = [
  { id: 1, name: "Macbook Pro", price: 229.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 2, name: "Asus Vivibook", price: 149.99, image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 3, name: "Product 3", price: 19.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];


const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7fa;
`;

const Navbar = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;
  font-size: 16px;
  &:hover {
    background-color: #575757;
    border-radius: 4px;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const ProductCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 250px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #4caf50;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Container>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/cart">
            Cart ({cart.length})
          </NavLink>
        </div>
      </Navbar>

      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            <AddToCartButton onClick={() => addToCart(product)}>
              Add to Cart
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
  );
};

export default Home;
