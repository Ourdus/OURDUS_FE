import React, { useState } from 'react';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import '../../css/Class.css';
import styled from 'styled-components';
import data from '../../data/ClassData';
import Product from '../Section/Product/Product';
import Class from '../Section/Class/Class';
import Silder from '../ImgSlider/Silder';

const ContentDiv = styled.div`
  margin: 4% 0% 0% 20.5%;
  hr {
    width: 90%;
  }
  h4 {
    font-weight: bold;
  }
`;

const ContentDetailDiv = styled.div`
  width: 1200px;
  hr {
    width: 170px;
    margin: 3% 50% 5% 0%;
  }
`;

function ClassPage() {
  let [product, setProduct] = useState(data);

  return (
    <div className="WorkPage">
      <nav>
        <Silder />
      </nav>

      <ContentDiv>
        <ContentDetailDiv>
          <h4> 얼리버드 할인 클래스</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            할인 클래스 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>지금 주목받는 클래스</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            주목 상품 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>관심있는 클래스가 있나요?</h4>
          <hr />
          {product.slice(0, 4).map((a, i) => {
            return <Class product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            관심 클래스 더보기
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>베스트 후기</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            베스트 후기 더보기{' '}
          </button>
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>전체 클래스</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            전체 클래스 더보기{' '}
          </button>
        </ContentDetailDiv>
      </ContentDiv>
    </div>
  );
}

export default ClassPage;
