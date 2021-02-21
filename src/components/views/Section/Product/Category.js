import React from 'react';
import { Link } from 'react-router-dom';
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

export default React;
