import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/WorkData';

function WorkDetailPage({match}) {

    const [product, setProduct] = useState(data);
    const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것

    return (
        <div>
            <div>
                <h4>IMG : {product[i].img}</h4>
                <h6>작가이름 : {product[i].made_by}</h6>
                <h6>상품명 : {product[i].title}</h6>
                <h6>별점  : {product[i].review}</h6>
                <Link to={`/w/cart/${i}`}> 장바구니 </Link>
            </div>

            <content>
                
            </content>
        </div>
    );
}

export default WorkDetailPage;
