import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG1 from '../../img/DetailIMG1.jpg';
import { Phone } from '@material-ui/icons';

function Payment_W() {
    const price = 43200;
    const price_d = 3000;
    const price_final = price + price_d;
    const [price_support, setPriceSupport] = useState(price_final);
    const [support, setSupport] = useState(false);
    const [privacyComment, setPrivacyComment] = useState("✔️ 개인정보 제공 동의");
    const [privacy, setPrivacy] = useState(false);
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState([]);
    const showMoretext = [ "‣ 제공받는 자 : 투링각인반지샵, 플로썸, 소블링커피, 그랑캔들 ",
                           "‣ 목적 : 판매자와 구매자 사이의 원활한 거래 진행, 상품의 배송을 위한 배송지 확인, 고객상담 및 불만처리 등 ",
                           "‣ 정보 : 별명, 이름, 전화, 주소 ",
                           "‣ 보유기간 : 발송완료 후 15일",
                           "아이디어스는 통신판매중개자이며 통신판매의 당사자가 아닙니다.",
                           "따라서 아이디어스는 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다. "];

    // 고객 정보 (가상 데이터)
    const informations = [
        {
            name: "chlthf",
            PhoneNum: "010-3145-0137",
            address: "서울특별시"
        },
        {
            title: "각인 써지컬 3mm 반지",
            option: "옵션 블라블라",
            price: 21000
        },
        {
            title: "레터링 케이크 캔들",
            option: "옵션 뭐라뭐라",
            price: 36000
        }
    ];


    return (
        <Payment>
            <Navbar>
                <NavName>주문 결제하기</NavName>
                <NavSide>1. 장바구니 {'>'} <NavSideBorder>2. 주문결제 </NavSideBorder> {'>'} 3. 주문완료</NavSide>
            </Navbar>
            {/* 왼쪽 사이드 바 */}
            <Content_1>
                <Customer>
                    <Title>주문고객</Title>
                    <h2>주문자 정보</h2>
                    <h3>{informations[0].name}</h3>
                    <h2><Important>*</Important> 전화번호</h2>
                    <h3>{informations[0].PhoneNum}</h3>
                </Customer>
                <Address>
                    <Title>배송 주소</Title>
                    <h2><Important>*</Important> 받는 분</h2>
                    <input type="text" name="text" placeholder={informations[0].name} />
                    {/* <Input>{informations[0].name}</Input> */}
                    <h2><Important>*</Important> 전화번호</h2>
                    <input type="text" name="text" placeholder={informations[0].PhoneNum} />
                    {/* <Input>{informations[0].PhoneNum}</Input> */}
                    <h2><Important>*</Important> 주소</h2>
                    <input type="text" name="text" placeholder={informations[0].address} />
                    {/* <Input>{informations[0].address}</Input> */}
                </Address>
                <WorkInfo>
                    <Title>주문 작품 정보</Title>
                    <p>N 개</p>
                    <Works>
                        <img src={IMG1} />
                        <h1>{informations[1].title}</h1>
                        <h2>• {informations[1].option}</h2>
                        <h3>작품 금액</h3>
                        <h4>{informations[1].price} 원</h4>
                        <h3>배송비</h3>
                        <h4>3000 원</h4>
                    </Works>
                    <Works>
                        <img src={IMG1} />
                        <h1>{informations[2].title}</h1>
                        <h2>• {informations[2].option}</h2>
                        <h3>작품 금액</h3>
                        <h4>{informations[2].price} 원</h4>
                        <h3>배송비</h3>
                        <h4>3000 원</h4>
                    </Works>
                </WorkInfo>
                <PaymentMethod>
                    <Title>결제 수단</Title><br />
                    <input name="radio" id="radio1" type="radio" />간편하게 카드 결제<br />
                    <input name="radio" id="radio1" type="radio" />복잡하게 카드 결제<br />
                    <input name="radio" id="radio1" type="radio" />계좌이체 / 무통장입금<br />
                    <input name="radio" id="radio1" type="radio" />휴대폰 결제<br />
                </PaymentMethod>


            </Content_1>
            {/* 오른쪽 사이드 바 */}
            <Content_2>
                <p>
                <h1>결제 정보</h1>
                <h2>작품금액</h2>
                <h3>{price} 원</h3>
                <h2>배송비</h2>
                {/* 배송비 => map 돌려서 상품 개수 * 3000 해줌 */}
                <h3>{price_d} 원</h3>
                <h2>작가님 할인 혜택</h2>
                <h3>0 원</h3>
                <h2>제주 / 산간 추가비용</h2>
                <h3>0 원</h3>
                <h2>아이디어스 할인 혜택</h2>
                <h3>0 원</h3>
                </p>
                <h4>최종 결제 금액</h4>
                <h5>{price_support} 원</h5>
                {/* 작가님 후원 버튼 */}
                <SupportButton>
                    <button onClick={() => {
                        if (support == false){
                            setPriceSupport(Math.ceil(price_final/1000)*1000)
                            setSupport(true)
                        }
                        else if (support == true){
                            setPriceSupport(price_final)
                            setSupport(false)
                        }
                    }}>✔️ 작가님을 후원합니다</button>
                </SupportButton>
                {/* 개인정보제공 버튼 */}
                <PrivacyButton>
                    <button onClick={() => {
                        if (privacy == false){
                            setPrivacy(true)
                            setPrivacyComment("❍ 개인정보 제공 동의")
                        }
                        else if (privacy == true){
                            setPrivacy(false)
                            setPrivacyComment("✖️ 개인정보 제공 미동의")
                        }
                    }}>{privacyComment}</button>
                    <button onClick={() => {
                        if (show == false){
                            setShow(true)
                            setShowMore("")
                        }
                        else if (show == true){
                            setShow(false)
                            // setShowMore(showMoretext)
                            showMoretext.map((i)=>{
                                setShowMore(...showMore, showMoretext)
                            })
                        }
                    }}><h1>더보기</h1><h2>{showMore}</h2></button>
                </PrivacyButton>
                <PayButtonLast>
                    <button onClick={() => {alert("신용카드를 등록해주세요.")}}>{price_support}원 바로 결제</button>
                </PayButtonLast>
            </Content_2>
        </Payment>
    );
}


