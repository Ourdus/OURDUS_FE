import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from '../Section/Product/Product';
import '../../css/Product.css';

function WorkCategorypage({match}) {
  const i = match.params.id;
  const [input, setInput] = useState([]);
  useEffect(() => {
    try {
    axios
    .get(`/api/w/category/${i}`)
    .then(function(response) {
      const resData = response.data.response;
      setInput(resData);
    })
    } catch (e) {
    console.log('error');
    }
  }, []);
  return (
        <ContentDetailDiv>
          <div className="TextWrapper">
            <ContentDiv>
              <h4>오늘의 발견</h4>
              <h5>아이디어스가 추천하는 작품을 추천드려요</h5>
              </ContentDiv>
          </div>
          {input.slice(0, 10).map((a, i) => {
            return <Product product={input[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>
  );
}

export default WorkCategorypage;


const ContentDetailDiv = styled.div`
  width: 1130px;
  height: 100vh;
`;

const ContentDiv = styled.div`
  margin: 0% 0% 0% 0%;
  padding: 2.5% 0% 0% 31%;
  font-weight: bold;
  h4 {
    padding: 0% 0% 1% 10%;
    font-size: 40px;
  }
  h5 {
    padding: 0% 0% 0% 6%;
    font-size: 17px;
  }
`;

