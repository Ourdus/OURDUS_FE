import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import Product from '../../Section/Product/Product';

const ContentDetailDiv = styled.div`
  width: 1130px;
`;

function Mainrate() {
const [rate, setRate] = useState([]);
useEffect(() => {
    try {
      axios
      .get("/api/w/product/rate")
      .then(function(response) {
        setRate(response.data.response);
      })
    } catch (e) {
      console.log('error');
    }
  }, []);

    return (
        <ContentDetailDiv>
          <h4>높은 별점 상품</h4>
          {rate.slice(0, 10).map((a, i) => {
            return <Product product={rate[i]} i={i} key={i} />;
          })}
          <Link to ='./rate'>
            <button className="showMore" onclick>
              {' '}
              추천상품 더보기{' '}
            </button>
          </Link>
        </ContentDetailDiv>
    )
}

export default Mainrate;

