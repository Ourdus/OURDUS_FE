import styled from 'styled-components';
import React from 'react';
import sidebarimage from '../../img/sidebarimage.png';
/*sidebar 디자인을 위한 css*/
import { Link } from 'react-router-dom';
import noticeid6 from '../../img/noticeid6.png';
export const Noticelist = styled.div`
border-top: 2px solid lightgray;
margin-left: 20%;
margin-right: 20%;
text-decoration: none;
border-left: 2px solid lightgray;
border-right: 2px solid lightgray;
border-bottom: 2px solid lightgray;
`;

function Notice_id6(){
    return(
        <Noticelist>
            <h2>공지사항</h2>

            ❑ 아이디어스 이용약관 개정 안내(2021년 2월 16일)<br/><br/>

안녕하세요.<br/>
아이디어스 입니다.<br/><br/>

"온라인 클래스 서비스" 이용 약관의 용어 정의가 변경됨에 따라 기존 이용 약관에서 분리 개정되었습니다.<br/>
자세한 사항은 아래와 같습니다.<br/><br/>

❑ 온라인 클래스 개정안 시행일자 : 2021년3월2일 (화)<br/>
❑ 온라인 클래스 이용약관 전문보기<br/><br/><br/>


❑ 온라인 클래스 서비스 이용 약관<br/><br/>
<img src={noticeid6} />
        </Noticelist>
    );
}
export default Notice_id6