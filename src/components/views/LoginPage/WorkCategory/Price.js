import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Product from '../../Section/Product/Product';

const ContentDetailDiv = styled.div`
  width: 1130px;
`;

function Price() {
const [price, setPrice] = useState([]);
useEffect(() => {
    try {
      axios
      .get("/api/w/product/price")
      .then(function(response) {
        setPrice(response.data.response);
      })
    } catch (e) {
      console.log('error');
    }
  }, []);

    return (
        <ContentDetailDiv>
          <h4>낮은 가격 상품</h4>
          {price.slice(0, 10).map((a, i) => {
            return <Product price={price[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            추천상품 더보기{' '}
          </button>
        </ContentDetailDiv>
    )
}

export default Price;

