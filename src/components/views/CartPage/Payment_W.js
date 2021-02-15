import react, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Payment_W() {
    const price = 43200;
    const price_d = 3000;
    const price_final = price + price_d;
    const [price_support, setPriceSupport] = useState(price_final);
    const [support, setSupport] = useState(false);
    const [privacyComment, setPrivacyComment] = useState("✔️ 개인정보 제공 동의");
    const [privacy, setPrivacy] = useState(false);

    return (
        <Payment>
            <Navbar>
                <NavName>주문 결제하기</NavName>
                <NavSide>1. 장바구니 {'>'} <NavSideBorder>2. 주문결제 </NavSideBorder> {'>'} 3. 주문완료</NavSide>
            </Navbar>
            <Content_1>
            </Content_1>
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
                <PrivacyButton>
                    <button onClick={() => {
                        if (privacy == false){
                            setPrivacy(true)
                            setPrivacyComment("✔️ 개인정보 제공 동의")
                        }
                        else if (privacy == true){
                            setPrivacy(false)
                            setPrivacyComment("✔️ 개인정보 제공 미동의")
                        }
                    }}>{privacyComment}</button>
                    <button onClick={() => {
                        if (privacy == false){
                            setPrivacy(true)
                        }
                        else if (privacy == true){
                            setPrivacy(false)
                        }
                    }}><h1>더보기</h1></button>
                </PrivacyButton>
            </Content_2>
        </Payment>
    );
}

// 전체 틀 디자인
const Payment = styled.div`
width: 800px;
height: 1600px;
margin: auto;
margin-top: 30px;
border: 1px solid lightgrey;
`

// 상단 바 디자인
const Navbar = styled.div`
width: 100%;
padding-top: 10px;
padding-bottom: 50px;
border: 1px solid lightpink;
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


// 왼쪽 사이드 다지인
const Content_1 = styled.div`
width: 440px;
height: 1000px;
display: inline-block;
border: 1px solid lightcoral;
`


// 오른쪽 사이드 디자인
const Content_2 = styled.div`
width: 335px;
height: 500px;
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
    padding: 15px 0px 15px 0px;
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
margin: 10px 25px 20px 25px;
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
    padding-right: 20px;
    border: none;
    background-color: white;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    text-align: right;
}
`


export default Payment_W;
