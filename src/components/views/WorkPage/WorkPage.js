import React, { useState } from 'react';
// Browser as Link 라고 쓰면 오류남 ㅠㅠ 왜 ㅠㅠ ?
import { Link } from 'react-router-dom';
import '../../css/WorkPage.css';
import '../../css/Product.css';
import categoryData from '../../data/categoryData';
import data from '../../data/WorkData';
import Product from '../Section/Product/Product';
import Silder from '../ImgSlider/Silder';

// WorkPage Css는 Section 에 있는 product에 각각 입혀서 진행
// ../section/Product/product <=> WorkPage.css
function WorkPage() {
  let [product, setProduct] = useState(data);
  let [category, setCategory] = useState(categoryData);

  return (
    <div className="WorkPage">
      <nav className="promotion">
        <Silder />
      </nav>

      <content>
        <div className="category">
          <h4>카테고리</h4>
          {category.map((a, i) => {
            return <Category category={category[i]} key={i} />;
          })}
        </div>

        <div className="popular">
          <h4>인기상품</h4>
          {product.slice(0, 10).map((a, i) => {
            return <Product product={product[i]} i={i} key={i} />;
          })}
          <button className="showMore" onClick>
            {' '}
            인기상품 더보기{' '}
          </button>
        </div>
      </content>
    </div>
  );
}

// 카테고리 버튼
function Category(props) {
  return (
    <div className="category_button">
      {/* <Link to={`/work/category/${props.category.id}`}> {props.category.name} </Link> */}
      <Link to={'/work/category/' + props.category.id} className="_category_button">
        {' '}
        <span>{props.category.name}</span>{' '}
      </Link>
    </div>
  );
}

export default WorkPage;
