import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import classcategoryData from '../../data/classcategoryData';
import data from '../../data/WorkData';
import styled from 'styled-components';
import Class from '../Section/Product/Class';

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

function PopularClass() {
  let [Class, setClass] = useState([]);
  let [classcategory, setclassCategory] = useState(classcategoryData);
  function PullData() {
    const url = '/api/oc';
    axios
      .get(url)
      .then(function (response) {
        setClass(response);
      })
      .catch(function (error) {
        console.log('실패');
      });

    if (Class.length > 0) {
      return (
        <div className="WorkPage">

          <ContentDiv>

            <ContentDetailDiv>
              <h4>클래스_인기클래스</h4>
              {Class.map((a, i) => {
                return <Class Class={Class[i]} i={i} key={i} />;
              })}              
            </ContentDetailDiv>

          </ContentDiv>
        </div>
      );
    }
  } // PullData Function End Point
  useEffect(() => {
    PullData();
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return <></>;
}

// 카테고리 버튼
function classCategory(props) {
  return (
    <div className="classcategory_button">
      {/* <Link to={`/work/category/${props.category.id}`}> {props.category.name} </Link> */}
      <Link to={'/main/class/' + props.category.id} className="_category_button">
        {' '}
        <span>{props.category.name}</span>{' '}
      </Link>
    </div>
  );
}

export default PopularClass;