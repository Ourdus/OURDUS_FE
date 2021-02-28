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

function Notice_id2(){
    return(
        <div>
            <h2>공지사항</h2>
            ❑  [2월할인] 나만 알고 싶은 최대 73% 할인💝

나만 알고 싶은 최대73%할인 💝🎁<a href="https://www.idus.com/w/showroom/1038">(클릭)</a>🎁💝<br/>
선물 할일 많은 2월,<br/>
정성 가득한 '이거' 어떠세요? <br/>

한번만 사용한 사람은 없다는 아이템들,<br/>
이렇게까지 할인해도 되나요.....?<br/>

이제 곧 종료됩니다!!!!!!!! <a href="https://www.idus.com/w/showroom/1038">지금 바로 가기</a><br/>
        </div>
    );
}
export default Notice_id2