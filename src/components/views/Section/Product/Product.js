import React from 'react';
import styled from 'styled-components';
import img1 from '../../../img/Test.jpg';

const Wrapper = styled.div`
  width: 16%;
  margin: 0% 1% 5% 1%;
  padding: 10px;
  display: inline-block;
  background-color: rgb(247, 246, 250);
  border: 1px solid lightgrey;
  hr {
    width: 100%;
  }
`;

const ShopTag = styled.a`
  color: black;
  font-size: 12px;
  top: 10px;
  text-decoration: none;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  margin: 0% 0%; 0% 0%;
  overflow: hidden;
  border-radius: 4px;
  transform: scale(1.14);
  transition: transform 0.5s ease;
  img {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  &:hover {
    overflow: hidden;
    transform: (-50%, -50%);
    transform: scale(1.15);
  }
  hr {
    width: 700px;
    margin: 2% 50% 0% 0%;
    overflow: visible;
  }
`;
function Product(props) {
  return (
    <Wrapper>
      <ImageBox>
        <img src={props.product.url} /> {/* 이미지를 받아와서, hover impact를 주어야 한다. */}
      </ImageBox>
      <br />
      <ShopTag>{props.product.made_by}</ShopTag>
      <br />
      <h5>{props.product.title}</h5>
      <hr></hr>
      <p>{props.product.review}</p>
    </Wrapper>
  );
}

export default Product;
