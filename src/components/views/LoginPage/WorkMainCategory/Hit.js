import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Product from '../../Section/Product/Product';

const ContentDetailDiv = styled.div`
  width: 1130px;
`;

function Hit() {
    const [hit, setHit] = useState([]);
    useEffect(() => {
        try {
        axios
        .get('/api/w/product/price')
        .then(function(response) {
            setHit(response.data.response);
        })
        } catch (e) {
        console.log('error');
        }
    }, []);

    return (
        <ContentDetailDiv>
          <h4>높은 조회수 상품</h4>
          {hit.slice(0, 10).map((a, i) => {
            return <Product product={hit[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            추천상품 더보기{' '}
          </button>
        </ContentDetailDiv>
    )
}

export default Hit;

