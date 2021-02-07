import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import data from '../../data/WorkData';
import data from '../../data/WorkDetailData';  //상품 상세 정보 (데이터)
import '../../css/WorkDetailPage.css';
import IMG1 from '../../img/DetailIMG1.jpg';


function WorkDetailPage({match}) {

    //const [product, setProduct] = useState(data);
    const [product, setProduct] = useState(data);
    const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것

    return (
        <div className="WorkDetail">
                <div className="Content1">
                    <div className="Img_big"><img src={IMG1} /></div>    
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="menu">
                        <div className="menu_1">
                            <h5>작품정보</h5>
                            <p>
                                🙌🏻레이저각인 화이트 1면 무료!!!🙌🏻<br /> 
                                🙌🏻각인할 "글자"와 "글씨체"는 요청사항에 적어주세요🙌🏻<br />

                                플레인 3mm반지는 내부가 평평하기 때문에 타이트하게 느끼시는 분들이 많습니다 :)<br />
                                정사이즈보다 1사이즈 크게 구매하시는 것을 권장드립니다.<br />
                                (※고객님들의 타이트함/넉넉함의 기준에 따라 착용감은 달라질 수 있습니다)<br />
                            </p>
                        </div>
                        <div className="menu_2">
                            <h5>배송 / 교환 / 환불</h5>
                            <p>       	
                                [배송] 5일 이내<br />
                                주문 후 제작에 들어가는 작품입니다.<br />
                                주말공휴일 제외하고 2~5일정도 제작기간이 소요됩니다.<br />
                                당일발송은 어려우니 양해부탁드립니다.<br />
                            </p>
                        </div>
                        <div className="menu_3">
                            <h5>구매후기 ({product[i].review_count})</h5>
                            <p>
                                배송진짜빠르고 이뻐요 근데 사이즈미스여서ㅠㅠ <br />
                                검지용으로 산건데 약지에 끼는게 이쁘네요<br />

                                약지 실측 47mm 검지 실측 50mm입니다<br />
                                평소 한국호수반지 4~5호를 약지에 끼고다녔구요<br />
                                미국4호 검지에도 들어가긴 하나 너무 꽉끼고 약지에 끼는게 젤 이쁘고 보기좋게 맞아요 참고하세요<br />
                            </p>
                        </div>
                        <div className="menu_4">
                            <h5>댓글</h5>
                            <p>
                                주문했는데 언제쯤 받을 수 있을까요??<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Content2">
                        {/* 작가 / 상품제목 / 할인률 / 할인가 / 원가 / 적립금액 / 구매후기 / 배송비 / 남은수량 */}
                        <div className="made_by">{product[i].made_by} {'>'}</div>
                        <div className="title">{product[i].product_title}</div>
                        <div className="discount_per">{product[i].discount_percent}</div>
                        <div className="discount_price">{product[i].discount_price}원</div>
                        <div className="price">{product[i].price}원</div>
                        <div className="reserves"><p>적립금&nbsp;&nbsp;&nbsp;</p> <p>{product[i].reserves}p</p></div>
                        <div className="review_count"><p>구매후기</p> <p>{product[i].review_count}개</p></div>
                        <div className="shipping_fee"><p>배송비&nbsp;&nbsp;&nbsp;</p> <p>{product[i].shipping_fee}원</p></div>
                        <div className="product_quantity"><p>수량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>{product[i].product_quantity}개 남음</p></div>
                        <div className="total_amount"><p>총 작품금액</p><span>{product[i].discount_price}원</span></div>
                        <div className="cart_button"><Link to={`/w/cart/${i}`}> <p>장바구니</p> </Link></div>
                        <div className="pay_button"><Link to={`/w/pay/${i}`}> <p>구매하기</p> </Link></div>
                </div>
        </div>
    );
}

export default WorkDetailPage;





// <div className="Content2">
// {/* 작가 / 상품제목 / 할인률 / 할인가 / 원가 / 적립금액 / 구매후기 / 배송비 / 남은수량 */}
// <div className="made_by">{product[i].made_by} {'>'}</div>
// <div className="title">{product[i].product_title}</div>
// <div className="discount_per">{product[i].discount_percent}</div>
// <div className="discount_price">{product[i].discount_price}원</div>
// <div className="price">{product[i].price}원</div>
// <div className="reserves"><p>적립금&nbsp;&nbsp;&nbsp;</p> <p>{product[i].reserves}p</p></div>
// <div className="review_count"><p>구매후기</p> <p>{product[i].review_count}개</p></div>
// <div className="shipping_fee"><p>배송비&nbsp;&nbsp;&nbsp;</p> <p>{product[i].shipping_fee}원</p></div>
// <div className="product_quantity"><p>수량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>{product[i].product_quantity}개 남음</p></div>
// <div className="total_amount"><p>총 작품금액</p><span>{product[i].discount_price}원</span></div>
// <div className="cart_button"><Link to={`/w/cart/${i}`}> <p>장바구니</p> </Link></div>
// <div className="pay_button"><Link to={`/w/pay/${i}`}> <p>구매하기</p> </Link></div>
// </div>
