import styled from 'styled-components';
import React from 'react';
import sidebarimage from '../../img/sidebarimage.png';
/*sidebar 디자인을 위한 css*/
import { Link } from 'react-router-dom';

export const Noticelist = styled.div`
border-top: 2px solid lightgray;
margin-left: 20%;
margin-right: 20%;
text-decoration: none;
border-left: 2px solid lightgray;
border-right: 2px solid lightgray;
border-bottom: 2px solid lightgray;
`;

function Notice_id4(){
    return(
        <Noticelist>
            <h2>공지사항</h2>
            ❑  금손 지인 추천하면 데뷔하고, 나는 💌쿠폰 받고💌<br /><br /><br /><br />


WHO'S NEXT?<br /><br />

❤내 최애 작가님❤ 클래스 데뷔시키기 도전!<br /><br />

내가 듣고 싶은 작가님 추천만해도 할인 쿠폰💸<br />
진짜 데뷔하면 클래스 공짜라던데..?!👀<br />
)))<a href="https://www.idus.com/w/event/main/artist101?value=www.idus.com/w/event/main/artist101&value2=%ED%81%B4%EB%9E%98%EC%8A%A4%EC%9E%91%EA%B0%80%EC%B6%94%EC%B2%9C%EC%9D%B4%EB%B2%A4%ED%8A%B8#/">지금 클릭하고 바로 확인하기</a><br />


        </Noticelist>
    );
}
export default Notice_id4