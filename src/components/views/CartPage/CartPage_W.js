import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../css/CartPage_W.css';
import data from '../../data/CartData';

function CartPage_W({match}) {

    const [product, setProduct] = useState(data);
    let allProduct = 0;
    let allDProduct = 0;

    return (
        <div className="CartPage">
            <nav className="C_Nav">
                <h4>CART</h4>
                <p>1. 장바구니  {` > `}  2. 주문결제  {` > `} 3. 주문완료</p>
            </nav>




            <content className="C_Main">
            {/* 장바구니에 담긴 상품 for 문으로 출력 */}
            {
                product.map((a, i) => {
                    return (
                        <Cart product={product[i]} key={i} />
                    );
                })
            }
                <div className="C_Select">
                </div>
                <div className="C_Main2">
                    <pre>작품금액</pre>
                    <pre>배송비</pre>
                    <pre>예정금액</pre>
                    {/* 상품 가격 총 합 구함 */}
                    {
                        product.map((a, i) => {
                            allProduct = Number(allProduct) + Number(product[i].price);

                            return;
                        })
                    }
                    <val>{allProduct} 원</val>
                    <val>+</val>
                    {/* 배송비 총 합 구함 */}
                    {
                        product.map((a, i) => {
                            allDProduct = Number(allDProduct) + Number(product[i].price_d);

                            return ;
                        })
                    }
                    <val>{allDProduct} 원</val>
                    <val>=</val>
                    <val> {allProduct + 3000} 원</val>
                </div>
                <div className="C_Main3">
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
                    {props.product.made_by} 작가님
                </div>
                <div className="C_Product">
                    {props.product.img}<br />
                    {props.product.title}<br />
                    옵션 선택 / 개수 / {props.product.price}원 <br />
                    요청사항
                    <div className="C_Choose">
                    <button onClick={ <Remove product={props.product} key={props.i} />}> 삭제 </button>
                </div>
                </div>
                <div className="C_Price">
                    <h4> 작품 가격 </h4>
                    <h5> {props.product.price} 원 </h5>
                </div>
                <div className="C_DPrice">
                    <h4> 배송비 </h4>
                    <h5> {props.product.price_d} 원 </h5>
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

export default CartPage_W;