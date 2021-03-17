import React, { useState, useEffect } from 'react';
import '../../../css/WorkPage.css';
import '../../../css/Product.css';
import '../../../css/Class.css';
import styled from 'styled-components';
import data from '../../../data/ClassData';
import Product from '../../Section/Product/Product';
import ClassOff from '../../Section/Class/ClassOff';
import { Link } from "react-router-dom";
import axios from 'axios';

const BtnDetailDiv = styled.div`
  width: 1100px;
  margin: 0% 5% 0% 0%;
`;
const LocaltitleDiv = styled.div`
border-bottom: 3px solid black;
font-size: larger;
padding-top: 10%;
padding-bottom: 10%;
font-weight: bolder;
`;
const LocaldetailedDiv = styled.div`
border-bottom: 1px solid lightgray;
padding-top: 5%;
padding-bottom: 5%;
font-size: smaller;
text-decoration:none
`;
const PickedLocaldetailedDiv = styled.div`
color: orange;
border-bottom: 1px solid lightgray;
padding-top: 5%;
padding-bottom: 5%;
font-size: smaller;
text-decoration:none
`;
const Allclasspage = styled.div`
display: flex;
margin-left: 10%;
`;
const Classproductlist = styled.div`
margin: 1%;

`;

function Classlocalgyeongbook() {
  let [product, setProduct] = useState(data);

  var localnum = 10
   
  return (
    <Allclasspage>

    <div className="localnamelist">
    <LocaltitleDiv>지역별</LocaltitleDiv>
    <Link to={"/main/class/classlocal/seoul"} className="notextdecoration">
    <LocaldetailedDiv>서울&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classlocal/kyunggi"} className="notextdecoration">
    <LocaldetailedDiv>경기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classlocal/incheon"} className="notextdecoration">
    <LocaldetailedDiv>인천&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classlocal/busan"} className="notextdecoration">
    <LocaldetailedDiv>부산&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classlocal/daegu"} className="notextdecoration">
    <LocaldetailedDiv>대구&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classlocal/gwangju"} className="notextdecoration">
    <LocaldetailedDiv>광주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classlocal/sejong"} className="notextdecoration">
    <LocaldetailedDiv>세종&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classlocal/gwangwon"} className="notextdecoration">
    <LocaldetailedDiv>강원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classloca/gyeongbook"} className="notextdecoration">
    <PickedLocaldetailedDiv>경북&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</PickedLocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classlocal/ulsan"} className="notextdecoration">
    <LocaldetailedDiv>울산&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classlocal/daejun"} className="notextdecoration">
    <LocaldetailedDiv>대전&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classlocal/choongnam"} className="notextdecoration">
    <LocaldetailedDiv>충남&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    {/* {product.map((a, i) => {
      return <ClassOff class={product[i]} i={i} key={i} />;
    })} */}
    </div>
    <Classproductlist>클래스 ▶ 경북</Classproductlist>
    </Allclasspage>
  );
}

export default Classlocalgyeongbook;
