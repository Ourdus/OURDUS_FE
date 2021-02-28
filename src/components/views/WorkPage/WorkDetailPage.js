import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../../data/WorkData';
// import data from '../../data/WorkDetailData';  //상품 상세 정보 (데이터)
import '../../css/WorkDetailPage.css';
import IMG1 from '../../img/DetailIMG1.jpg';
import { ColorLensOutlined } from '@material-ui/icons';
import starImg from '../../img/stars.png';


// 연동 코드 ------------------------------

function WorkDetailPage({match}) {

    const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것
    const [product, setProduct] = useState([]);
    const [tab, setTab] = useState(1);

    useEffect(() => {
        axios
          .get(`/api/w/product/${i}`)
        //   .then((result) => console.log(result.data.response));
          .then((result) => setProduct(result.data.response));
      }, []);
      

    return (
        <div className="WorkDetail">
                {/* 왼쪽 사이드 바 */}
                <div className="Content1">
                    <div className="Img_big"><img src={IMG1} /></div>    
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="Img_small"><img src={IMG1} /></div>
                    <div className="menu">
                        <div className="menubar_W">
                            <button onClick={()=>{setTab(1)}}>작품정보</button>
                            <button onClick={()=>{setTab(2)}}>배송 / 교환 / 환불</button>
                            <button onClick={()=>{setTab(3)}}>구매후기</button> 
                            <button onClick={()=>{setTab(4)}}>댓글</button>
                        </div>
                        <TabChanged tab = {tab} product={product} />
                    </div>
                </div>

                {/* 오른쪽 사이드 바 */}
                <div className="Content2">
                        {/* 작가 / 상품제목 / 할인률 / 할인가 / 원가 / 적립금액 / 구매후기 / 배송비 / 남은수량 */}

                        <div className="made_by">{product.authorName} {'>'}</div>
                        <div className="category_right">{product.categoryName}</div>
                        <div className="title">{product.name}</div>
                        {/* <div className="discount_per">{productt[0].discount_percent}</div> */}
                        <div className="discount_price">{product.price}원</div>
                        {/* <div className="price">{productt[0].price}원</div> */}
                        <div className="reserves"><p>적립금&nbsp;&nbsp;&nbsp;</p> <p>{(product.price)*0.05} p</p></div>
                        <div className="review_count"><p>구매후기</p> <p>{(product.rate)*0.1} ({product.review}개)</p></div>
                        <div className="shipping_fee"><p>배송비&nbsp;&nbsp;&nbsp;</p> <p>3000 원</p></div>
                        {/* <div className="product_quantity"><p>수량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>{product[i].product_quantity}개 남음</p></div> */}
                        <div className="total_amount"><p>총 작품금액</p><span>{product.price}원</span></div>
                        <div className="cart_button"><Link to={`/w/cart/${i}`}> <p>장바구니</p> </Link></div>
                        {/* <button className="cart_button" onClick={()=>{
                            axios.post('장바구니에 상품 추가할 경로', {id:상품아이디}, {options:옵션}, {등등})
                            }}> 장바구니 </button> ---------- 장바구니 추가한 상품 목록 axios로 전송 */}
                        <div className="pay_button"><Link to={`/w/directPay`}> <p>구매하기</p> </Link></div>
                        
                </div>
        </div>
    );
}

export default WorkDetailPage;

function TabChanged (props) {
    if(props.tab === 1) {
        return (
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
        )
    }
    else if(props.tab === 2){
        return (
            <div className="menu_2">
                <h5>배송 / 교환 / 환불</h5>
                <p>
                <div className="delivery1">
                <h3>
                    배송비
                </h3>
                <h4>
                    기본료 : 3000 원<br/>
                </h4>
                </div>
                <div className="delivery2">
                <h3>제작 / 배송</h3>
                <h4>7 일 이내</h4>
                </div>
                <div className="delivery3">
                <h3>교환 / 환불</h3>
                <h4>가능</h4>
                </div>
                </p>
            </div>
        )
    }
    // 페이지네이션
    else if(props.tab === 3){
        return (
        <div className="menu_3">
            <h5>구매후기 ({})</h5>
            <p>
                {
                    props.product.reviewDTOList.map((review, i) => {
                        const star = (review.rate)*2 ;
                        return (
                            <div>
                                <h1>{review.userName}</h1>
                                {/* <h2>{rate}</h2> */}
                                <h2><img src={starImg} /></h2>
                                <h3>{review.date}</h3>
                                <h4>{review.content}</h4>
                            </div>
                        );
                    })
                }
            </p>
            <div>
            </div>
        </div>
        )
    }
    // 무한 스크롤
    else if(props.tab === 4){
        return (
        <div className="menu_4">
            <h5>댓글</h5>
            <p>
                {
                    props.product.commentList.map((comment, i) => {
                        return (
                            <div>
                                <h1>• {comment.userName}</h1>
                                <h2>{comment.content}</h2>
                            </div>
                        );
                    })
                }
            </p>
        </div>
        )
    }
}





