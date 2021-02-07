import React, { useState } from 'react';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import '../../css/Class.css';
import data from '../../data/ClassData';
import Product from '../Section/Product/Product';
import Class from '../Section/Class/Class';
import Silder from '../ImgSlider/Silder';

function ClassPage() {
  let [product, setProduct] = useState(data);

  return (
    <div className="WorkPage">
      <nav>
        <Silder />
      </nav>

      <content>
        <div className="popular">
          <h4> 얼리버드 할인 클래스</h4>
          {product.map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            할인 클래스 더보기{' '}
          </button>
        </div>

        <div className="recommend">
          <h4>지금 주목받는 클래스</h4>
          {product.map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onclick>
            {' '}
            주목 상품 더보기{' '}
          </button>
        </div>

        <div className="new">
          <h4>관심있는 클래스가 있나요?</h4>
          {product.map((a, i) => {
            return <Class product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            관심 클래스 더보기
          </button>
        </div>

        <div className="review">
          <h4>베스트 후기</h4>
          {product.map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            베스트 후기 더보기{' '}
          </button>
        </div>

        <div className="review">
          <h4>전체 클래스</h4>
          {product.map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            전체 클래스 더보기{' '}
          </button>
        </div>
      </content>
    </div>
  );
}

export default ClassPage;
