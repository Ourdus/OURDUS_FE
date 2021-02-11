import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/CartPage_W.css';
import data from '../../data/CartData';
import { Remove } from '@material-ui/icons';

function CartPage_W({match}) {

    const [product, setProduct] = useState([]);
    // const [product, setProduct] = useState(data);
    const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것
    let allProduct = 0;
    let allDProduct = 0;

    useEffect(() => {
        axios
          .get(`/api/w/cart/${i}`)
        //   .then((result) => console.log(result.data.response));
          .then((result) => setProduct(result.data.response));
      }, []);

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
                        <Cart product={product[i]} user={i} key={i} />
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
                            allProduct = Number(allProduct) + Number(product[i].productDetailPrice);

                            return;
                        })
                    }
                    <val>{allProduct} 원</val>
                    <val>+</val>
                    {/* 배송비 총 합 구함 */}
                    {
                        product.map((a, i) => {
                            allDProduct = Number(allDProduct) + Number(3000);
                            return ;
                        })
                    }
                    <val>{allDProduct} 원</val>
                    <val>=</val>
                    <val> {allProduct + allDProduct} 원</val>
                </div>
                <div className="C_Main3">
                    <Link to="/w/payment/:id" className="Pay_Button"> <p> 주문하기 </p> </Link>
                </div>
            </content>

        </div>
    )
}


function Cart(props) {

    let deleteID = 0;

    return (
            <div className="C_Main1">
                <div className="C_Author">
                    {props.product.authorName} 작가님
                </div>
                <div className="C_Product">
                    {/* {props.product.img}<br /> */}
                    {props.product.productName}<br />
                    {props.product.optionInfo}<br />
                    개수 / {props.product.productDetailPrice}원 <br />
                    요청사항
                    <div className="C_Choose">
                    {/* 삭제 버튼 */}
                    <button onClick={() => {
                        deleteID = props.product.id;
                        axios.post(`/api/w/cart/delete/${props.user}`, {id : deleteID});
                    }}> 삭제 </button>
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

export default CartPage_W;