// 더미 데이터 --------------------------------------------

// function WorkDetailPage({match}, props) {

//     const [product, setProduct] = useState([]);
//     const [tab, setTab] = useState(1);
//     const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것
//     const productt = [
//             {
//             "id": 12,
//             "name": "product12_by_test1",
//             "price": 5000,
//             "rate": 45, //별점
//             "review": 120, //리뷰 수
//             "hit": 3000,  //즐겨찾기 수
//             "purchase": 5874, //구매수
//             "info": "작품내용입니다.",
//             "categoryId": 1,
//             "categoryName": "음료",
//             "authorId": 12,
//             "authorName": "작가 이름",
//             "optionNum": 0,
//             "commentList": []
//         }
//     ]
//     const reviews = [
//         {
//             name: "name1",
//             date: "2021-10-31",
//             star: 45,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name2",
//             date: "2021-1-31",
//             star: 50,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name3",
//             date: "2021-12-31",
//             star: 35,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name4",
//             date: "2021-08-31",
//             star: 40,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name1",
//             date: "2021-10-31",
//             star: 45,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name2",
//             date: "2021-1-31",
//             star: 50,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name3",
//             date: "2021-12-31",
//             star: 35,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         },
//         {
//             name: "name4",
//             date: "2021-08-31",
//             star: 40,
//             content: "배송도 정말 빠르고, 정성스러운 포장에 예쁜 상품까지 정말 완벽해요👍🏻 선물용으로 구매했는데 받은 사람도 너무나 예쁘다고 기뻐해서 좋았어요! 감사합니다💕"
//         }
//     ]

//     const comments = [
//         {
//             name: "name1",
//             content: "작가님 메세지 확인해주세요 !"
//         },
//         {
//             name: "name2",
//             content: "하이용"
//         },
//         {
//             name: "name3",
//             content: "헤헷"
//         },
//         {
//             name: "name4",
//             content: "우하하하하ㅏㅎ하ㅏㅎ하하하하하하하ㅏㅎ하하ㅏ하하하하하하핳하하하하ㅏ하ㅏ"
//         },
//         {
//             name: "name5",
//             content: "작가님 메세지 확인해주세요 !"
//         },
//         {
//             name: "name6",
//             content: "하이용"
//         },
//         {
//             name: "name7",
//             content: "헤헷"
//         },
//         {
//             name: "name8",
//             content: "우하하하하ㅏㅎ하ㅏㅎ하하하하하하하ㅏㅎ하하ㅏ하하하하하하핳하하하하ㅏ하ㅏ"
//         }
//     ]
//     // const [commentss, setCommnetss] = useState(comments.map(0, 3))


//     useEffect(() => {
//         axios
//           .get(`/api/w/product/${i}`)
//         //   .then((result) => console.log(result.data.response));
//           .then((result) => setProduct(result.data.response));
//       }, []);


//     return (
//         <div className="WorkDetail">
//                 {/* 왼쪽 사이드 바 */}
//                 <div className="Content1">
//                     <div className="Img_big"><img src={IMG1} /></div>    
//                     <div className="Img_small"><img src={IMG1} /></div>
//                     <div className="Img_small"><img src={IMG1} /></div>
//                     <div className="Img_small"><img src={IMG1} /></div>
//                     <div className="Img_small"><img src={IMG1} /></div>
//                     <div className="menu">
//                         <div className="menubar_W">
//                             <button onClick={()=>{setTab(1)}}>작품정보</button>
//                             <button onClick={()=>{setTab(2)}}>배송 / 교환 / 환불</button>
//                             <button onClick={()=>{setTab(3)}}>구매후기</button> 
//                             <button onClick={()=>{setTab(4)}}>댓글</button>
//                         </div>
//                         <TabChanged tab = {tab} reviews={reviews} comments={comments} productt={productt} />
//                     </div>
//                 </div>

