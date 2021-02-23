import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryImg from '../../../img/CategoryImg.png'

const CategoryDiv = styled.div`
  appearance: none;
  display: inline-block;
  width: 13%;
  text-align: center;
  margin: 10px;
  padding: 5px 0px;
  border: 1px solid lightgrey;
  background-color: white;
`;

const CategoryTag = styled.a`
  color: black;
  font-size: 12px;
  top: 10px;
  text-decoration: none;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89%;
  height: 200px;
  margin: 0% 0% 0% 5%;
  height: 100px;
  overflow: hidden;
  transform: scale(1.14);
  transition: transform 0.5s ease;
  img {
    width: 100%;
    height: 130px;
    margin: 0% 0% 0% 1.5%;
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


function Category(props) {
  return (
    <CategoryDiv>
      <ImageBox>
        <img src={CategoryImg} />
      </ImageBox>
      <Link to={'/work/category/' + props.category.id}>
        <CategoryTag><span>{props.category.name}</span></CategoryTag>{' '}
      </Link>
      </CategoryDiv>
  );
}

export default Category;
