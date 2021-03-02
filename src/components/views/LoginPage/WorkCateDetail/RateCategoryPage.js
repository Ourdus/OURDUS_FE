import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from '../../Section/Product/Product';
import '../../../css/Product.css';

function RateCategorypage() {
  const [input, setInput] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩중인지 아닌지를 담기위한 state
  
  function GetUserInfo () {
    setLoading(true); 
    try {
      axios
      .get(`/api/w/category/1`)
      .then(function(response) {
        const resData = response.data.response;
        const mergedData = input.concat(...resData);
        setInput(mergedData);
      })
      } catch (e) {
      console.log('error');
      }
    setLoading(false);
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      GetUserInfo();
    }
   };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    GetUserInfo();
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
    <EntireWrapper>
        <ContentDetailDiv>
          <div className="TextWrapper">
            <ContentDiv>
              <h4>평점 순 상품</h4>
              <h5>고객님들이 좋아하시는 상품을 추천드려요</h5>
              </ContentDiv>
          </div>
          {input.map((a, i) => {
            return <Product product={input[i]} i={i} key={i} />;
          })}
        </ContentDetailDiv>
    </EntireWrapper>
  );
}

export default RateCategorypage;


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

const EntireWrapper = styled.div`
  padding: 2% 20%;
`;