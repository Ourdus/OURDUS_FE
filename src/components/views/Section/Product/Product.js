import React from 'react';

{
  /* 상품 미리보기 */
}
function Product(props) {
  return (
    <div className="_product">
      <div>
        <img src={'https://google' + props.i + '.jpg'} />
      </div>
      <a className="ShopTag" href="">
        {props.product.made_by}
      </a>
      <br />
      <h4>{props.product.title}</h4>
      <hr></hr>
      <p>{props.product.review}</p>
    </div>
  );
}

export default Product;
