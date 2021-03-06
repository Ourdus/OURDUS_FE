import React from "react";
import styled from "styled-components";
import starImg from "../../../img/stars.png";

function Class(props) {
  return (
    <Wrapper>
      <ImageBox>
        <img src={props.class.mainImage} />{" "}
        {/* 이미지를 받아와서, hover impact를 주어야 한다. */}
      </ImageBox>
      <br />
      <ShopTag>{props.class.authorName}</ShopTag>
      <br />
      <h5>{props.class.name}</h5>
      <p>{props.class.categoryName}</p>
      {/* <Stars>
        <Star_out>
          <img src={starImg} />
          <Star_in width={props.product.rate}>
            <h4></h4>
          </Star_in>
        </Star_out>
      </Stars> */}
    </Wrapper>
  );
}

export default Class;

const Wrapper = styled.div`
  width: 16%;
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
  border: 1px lightgrey;
`;

const Stars = styled.div`
  width: 100px;
  /* height: 20px; */
  display: inline-block;
`;
const Star_out = styled.span`
  img {
    width: 100px;
    /* height: 20px; */
    position: relative;
    z-index: 2;
    left: -15px;
  }
`;
const Star_in = styled.span`
  h4 {
    width: ${(props) => props.width}%;
    height: 16px;
    float: left;
    position: relative;
    background-color: rgb(240, 221, 6);
    z-index: 1;
    top: -18px;
    left: -15px;
  }
`;
