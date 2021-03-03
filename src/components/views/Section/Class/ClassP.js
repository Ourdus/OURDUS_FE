import React from 'react';

function ClassP(props) {
  return (
    <div className="_classP">
      <img src={'https://google' + props.i + '.jpg'} />
      <h5>{props.product.category}</h5>
      <h4>{props.product.title}</h4>
      <h5>{props.product.review}</h5>
    </div>
  );
}

export default ClassP;
