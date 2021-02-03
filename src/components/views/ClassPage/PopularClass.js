import React, { useState } from 'react';
import '../../css/WorkPage.css';
import '../../css/Class.css';
import data from '../../data/WorkData';
import ClassP from '../Section/Class/ClassP';

/* 화면에 10개까지만 노출  */
function PopularClass() {
  let [product, setProduct] = useState(data);
  return (
    <div>
      <div className="popularClass">
        <h5>클래스 _ 인기 클래스</h5>
        <p></p>
        {product.map((a, i) => {
          return <ClassP product={product[i]} i={i} key={i} />;
        })}
      </div>
      <button className="_showMore" onClick>
        {' '}
        인기상품 더보기{' '}
      </button>
    </div>
  );
}

export default PopularClass;
