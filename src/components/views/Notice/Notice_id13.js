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

function Notice_id13(){
    return(
        <Noticelist>
            <h2>공지사항</h2>

            ❑  [쿠폰💌] 최애 작가님을 캐스팅하시겠습니까❓<br/>


WHO'S NEXT?<br/>
<br/>
❤내 최애 작가님❤ 클래스 데뷔시키기 도전!<br/>
<br/>
내가 듣고 싶은 작가님 추천만해도 할인 쿠폰💸<br/>
진짜 데뷔하면 클래스 공짜라던데..?!👀<br/>

<br/>
        </Noticelist>
    );
}
export default Notice_id13