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
  border-radius: 3%;
  align-content: space-evenly;
`;

const InterestBtn = styled.button`
  width: 100%;
  height: 4vh;
  border-radius: 3%;
  display: inline-block;
  border: none;
  background-color: #ffe8cc;
  h5 {
    font-size: 11px;
    color: #fd7e14;
    font-weight: bold;
    padding: 6% 0% 0% 0%;
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
`;

function ClassEnroll(props) {
  return (
    <Wrapper>
      <ImageBox>
        <img src={props.images} />
      </ImageBox>
      <br />
      <ShopTag>{prop.class.made_by}</ShopTag>
      <h5>{prop.class.title}</h5>
      <p>{prop.class.review}</p>
      <InterestBtn>
        <h5>관심 등록하고 알림받자!</h5>
      </InterestBtn>
    </Wrapper>
  );
}
export default ClassEnroll;
