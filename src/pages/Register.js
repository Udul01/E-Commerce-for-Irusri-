// src/pages/Register.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const Message = styled.div`
  text-align: center;
  color: #4caf50;
  margin-top: 15px;
  font-size: 16px;
`;

const Register = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock Registration Logic
    login(email, password); // Direct login after "registration"
    setSuccessMessage("User registered successfully!");
    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
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
            Cart ({0}) {/* You can replace 0 with the actual cart length */}
          </NavLinkStyled>
        </div>
      </Navbar>

      {/* Register Form */}
      <Container>
        <FormWrapper>
          <Title>Register</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <Button type="submit">Register</Button>
          </form>
          {successMessage && <Message>{successMessage}</Message>}
        </FormWrapper>
      </Container>
    </>
  );
};

export default Register;
