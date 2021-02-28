import styled from 'styled-components';
import React from 'react';
import sidebarimage from '../../img/sidebarimage.png';
/*sidebar 디자인을 위한 css*/
import { Link } from 'react-router-dom';

export const noticelist = styled.div`
margin-left: 10%;
margin-top: 5%;
border-bottom: 3px solid black;
`;

function Notice_id17(){
    return(
        <div>
            <h2>공지사항</h2>

            ❑  [쿠폰💌] 최애 작가님을 캐스팅하시겠습니까❓<br/>


WHO'S NEXT?<br/>
<br/>
❤내 최애 작가님❤ 클래스 데뷔시키기 도전!<br/>
<br/>
내가 듣고 싶은 작가님 추천만해도 할인 쿠폰💸<br/>
진짜 데뷔하면 클래스 공짜라던데..?!👀<br/>

<br/>
        </div>
    );
}
export default Notice_id17