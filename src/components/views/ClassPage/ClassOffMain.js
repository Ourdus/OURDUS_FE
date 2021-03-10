import React, { useState } from 'react';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import '../../css/Class.css';
import styled from 'styled-components';
import data from '../../data/ClassData';
import Product from '../Section/Product/Product';
import ClassOff from '../Section/Class/ClassOff';
import Silder from '../../views/ImgSlider/Silder';

// 버튼 이미지
import ArtImg from '../../img/OffCateBtns/ArtImg.png';
import BeautyImg from '../../img/OffCateBtns/BeautyImg.png';
import CookImg from '../../img/OffCateBtns/CookImg.png';
import CraftsImg from '../../img/OffCateBtns/CraftsImg.png';
import ExpImg from '../../img/OffCateBtns/ExpImg.png';
import FlowerImg from '../../img/OffCateBtns/FlowerImg.png';

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

const BtnDetailDiv = styled.div`
  width: 1100px;
  margin: 0% 5% 0% 0%;
`;

const OffCateBtn = styled.button`
  width: 14.8%;
  height: 110px;
  background-color: white;
  border: 1px solid lightgrey; 
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  margin: 0% 0% 5% 1%;
  border-radius: 6px;
  text-align:center;
  img {
      margin: 1% 0% 0% 0%;
      width: 100%;
      height: 100%;
  }
`;

function ClassOffMain() {
  let [product, setProduct] = useState(data);

  return (
    <div className="WorkPage">
      <nav>
        <Silder />
      </nav>

      <ContentDiv>
        <BtnDetailDiv>
            <OffCateBtn>
                <img src={CraftsImg}></img>
            </OffCateBtn>
            <OffCateBtn>
                <img src={CookImg}></img>
            </OffCateBtn>
            <OffCateBtn>
                <img src={ArtImg}></img>
            </OffCateBtn>
            <OffCateBtn>
                <img src={FlowerImg}></img>
            </OffCateBtn>
            <OffCateBtn>
                <img src={BeautyImg}></img>
            </OffCateBtn>
            <OffCateBtn>
                <img src={ExpImg}></img>
            </OffCateBtn>
         </BtnDetailDiv>

        <ContentDetailDiv>
          <h4>Coming Soon 오픈 예정 클래스</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassOff class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>100% 달성 시 클래스 제작!</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassOff class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          <h4>베스트 후기</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassOff class={product[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>

        <ContentDetailDiv>
          {/* 10개씩 우선적으로 출력 -> 이후에 무한 스크롤로 변경 */}
          <h4>전체 클래스</h4>
          {product.slice(0, 4).map((a, i) => {
            return <ClassOff class={product[i]} i={i} key={i} />;
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

export default ClassOffMain;