// 전체 틀 디자인
const Payment = styled.div`
width: 800px;
margin: auto;
margin-top: 30px;
`

// 상단 바 디자인
const Navbar = styled.div`
width: 100%;
padding-top: 10px;
padding-bottom: 40px;
`
const NavName = styled.div`
width: 50%;
padding-left: 20px;
display: inline-block;
text-align: left;
font-size: 25px;
font-weight: 600;
`
const NavSide = styled.div`
width: 50%;
padding-right: 20px;
display: inline-block;
text-align: right;
`
const NavSideBorder = styled.div`
font-weight: bolder;
display: inline-block;
`


// 왼쪽 사이드 다지인 --------------------------------------------------
const Content_1 = styled.div`
width: 440px;
display: inline-block;
`
// 별에 빨간색 표시
const Important = styled.span`
color: red;
`
// 박스마다 적힌 상단 정보 css
const Title = styled.div`
width: 90%;
padding-bottom: 20px;
display: inline-block;
font-size: 18px;
font-weight: bolder;
`

// 주문 고객
const Customer = styled.div`
width: 100%;
padding: 15px;
margin-bottom: 20px;
border: 1px solid lightgray;
border-radius: 3px;
box-shadow: 3px 3px 5px lightgray;
h2 {
    width: 20%;
    padding: 0px 5px;
    text-align: left;
    display: inline-block;
    font-size: 13px;
}
h3 {
    width: 80%;
    padding: 0px 10px;
    text-align: left;
    display: inline-block;
    font-size: 13px;
}
`
// 주소
const Address = styled.div`
width: 100%;
padding: 15px;
margin-bottom: 20px;
border: 1px solid lightgray;
border-radius: 3px;
box-shadow: 3px 3px 5px lightgray;
h2 {
    width: 20%;
    padding: 0px 5px;
    text-align: left;
    display: inline-block;
    font-size: 13px;
}
input {
    width: 70%;
    padding: 0px 10px;
    margin-left: 10px;
    text-align: left;
    display: inline-block;
    font-size: 13px;
}
`
// 주문 작품 정보
const WorkInfo = styled.div`
width: 100%;
padding: 15px 15px 5px 15px;
margin-bottom: 20px;
border: 1px solid lightgray;
border-radius: 3px;
box-shadow: 3px 3px 5px lightgray;
p {
    width: 10%;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
}
img {
    width: 90px;
    padding: 10px 5px 5px 5px;
    display: inline-block;
}
h1 {
    display: inline-block;
    padding: 0px 0px 0px 15px;
    text-align: left;
    font-size: 15px;
    font-weight: 500;
}
h2 {
    padding: 30px 0px 0px 5px;
    padding-bottom: 20px;
    text-align: left;
    border-bottom: 1px solid lightgray;
    font-size: 13px;
}
h3 {
    padding: 0px 0px 0px 10px;
    width: 50%;
    display: inline-block;
    text-align: left;
    font-size: 13px;
}
h4 {
    padding: 0px 10px 0px 0px;
    width: 50%;
    display: inline-block;
    text-align: right;
    font-size: 13px;
}
`
const Works = styled.div`
width: 100%;
padding: 10px 0px;
margin-bottom: 10px;
border-top: 2px solid gray;
`
// 결제 수단
const PaymentMethod = styled.div`
width: 100%;
padding: 15px;
margin-bottom: 20px;
border: 1px solid lightgray;
border-radius: 3px;
box-shadow: 3px 3px 5px lightgray;
input {
    margin: 5px 10px 15px 5px;
}
`



