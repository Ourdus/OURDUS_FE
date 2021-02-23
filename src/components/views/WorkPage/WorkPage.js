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
  let [product, setProduct] = useState([]);
  let [category, setCategory] = useState(categoryData);
  const url = 'api/user/main';
  useEffect(() => {
    axios
      .get('/api/user/join')
      .then(function (response) {
        setProduct(response);
        setCategory(response);
      })
      .catch(function (error) {
        console.log('실패');
      });
  }, []);

  return (
    <div className="WorkPage">
      <nav className="promotion">
        <Silder />
      </nav>

      <ContentDiv>
        <ContentDetailDiv>
          <h4>추천상품</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            추천상품 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>최신상품</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            최신상품 더보기
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>상품후기</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            상품후기 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>인기상품</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            인기상품 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>전체 카테고리</h4>
          {category.map((a, i) => {
            return <Category category={category[i]} key={i} />;
          })}
        </ContentDetailDiv>
      </ContentDiv>
    </div>
  );
}

export default WorkPage;
