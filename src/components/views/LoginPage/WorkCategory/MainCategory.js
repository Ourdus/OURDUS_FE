import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Category from '../../Section/Product/Category'

function MainCategory() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        try {
          axios
          .get('/api/w/category')
          .then(function(response) {
            setCategory(response.data.response);
          })
        } catch (e) {
          console.log('error');
        }
      }, []);
    return (
        <div>
        <h4>전체 카테고리</h4>
          {category.map((a, i) => {
            return <Category category={category[i]} key={i} />;
          })}
        </div>
    )
}

export default MainCategory;