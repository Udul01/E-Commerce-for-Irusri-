import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled Components for Navbar
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

// Styled Components for Cart
const CartContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
`;

const ItemDetails = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

const QuantityControl = styled.input`
  width: 60px;
  padding: 8px;
  margin-right: 15px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #f44336;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

const Total = styled.h3`
  text-align: right;
  margin-top: 20px;
  font-size: 24px;
  color: #333;
`;

const Cart = () => {
  // Sample product (MacBook Pro)
  const product = {
    id: 1,
    name: "MacBook Pro",
    description: "Latest MacBook Pro with M1 chip",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quantity: 1,
  };

  // Cart state
  const [cartItems, setCartItems] = useState([product]);

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update product quantity and price
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  // Calculate total price
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <div>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/register">Register</NavLinkStyled>
          <NavLinkStyled to="/cart">
            Cart ({cartItems.length})
          </NavLinkStyled>
        </div>
      </Navbar>

      {/* Cart Content */}
      <CartContainer>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemDetails>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemInfo>
              </ItemDetails>
              <QuantityControl
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                min="1"
              />
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </CartItem>
          ))
        )}
        <Total>Total: ${getTotal()}</Total>
      </CartContainer>
    </>
  );
};

export default Cart;
