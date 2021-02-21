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

function WorkPage() {
  let [product, setProduct] = useState([]);
  let [category, setCategory] = useState(categoryData);
  const url = 'api/user/main';
  useEffect(() => {
    axios
      .get('/api/user/join')
      .then(function (response) {
        setProduct(response);
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

function Category(props) {
  return (
    <div className="category_button">
      {/* <Link to={`/work/category/${props.category.id}`}> {props.category.name} </Link> */}
      <Link to={'/work/category/' + props.category.id} className="_category_button">
        {' '}
        <span>{props.category.name}</span>{' '}
      </Link>
    </div>
  );
}

export default WorkPage;
