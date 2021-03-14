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
function Classcraft() {
  //const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//     .get('/api/c/{class_id}/${classcategory}}')
//     .then((result) => (setProduct(result.data.response)))
//   }, [])
  return (
    <Allclasspage>

    <div className="localnamelist">
    <LocaltitleDiv>공예</LocaltitleDiv>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <PickedLocaldetailedDiv>캔들, 디퓨저, 방향제&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</PickedLocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>실크스크린, 염색&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>발향, 룸스프레이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>자수, 재봉, 펠트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
    </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>뜨개, 마크라메&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>가죽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>금속, 악세사리&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>네온사인, 와이어&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>유리&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>목공&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>도자기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
    <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
    <LocaldetailedDiv>기타&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</LocaldetailedDiv>
     </Link>
     
     <Link to={"/main/class/classcategory/Classcooking"}>
     <LocaltitleDiv>요리</LocaltitleDiv>
     </Link>
     <Link to={"/main/class/classcategory/Classart"}>
     <LocaltitleDiv>미술</LocaltitleDiv>
     </Link>
     <Link to={"/main/class/classcategory/Classflower"}>
     <LocaltitleDiv>플라워</LocaltitleDiv>
     </Link>
     <Link to={"/main/class/classcategory/Classbeauty"}>
     <LocaltitleDiv>뷰티</LocaltitleDiv>
     </Link>
     <Link to={"/main/class/classcategory/Classexperienceandothers"}>
     <LocaltitleDiv>체험 및 기타</LocaltitleDiv>
     </Link>
     {/* {product.map((a, i) => {
      return <ClassOff class={product[i]} i={i} key={i} />;
    })}  */}
    </div>
    <Classproductlist>클래스 ▶ 공예</Classproductlist>
    </Allclasspage>
  );
}

export default Classcraft;
