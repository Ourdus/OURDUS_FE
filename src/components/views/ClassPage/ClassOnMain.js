import React, { useState } from 'react';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import '../../css/Class.css';
import styled from 'styled-components';
import data from '../../data/ClassData';
import Product from '../Section/Product/Product';
import Class from '../Section/Class/Class';
import ClassHot from '../Section/Class/ClassHot';
import Silder from '../ImgSlider/Silder';
import ClassEnroll from '../Section/Class/ClassEnroll';
import ClassOpen from '../Section/Class/ClassOpen';
const ContentDiv = styled.div`
  margin: 4% 0% 0% 18%;
  h4 {
    font-weight: bold;
    font-size: 25px;
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
          <h4>Hot! 주목받는 무제한 수강 클래스</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassHot class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>Coming Soon 오픈 예정 클래스</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassOpen class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>100% 달성 시 클래스 제작!</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassEnroll class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>베스트 후기</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Class class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          {/* 10개씩 우선적으로 출력 -> 이후에 무한 스크롤로 변경 */}
          <h4>전체 클래스</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Class class={product[i]} i={i} key={i} />;
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
