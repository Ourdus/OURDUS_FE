import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import IMG1 from '../../img/classtest.png';
import KakaoMap from "../ClassPage/Map";


function ClassDetailPage() {

    const classdata = [
        {
            author: "클라우드나인",
        }
    ]
    const reviews = [
        {
            name: "이름1",
            date: "2020-01-02",
            content: "특별하게 선물하려고 원데이클래스 신청했는데 결과물이 만족스러워서 제가 가질까 고민중이에요...🥲 차분하게 잘 알려주시고 무엇보다 제가 어떤 느낌으로 하고싶은지 잘 캐치해주셔서 결과물이 만족스러웠던거같아요! 제가 직접 그리고 하나뿐인 접시라고 생각하니 더 특별하고 좋습니당!!"
        },
        {
            name: "이름2",
            date: "2020-01-02",
            content: "특별하게 선물하려고 원데이클래스 신청했는데 결과물이 만족스러워서 제가 가질까 고민중이에요...🥲 차분하게 잘 알려주시고 무엇보다 제가 어떤 느낌으로 하고싶은지 잘 캐치해주셔서 결과물이 만족스러웠던거같아요! 제가 직접 그리고 하나뿐인 접시라고 생각하니 더 특별하고 좋습니당!!"
        },
        {
            name: "이름3",
            date: "2020-01-02",
            content: "특별하게 선물하려고 원데이클래스 신청했는데 결과물이 만족스러워서 제가 가질까 고민중이에요...🥲 차분하게 잘 알려주시고 무엇보다 제가 어떤 느낌으로 하고싶은지 잘 캐치해주셔서 결과물이 만족스러웠던거같아요! 제가 직접 그리고 하나뿐인 접시라고 생각하니 더 특별하고 좋습니당!!"
        },
        {
            name: "이름4",
            date: "2020-01-02",
            content: "특별하게 선물하려고 원데이클래스 신청했는데 결과물이 만족스러워서 제가 가질까 고민중이에요...🥲 차분하게 잘 알려주시고 무엇보다 제가 어떤 느낌으로 하고싶은지 잘 캐치해주셔서 결과물이 만족스러웠던거같아요! 제가 직접 그리고 하나뿐인 접시라고 생각하니 더 특별하고 좋습니당!!"
        },
    ]


    return (
        <ClassDetail>
            <LeftContent>
                <IMG_C>
                <img src={IMG1} />
                <IMGS_C>
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                </IMGS_C>
                </IMG_C>
                <Information_C>
                    <h6>소개</h6>
                    <h6>장소</h6>
                    <h6>참여후기</h6>
                    <h6>댓글</h6>
                    <Info>
                        <h1>안녕하세요 :)</h1>
                        <h1>{classdata[0].author} 입니다.</h1>
                        <h2>제가 진행 할 금손 클래스는 ...</h2>
                        <p>
                        수업시간<br /><br /><br />
                        수업당일 제작 - 2시간 소요예정<br /><br />
                        (제작시간은 개인차가 있습니다. 일정에 여유를 가지고 방문해주세요.)<br /><br />
                        클래스시간은 3타임으로 운영되고 있습니다.<br /><br /><br />
                        ★원하시는 시간대를 메세지로 예약해주세요★<br /><br /><br />
                        10:00~12:00<br /><br />
                        13:00~15:00<br /><br />
                        16:00~18:00<br /><br /><br />
                        수업정원은 4명입니다.<br /><br />
                        </p>
                        <h2>이런 분들에게 추천드려요 !</h2>
                        <p>
                        나만의 시간을 가질수 있어서 스트레스 해소에 좋습니다.<br />
                        정성스럽게 직접만든 작품을 선물해보세요.<br />
                        마크라메 매듭법을 배워 집에서 다양한 작품을 만들어 보세요.<br />
                        나만의 인테리어를 완성해보세요.<br />
                        </p>
                        <h2>메모</h2>
                        <p>
                        구성품<br /><br />
                        마크라메 작품 1개 + 데코용 조화, 리본 + 고리<br />
                        (수업이 끝난후 집에서 만드실수 있는 재료 별도 구매가능)<br />
                        </p>
                    </Info>
                    <Addr>
                        <h2>장소 및 편의시설</h2>
                        <KakaoMap />
                        <h3>취소 및 환불 정책</h3>
                        <h4>클래스 5일 전 취소 시</h4>
                        <h5><Green>100%</Green> 환불</h5>
                        <h4>클래스 4일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>5%</Green> 차감 후 환불</h5>
                        <h4>클래스 3일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>10%</Green> 차감 후 환불</h5>
                        <h4>클래스 2일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>20%</Green> 차감 후 환불</h5>
                        <h4>클래스 1일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>30%</Green> 차감 후 환불</h5>
                        <h4>클래스 당일 취소나 불참 시</h4>
                        <h5><Red>환불 불가</Red></h5>
                        <h4>예약 당일 밤 12시 이전 취소 시</h4>
                        <h5><Green>100%</Green> 환불</h5>
                    </Addr>
                    <Review>
                        <p>참여후기</p>
                        {
                        reviews.map((a, i) => {
                            return (
                                <div>
                                <h1>{reviews[i].name}</h1>
                                <h2>{reviews[i].date}</h2>
                                <h3>{reviews[i].content}</h3>
                                </div>
                            );
                        })
                        }
                    </Review>
                    <Comment>
                        <p>댓글</p>
                    </Comment>
                </Information_C>
            </LeftContent>
            <RightContent>
                Payment
            </RightContent>
        </ClassDetail>
    )
}

