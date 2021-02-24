import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryImg from '../../../img/CategoryImg.png'

const CategoryDiv = styled.div`
  appearance: none;
  display: inline-block;
  width: 15%;
  text-align: left;
  margin: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  overflow: hidden;
  transition: transform 1.5s ease;
  img {
    width: 100%;
    height: 120px;
    margin: 0% 0% 0% 0%;
    transition: transform 1.5s;
  }
  span {
    margin: 0% 0% 0% 2.5%;
  }
`;

const CategoryTag = styled.a`
  color: black;
  font-size: 12px;
  top: 10px;
  text-decoration: none;
`;


function Category(props) {
  return (
    <CategoryDiv>
        <img src={CategoryImg} />
      <Link to={'/work/category/' + props.category.id}>
        <CategoryTag><span>{props.category.name}</span></CategoryTag>{' '}
      </Link>
      </CategoryDiv>
  );
}

export default Category;
