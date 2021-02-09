import React from 'react';

{
}
function Class(props) {
  return (
    <div className="_class">
      <img src={'https://google' + props.i + '.jpg'} />
      <h5>{props.product.made_by}</h5>
      <h4>{props.product.title}</h4>
      <p>{props.product.review}</p>
      <button color="#F3BC4E" className="btn_interest">
        관심 등록하고 알림받자!
      </button>
    </div>
  );
}
export default Class;