// 기타 css
const Red = styled.span`
color: red;
`
const Green = styled.span`
color: green;
`

// Main
const ClassDetail = styled.div`
width: 1000px;
padding-top: 50px;
margin: auto;
`
// Left
const LeftContent = styled.div`
width: 550px;
display: inline-block;
`
// IMG
const IMG_C = styled.div`
width: 100%;
margin: auto;
img {
    width: 100%;
}
`
const IMGS_C = styled.div`
padding: 15px 0px;
text-align: center;
img {
    width: 55px;
    margin-right: 4px;
}
`
// 클래스 정보
const Information_C = styled.div`
width: 100%;
padding: 20px 0px;
text-align: center;
h6 {
    width: 25%;
    padding: 15px 0px;
    margin-bottom: 50px;
    display: inline-block;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}
`
// Info
const Info = styled.div`
h1 {
    padding: 0px 0px 0px 20px;
    text-align: left;
    font-size: 25px;
    font-weight: bolder;
}
h2 {
    padding: 50px 0px 50px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
p {
    padding: 0px 20px;
    text-align: left;
}
`
// Addr
const Addr = styled.div`
width: 100%;
padding: 20px 0px;
h2 {
    padding: 50px 0px 50px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
h3 {
    padding: 50px 20px 20px 20px;
    text-align: left;
    font-size: 18px;
}
h4 {
    width: 37%;
    padding: 10px 0px 10px 20px;
    margin: 0;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    background-color: rgb(233, 233, 233);
    border-bottom: 1px solid rgb(206, 206, 206);
    /* border-right: 1px solid rgb(206, 206, 206); */
}
h5 {
    width: 63%;
    padding: 0px 0px 0px 20px;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
}
`
const Map = styled.div`
width: 500px;
`
// Review
const Review = styled.div`
p {
    padding: 70px 0px 30px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
h1 {
    padding: 20px 20px 10px 20px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
}
h2 {
    padding: 10px 20px;
    font-size: 10px;
    font-weight: 500;
    text-align: left;
}
h3 {
    padding: 10px 20px 40px 20px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    border-bottom: 1px solid lightgray;
}
`
// Comment
const Comment = styled.div`
p {
    padding: 70px 0px 30px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
`

// Right
const RightContent = styled.div`
width: 450px;
display: inline-block;
position: absolute;
border: 1px solid yellow;
`



export default ClassDetailPage;
