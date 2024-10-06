import React from "react";
import styled from "styled-components";
import img from "../assets/Lenovo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eaeaea;
`;


const Card = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const ProductName = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
`;

const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: #1c252c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.5s ease, transform 0.3s ease;

  &:hover {
    background-color: #58545b;
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ProductCardStyled = () => {
  return (
    <Container>
      <Card>
        <ProfileImage src={img} alt="Lenovo" />
        <ProductName>Computador Portátil</ProductName>
        <p>Portátil Lenovo Intel core i3 iDeapad3</p>
        <BuyButton>Comprar ahora 🤑</BuyButton>
      </Card>
    </Container>
  );
};

export default ProductCardStyled;
