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
function Notice_id3(){
    return(
        <Noticelist>
            <h2>공지사항</h2>
            💝차이(Chai)로 5만원 결제 시 4천원 할인💝<br /><br /><br />
            아이디어스 X 차이 프로모션<br />
2/24부터 2/28까지 차이로 5만원 결제 시 4천원 할인! <br /><br />

[유의사항]<br />
- 기간 내 1인 1회에 한하여 해당 할인이 적용됩니다. (2/24~2/28)<br />
- 본 프로모션은 차이 또는 당사의 사정에 따라 조기종료 및 변경될 수 있습니다.<br />
- 할인 적용을 위해 최신 아이디어스와 차이 앱 최신버전으로 업데이트 해주세요.<br /><br />

[자주 묻는 질문]<br />
Q. 결제 금액 기준 5만원 이상 시 4천원 할인되는거죠? <br />
A. 네, 5만원 이상 결제 시 4천원 할인됩니다.<br /><br />

Q. 생애 첫결제가 아니어도 할인 되나요?<br />
A. 네! 단, 생애 첫결제 프로모션도 해당기간에 현재와 동일하게 진행되므로,<br />
생애첫결제 고객은 두 프로모션 중 할인금액이 높은 프로모션 적용을 받게 됩니다 :<br />

        </Noticelist>
    );
}
export default Notice_id3