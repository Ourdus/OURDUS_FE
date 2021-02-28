import React from 'react';

{
  /* 상품 미리보기 */
}
function Class(props) {
  return (
    <div className="_class">
      <div>
        <img src={'https://google' + props.i + '.jpg'} />
      </div>
      <a className="ShopTag" href="">
        {props.Class.description}
      </a>
      <br />
      <h4>{props.Class.name}</h4>
      <hr></hr>
      <p>{props.Class.level}</p>
    </div>
  );
}

export default Class;