//                 {/* 오른쪽 사이드 바 */}
//                 <div className="Content2">
//                         {/* 작가 / 상품제목 / 할인률 / 할인가 / 원가 / 적립금액 / 구매후기 / 배송비 / 남은수량 */}

//                         <div className="made_by">{productt[0].authorName} {'>'}</div>
//                         <div className="category_right">{productt[0].categoryName}</div>
//                         <div className="title">{productt[0].name}</div>
//                         {/* <div className="discount_per">{productt[0].discount_percent}</div> */}
//                         <div className="discount_price">{productt[0].price}원</div>
//                         {/* <div className="price">{productt[0].price}원</div> */}
//                         <div className="reserves"><p>적립금&nbsp;&nbsp;&nbsp;</p> <p>{(productt[0].price)*0.05} p</p></div>
//                         <div className="review_count"><p>구매후기</p> <p>{(productt[0].rate)*0.1} ({productt[0].purchase}개)</p></div>
//                         <div className="shipping_fee"><p>배송비&nbsp;&nbsp;&nbsp;</p> <p>3000 원</p></div>
//                         {/* <div className="product_quantity"><p>수량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>{product[i].product_quantity}개 남음</p></div> */}
//                         <div className="total_amount"><p>총 작품금액</p><span>{product.price}원</span></div>
//                         <div className="cart_button"><Link to={`/w/cart/${i}`}> <p>장바구니</p> </Link></div>
//                         {/* <button className="cart_button" onClick={()=>{
//                             axios.post('장바구니에 상품 추가할 경로', {id:상품아이디}, {options:옵션}, {등등})
//                             }}> 장바구니 </button> ---------- 장바구니 추가한 상품 목록 axios로 전송 */}
//                         <div className="pay_button"><Link to={`/w/directPay`}> <p>구매하기</p> </Link></div>
                        
//                 </div>
//         </div>
//     );
// }

// export default WorkDetailPage;

// function TabChanged (props) {
//     if(props.tab === 1) {
//         return (
//             <div className="menu_1">
//                 <h5>작품정보</h5>
//                 <p>
//                     🙌🏻레이저각인 화이트 1면 무료!!!🙌🏻<br /> 
//                     🙌🏻각인할 "글자"와 "글씨체"는 요청사항에 적어주세요🙌🏻<br />

//                     플레인 3mm반지는 내부가 평평하기 때문에 타이트하게 느끼시는 분들이 많습니다 :)<br />
//                     정사이즈보다 1사이즈 크게 구매하시는 것을 권장드립니다.<br />
//                     (※고객님들의 타이트함/넉넉함의 기준에 따라 착용감은 달라질 수 있습니다)<br />
//                 </p>
//             </div>
//         )
//     }
//     else if(props.tab === 2){
//         return (
//             <div className="menu_2">
//                 <h5>배송 / 교환 / 환불</h5>
//                 <p>
//                 <div className="delivery1">
//                 <h3>
//                     배송비
//                 </h3>
//                 <h4>
//                     기본료 : 3000 원<br/>
//                 </h4>
//                 </div>
//                 <div className="delivery2">
//                 <h3>제작 / 배송</h3>
//                 <h4>7 일 이내</h4>
//                 </div>
//                 <div className="delivery3">
//                 <h3>교환 / 환불</h3>
//                 <h4>가능</h4>
//                 </div>
//                 </p>
//             </div>
//         )
//     }
//     // 페이지네이션
//     else if(props.tab === 3){
//         return (
//         <div className="menu_3">
//             <h5>구매후기 ({props.productt[0].review})</h5>
//             <p>
//                 {
//                     props.reviews.map((review, i) => {
//                         const rate = (review.star)*2 ;
//                         return (
//                             <div>
//                                 <h1>{review.name}</h1>
//                                 {/* <h2>{rate}</h2> */}
//                                 <h2><img src={starImg} /></h2>
//                                 <h3>{review.date}</h3>
//                                 <h4>{review.content}</h4>
//                             </div>
//                         );
//                     })
//                 }
//             </p>
//         </div>
//         )
//     }
//     // 무한 스크롤
//     else if(props.tab === 4){
//         return (
//         <div className="menu_4">
//             <h5>댓글</h5>
//             <p>
//                 {
//                     props.comments.map((comment, i) => {
//                         return (
//                             <div>
//                                 <h1>• {comment.name}</h1>
//                                 <h2>{comment.content}</h2>
//                             </div>
//                         );
//                     })
//                 }
//             </p>
//         </div>
//         )
//     }
// }
