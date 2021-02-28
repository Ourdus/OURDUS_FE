import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Product from '../../Section/Product/Product';

const ContentDetailDiv = styled.div`
  width: 1130px;
`;

function Purchase() {
    const [purchase, setPurchase] = useState([]);
    useEffect(() => {
    try {
      axios
      .get("/api/w/product/purchase")
      .then(function(response) {
        setPurchase(response.data.response);
      })
    } catch (e) {
      console.log('error');
    }
  }, []);

    return (
        <ContentDetailDiv>
           <h4>인기 상품</h4>
          {purchase.slice(0, 10).map((a, i) => {
            return <Product product={purchase[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            추천상품 더보기{' '}
          </button>
        </ContentDetailDiv>
    )
}

export default Purchase;

