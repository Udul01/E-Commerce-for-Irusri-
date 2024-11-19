// src/pages/Login.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fa;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);

    // Add a delay of 1 second before navigating to the Cart page
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
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
            Cart ({0}) {/* Replace 0 with the actual cart length */}
          </NavLinkStyled>
        </div>
      </Navbar>

      {/* Login Form */}
      <Container>
        <FormWrapper>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
          </form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Login;
