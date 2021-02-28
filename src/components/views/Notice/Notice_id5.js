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

function Notice_id5(){
    return(
        <div>
            <h2>공지사항</h2>

            ❑  [오늘만 할인] 딱 24시간만 할인! 확인해보세요⏰<br/><br/><br/>
            2월 28일, 오늘만 할인😘<br/>
매일 0시부터 24시까지!<br/>
고민하는 순간 할인이 끝나요⏰<br/><br/>

최대 76% 할인되는 [오늘만 할인]으로<br/>
이번 주 행복하게 마무리하세요🌼<br/>
<a href="https://www.idus.com/w/showroom/1087">오늘의 할인 바로가기</a>

<br/>
        </div>
    );
}
export default Notice_id5