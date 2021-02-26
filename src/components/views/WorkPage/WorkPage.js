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

function WorkPage({match}) {
  const count = 10;
  const i = match.params.id;
  let [product, setProduct] = useState([]);
  let [rate, setRate] = useState([]);
  let [price, setPrice] = useState([]);
  let [hit, setHit] = useState([]);
  let [purchase, setPurchase] = useState([]);
  let [category, setCategory] = useState(categoryData);
  useEffect(() => {
    try {
      const rate = axios.get("/api/t/w/product/rate");
      setRate(rate.data.response);
      const price = axios.get(`/api/t/w/product/price`);
      setPrice(price.data.response);
      const hit = axios.get(`/api/t/w/product/hit`);
      setHit(hit.data.response);
      const purchase = axios.get(`/api/t/w/product/purchase`);
      setPrice(purchase.data.response);
    } catch (e) {
      console.log('error');
    }
  }, []);

  return (
    <div className="WorkPage">
      <nav className="promotion">
        <Silder />
      </nav>

      <ContentDiv>
        <ContentDetailDiv>
          <h4>높은 별점 상품</h4>
          {rate.slice(0, 10).map((a, i) => {
            return <Product rate={rate[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            추천상품 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>낮은 가격 상품</h4>
          {price.slice(0, 10).map((a, i) => {
            return <Product price={price[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            최신상품 더보기
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>높은 조회수 상품</h4>
          {hit.slice(0, 10).map((a, i) => {
            return <Product hit={hit[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            상품후기 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>인기 상품</h4>
          {purchase.slice(0, 10).map((a, i) => {
            return <Product purchase={purchase[i]} i={i} key={i} />;
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
