import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Noticelist = styled.div`
color: orange
margin-left: 10%;

border-bottom: 2px solid lightgray;
border-top: 2px solid lightgray;

padding:1%;
`;

const Allnotice = styled.div`
border-top: 2px solid lightgray;
margin-left: 20%;
margin-right: 20%;
text-decoration: none;
border-left: 2px solid lightgray;
border-right: 2px solid lightgray;
`;

function Notice(){
    return(
        <Allnotice>
            <h2>공지사항</h2>
            <Link to={'/main/notice_id1'} >
            <Noticelist>❑  [쿠폰💌] 최애 작가님을 캐스팅하시겠습니까❓</Noticelist>
            </Link>
            <Link to={'/main/notice_id2'} >
            <Noticelist>❑  [2월할인] 나만 알고 싶은 최대 73% 할인💝</Noticelist>
            </Link>
            <Link to={'/main/notice_id3'} >
            <Noticelist>❑  💝차이(Chai)로 5만원 결제 시 4천원 할인💝</Noticelist>
            </Link>
            <Link to={'/main/notice_id4'} >
            <Noticelist>❑  금손 지인 추천하면 데뷔하고, 나는 💌쿠폰 받고💌</Noticelist>
            </Link>
            <Link to={'/main/notice_id5'} >
            <Noticelist>❑  [오늘만 할인] 딱 24시간만 할인! 확인해보세요⏰</Noticelist>
            </Link>
            <Link to={'/main/notice_id6'} >
            <Noticelist>❑ 아이디어스 이용약관 개정 안내(2021년 2월 16일)</Noticelist>
            </Link>
            <Link to={'/main/notice_id7'} >
            <Noticelist>❑ [2021년 2월] 카드사 무이자 할부 안내</Noticelist>
            </Link>
            <Link to={'/main/notice_id8'} >
            <Noticelist>❑ 핸드메이드 선물! 만드는 시간을 고려해 미리 준비해 주셔야 해요.</Noticelist>
            </Link>
            <Link to={'/main/notice_id9'} >
            <Noticelist>❑ 🏆핸드메이드 어워드 2020 수상작가 - 클래스 부문🏆</Noticelist>
            </Link>
            <Link to={'/main/notice_id10'} >
            <Noticelist>❑ 🏆핸드메이드 어워드 2020 수상작가 - 작품 부문🏆</Noticelist>
            </Link>
            <Link to={'/main/notice_id11'} >
            <Noticelist>❑ 아이디어스 이용약관 및 개인정보 처리방침 개정 안내(2020년 8월 5일)</Noticelist>
            </Link>
            <Link to={'/main/notice_id12'} >
            <Noticelist>❑ [첫 결제 3천원 즉시 할인] 차이CHAI 생애 첫 결제 혜택</Noticelist>
            </Link>
            <Link to={'/main/notice_id13'} >
            <Noticelist>[TIP] ❑ 아이디어스 선물하기! 핸드메이드로 더 큰 감동💝</Noticelist>
            </Link>
            <Link to={'/main/notice_id14'} >
            <Noticelist>❑ 아이디어스 개인정보 처리방침 개정 안내(2020년 5월 8일)</Noticelist>
            </Link>
            <Link to={'/main/notice_id15'} >
            <Noticelist>❑ [아이디어스 오프라인 숍] 보고 배우고 마시고 즐겨요❣ 오프라인에서 만나는 아이디어스👏</Noticelist>
            </Link>
            <Link to={'/main/notice_id16'} >
            <Noticelist>❑ 핸드메이드 문화를 만들다 #아이디어스 #성장스토리</Noticelist>
            </Link>
            <Link to={'/main/notice_id17'} >
            <Noticelist>❑ [작가 입점 안내]  금손이라면 누구나 작가가 될 수 있습니다.</Noticelist>
            </Link>
            <Link to={'/main/notice_id18'} >
            <Noticelist>❑ 아이디어스 지원 OS 버전 안내 드립니다.</Noticelist>
            </Link>
            <Link to={'/main/notice_id19'} >
            <Noticelist>❑ [아이디어스 크래프트 랩] 다채로운 공예를 직접 경험해보세요:)</Noticelist>
            </Link>
            <Link to={'/main/notice_id20'} >
            <Noticelist>❑ 작년 2019년 아이디어스에는 무슨일이 있었을까요?</Noticelist>
            </Link>

        </Allnotice>
    );
}
export default Notice