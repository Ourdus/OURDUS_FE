import React from 'react';
import styled from 'styled-components';
import starImg from '../../../img/stars.png';
import CategoryImg from '../../../img/CategoryImg.png'


function ClassHot(props) {
  return (
    <EntireWrapper>
      <BoxWrapper>
      <ImageBox>
        <img src={CategoryImg} /> {/* 이미지를 받아와서, hover impact를 주어야 한다. */}
      </ImageBox>
      <TextWrapper>
        <DeadlineDiv>오픈임박! 00:00:00 남음</DeadlineDiv>
        <ShopTag>바느질/재봉 - 스태리라운지</ShopTag>
        <h5>펀치니들로 만드는 유니크한 미니매트</h5>
        <h5>80% 9900원 / 월</h5>
      </TextWrapper>
      </BoxWrapper>
    </EntireWrapper>
  );
}

export default ClassHot;



const EntireWrapper = styled.div`
  width: 42%;
  display:flex;
  margin: 0% 1% 5% 1%;
  padding: 10px;
  display: inline-block;
  background-color: rgb(247, 246, 250);
  border: none;
  hr {
    width: 100%;
  }
`;

const BoxWrapper = styled.div`
  display:flex;
`;  

const DeadlineDiv = styled.div`
  width: 58%;
  height: 15px;
  border-radius: 3%;
  border: none;
  background-color: #fff4e6;
  margin: 2% 0% 0% 0.5%;
  color: #f76707;
  font-size: 10px;
  font-weight: bold;
`;

const ImageBox = styled.div`
  display: inline-block;
  width: 150px;
  height: 130px;
  margin: 0% 0%; 0% 0%;
  overflow: hidden;
  border-radius: 4px;
  transform: scale(1.14);
  transition: transform 0.5s ease;
`;

const TextWrapper = styled.div`
  margin: 0% 0% 0% 4.5%;
  h5{
    margin: 0.5% 0% 0% 0%;
    font-weight: bold;
    font-size: 13.5px;
  }
`;


const ShopTag = styled.a`
  color: #adb5bd;
  font-size: 12px;
  top: 10px;
  text-decoration: none;
`;

