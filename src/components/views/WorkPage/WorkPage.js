import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import categoryData from '../../data/categoryData';
import data from '../../data/WorkData';
import styled from 'styled-components';
import Product from '../Section/Product/Product';
import Silder from '../ImgSlider/Silder';
import Category from '../Section/Product/Category'
import Hit from'../LoginPage/WorkCategory/Hit.js';
import Price from'../LoginPage/WorkCategory/Price.js';
import Purchase from'../LoginPage/WorkCategory/Purchase.js';
import Rate from'../LoginPage/WorkCategory/MainRate.js';
import MainCategory from'../LoginPage/WorkCategory/MainCategory';

const ContentDiv = styled.div`
  padding: 2% 20%;
  hr {
    width: 90%;
  }
  h4 {
    font-weight: bold;
  }
`;

const ContentDetailDiv = styled.div`
  width: 1130px;
`;

const CategoryDiv = styled.div`
  appearance: none;
  display: inline-block;
  width: 10.5%;
  text-align: center;
  margin: 10px;
  padding: 5px 0px;
  border: 1px solid lightgrey;
  border-radius: 10%;
  background-color: white;
`;

const CategoryTag = styled.a`
  color: black;
  font-size: 12px;
  top: 10px;
  text-decoration: none;
`;

function WorkPage() {
  return (
    <div className="WorkPage">
      <nav className="promotion">
        <Silder />
      </nav>

      <ContentDiv>
        <ContentDetailDiv>
          <Rate></Rate>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <Price></Price>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <Hit></Hit>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <Purchase></Purchase>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <MainCategory></MainCategory>
        </ContentDetailDiv>
      </ContentDiv>
    </div>
  );
}

export default WorkPage;
