import React from 'react';
import { Link } from 'react-router-dom';

    {/* 상품 미리보기 */}
    function Product(props){
      return(
        <div className="_product">
          <img src = {'https://google'+ props.i +'.jpg'} />
          <h5>{props.product.made_by}</h5>
          {/* id 없어서 img로 대체한 것 */}
          <Link to={'/work/detail/' + props.product.img}> {props.product.title} </Link>
          <p>{props.product.review}</p>
        </div>
      )

}

export default Product;