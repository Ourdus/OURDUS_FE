import React from 'react';
import styled from 'styled-components';
import img1 from '../../../img/Test.jpg';

function ClassEnroll(props) {
  return (
    <Wrapper>
      <ImageBox>
        <img src={props.class.mainImage} /> {/* 이미지를 받아와서, hover impact를 주어야 한다. */}
      </ImageBox>
      <br />
      <ShopTag>{props.class.authorName}</ShopTag>
      <br />
      <h5>{props.class.name}</h5>
      <p>{props.class.categoryName}</p>
    </Wrapper>
  );
}
export default ClassEnroll;


const Wrapper = styled.div`
  width: 20%;
  margin: 0% 1% 5% 1%;
  padding: 10px;
  display: inline-block;
  background-color: rgb(247, 246, 250);
  border: none;
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

`;

const Stars = styled.div`
width: 100px;
/* height: 20px; */
display: inline-block;
`
const Star_out = styled.span`
img {
    width: 100px;
    /* height: 20px; */
    position: relative;
    z-index: 2;
    left: -15px;
}
`
const Star_in = styled.span`
h4 {
    width: ${props => props.width}%;
    height: 16px;
    float: left;
    position: relative;
    background-color: rgb(240, 221, 6);
    z-index: 1;
    top: -18px;
    left: -15px;
}
`
const InterestBtn = styled.button`
  width: 100%;
  height: 4vh;
  border-radius: 3%;
  display: inline-block;
  border: none;
  background-color: #fff4e6;
  h5 {
    font-size: 14px;
    color: #f76707;
    font-weight: bold;
    padding: 6% 0% 0% 0%;
  }
`;