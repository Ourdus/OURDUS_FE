import React from "react";
import styled from "styled-components";
import Silder from "../ImgSlider/Silder";

// CSS
import "../../css/WorkPage.css";
import "../../css/Product.css";

// 메인 페이지 섹션 별 Components
import Hit from "./WorkMainCategory/Hit.js";
import Price from "./WorkMainCategory/Price.js";
import Purchase from "./WorkMainCategory/Purchase.js";
import Rate from "./WorkMainCategory/MainRate.js";
import MainCategory from "./WorkMainCategory/MainCategory";

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