// 오른쪽 사이드 디자인
const Content_2 = styled.div`
width: 335px;
margin: 0px 0px 10px 24px;
display: inline-block;
position: absolute;
border: 3px solid gray;
p {
    padding-bottom: 10px;
    margin: 0px 15px 20px 15px;
    border-bottom: 1px solid grey;
}
h1 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding: 20px 0px 20px 0px;
    border-bottom: 1px solid grey;
}
h2 {
    width: 50%;
    padding-left: 20px;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
}
h3 {
    width: 50%;
    padding-right: 20px;
    display: inline-block;
    text-align: right;
    font-size: 15px;
    font-weight: 400;
}
h4 {
    width: 50%;
    padding-left: 30px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
}
h5 {
    width: 50%;
    padding-right: 30px;
    display: inline-block;
    text-align: right;
    font-size: 18px;
    font-weight: 600;
}
`
// 작가님 후원 버튼
const SupportButton = styled.div`
padding: 10px 0px;
margin: 25px 25px 0px 25px;
background-color: lightgray;
text-align: center;
font-size: 15px;
button {
    border: none;
    background-color: lightgray;
}
`
// 개인정보 제공 버튼
const PrivacyButton = styled.div`
padding: 0px 0px;
margin: 10px 25px 10px 25px;
button {
    width: 50%;
    border: none;
    background-color: white;
    display: inline-block;
    font-size: 13px;
    text-align: left;
}
h1 {
    width: 100%;
    padding-right: 10px;
    border: none;
    background-color: white;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    text-align: right;
}
h2 {
    width: 400px;
    padding: 15px 50px;
    position: absolute;
    font-weight: lighter;
}
`
// 최종 결제 버튼
const PayButtonLast = styled.div`
width: 80%;
margin: auto;
margin-bottom: 30px;
background-color: lightgray;
button {
    width: 100%;
    padding: 15px;
    margin: auto;
    appearance: none;
    border: 1px lightgray;
    font-size: 18px;
    font-weight: 500;
}
`

export default Payment_W;
