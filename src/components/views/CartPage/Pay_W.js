import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/Pay_W.css';
// import data from '../../data/CartData';

function Pay_W({match}) {

    const [product, setProduct] = useState([]);
    const i = match.params.id;
    let P_Price = product[i].price;
    let P_DPrice = product[i].price_d;

    useEffect(() => {
        axios
        .get(`/api/w/direct_pay/${i}`)
        .then((result) => {setProduct(result.data.response)});
    }, []);

    return (
        <div className="PayPage">
            <nav className="P_Nav">
                <h4>CART</h4>
                <p>1. 장바구니  {` > `}  2. 주문결제  {` > `} 3. 주문완료</p>
            </nav>

            <content className="P_Main">
            {/* 상품 정보 출력 */}
                <Cart product={product} />

                <div className="P_Main2">
                    <pre>작품금액</pre>
                    <pre>배송비</pre>
                    <pre>예정금액</pre>
                    {/* 상품 가격 */}
                    <val>{P_Price} 원</val>
                    <val>+</val>
                    {/* 배송비 */}
                    <val>{P_DPrice} 원</val>
                    <val>=</val>
                    {/* 합계 */}
                    <val> {Number(P_Price) + Number(P_DPrice)} 원</val>
                </div>
                <div className="P_Main3">
                    <Link to="/w/payment/:id" className="Pay_Button"> <p> 주문하기 </p> </Link>
                </div>
            </content>

        </div>
    )
}



function Cart(props) {
    return (
            <div className="C_Main1">
                <div className="C_Author">
                    {props.product.authorName} 작가님
                </div>
                <div className="C_Product">
                    {/* {props.product.img}<br /> */}
                    {props.product.productName}<br />
                    옵션 선택 / 개수 / {props.product.productDetailPrice}원 <br />
                    요청사항
                    <div className="C_Choose">
                    <button onClick={ <Remove product={props.product} key={props.i} />}> 삭제 </button>
                </div>
                </div>
                <div className="C_Price">
                    <h4> 작품 가격 </h4>
                    <h5> {props.product.productDetailPrice} 원 </h5>
                </div>
                <div className="C_DPrice">
                    <h4> 배송비 </h4>
                    <h5> 3000 원 </h5>
                </div>
            </div>
    )
}

function Remove() {
    return (
        <div>

        </div>
    )
}

export default Pay_W;