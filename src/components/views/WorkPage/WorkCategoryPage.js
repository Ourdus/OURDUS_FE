import React, {useState} from 'react';
import Product from '../Section/Product/Product';
import '../../css/Product.css';
import data from '../../data/WorkData';

function WorkCategorypage() {

    const [product, setProduct] = useState(data)

    return(
        <div>
            <h3> 카테고리 이름 </h3>
            <div>배송</div>
            <div>가격대</div>
            <div>이미지만 볼래요</div>
            <div>인기순</div>

            {
                product.map((a, i) => {
                    return <Product product={product[i]} i={i} key={i} />
                })
            }
            
        </div>
    );
}

export default WorkCategorypage;
