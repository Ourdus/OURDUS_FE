
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
function Classexperienceandothers() {
  const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//     .get('/api/c/{class_id}/${classcategory}}')
//     .then((result) => (setProduct(result.data.response)))
//   }, [])
  return (
    <Allclasspage>

    <div className="localnamelist">
    <LocaltitleDiv>체험 및 기타</LocaltitleDiv>
  
    <Link to={"/main/class/classcategory/Classexperienceandothers"} className="notextdecoration">
    <PickedLocaldetailedDiv>기타&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</PickedLocaldetailedDiv>
     </Link>
     <Link to={"/main/class/classcategory/Classcraft"} className="notextdecoration">
     <LocaltitleDiv>공예</LocaltitleDiv>
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
     {/* {product.map((a, i) => {
      return <ClassOff class={product[i]} i={i} key={i} />;
    })}  */}
    </div>
    <Classproductlist>클래스 ▶ 체험 및 기타</Classproductlist>
    </Allclasspage>
  );
}

export default Classexperienceandothers;
