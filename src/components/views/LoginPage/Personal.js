import React from 'react';
import styled from 'styled-components';
import '../../css/Login.css';
import sidebarimage from '../../img/sidebarimage.png';
/*sidebar 디자인을 위한 css*/
export const sidebar = styled.div`
    margin-left: 5%;
    margin-right: 2%;
    width:10%;
    border: 1px solid lightgrey;
    border-radius: 3%;
    height: max-content;
`;

export const topsidebar = styled.div`
    font-size: smaller;
    font-style: inherit;
    text-align: center;
    border: 1px solid orange;
`;
export const headsidebar = styled.div`
    padding:10%;
    padding-left:20%;
    background-color: orange;
    color: white;
`;
export const smallsidebar = styled.div`
    margin-top: 1%;
    padding:10%;
    line-height: 200%;
    border-bottom: 1px solid lightgray;
    font-size: smaller;
`;
export const orderlist = styled.div`
margin-left: 5%;
`;
export const smallsidebartopic = styled.div`
text-shadow: lightgreen;
font-weight: bolder;
`;
export const sidebarbutton = styled.div`
background: white;
text-decoration: none;
border: 0;
outline: 0;
`;
export const PersonalWrapper = styled.div`
display: flex;
`;


const PersonalSection = styled.div`
  display: flex;
  width: 60%;
  margin: 0px 30% 0px 5%;
  border: 1px solid lightgrey;
`;

const PersonalFront = styled.div`
  width: 170px;
  height: 50px;
  border: 1px solid lightgray;
  padding: 15px 20px;
  background-color: #f6f8f6;
`;

const PersonalInput = styled.input`
  margin: 10px 0% 0px 5%;
  width: 200px;
`;

const StyledButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 35px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  background-color: white;
  margin: 5px 0% 0px 2%;
  font-size: 13px;
`;



function Personal() {
  return (
    
    <div className="PersonalWrapper">
       <div className="sidebar">
        <div className="topsidebar">
          <button className="sidebarbutton" href="#">
            <img src={sidebarimage} />
          </button>
          <br />
          아기손
          <h6>아이유</h6>
          
        </div>
        <div className="headsidebar">MYMENU</div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">주문배송</div>
          <div className="sidebarlink">
            {' '}
            
              주문내역
           
            <br />
            취소/환불내역
          </div>
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">알림 및 메시지</div>
           알림
          <br />
          메시지
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">선물함</div>
           받은 선물함
          <br />
          보낸 선물함
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">나의 구매후기</div>
          후기 쓰기
          <br />
          내가 쓴 후기
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">관심리스트</div>
          즐겨찾기(★)
          <br />
          좋아하는작가(♥)
          <br />
          최근 본 작품
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">할인혜택</div> VIP클럽
          <br />
          쿠폰함
          <br />
          적립금
          <br />
          친구 초대 쿠폰
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">내 정보</div>
          회원 등급
          <br />
          회원 정보 관리
          <br />
          신용카드 및 환불계좌 관리
          <br />
          주소(배송지) 관리
          <br />
          본인 인증
        </div>
      </div>
      <PersonalSection>
        <PersonalFront>이름</PersonalFront>
        <div>
          <PersonalInput placeholder="이름" />
        </div>
      </PersonalSection>

      <PersonalSection>
        <PersonalFront>이메일</PersonalFront>
        <div>
          <PersonalInput placeholder="이메일" />
        </div>
        <StyledButton>변경하기</StyledButton>
      </PersonalSection>

      <PersonalSection>
        <PersonalFront>전화</PersonalFront>
        <div>
          <PersonalInput placeholder="전화번호" />
        </div>
        <StyledButton>변경하기</StyledButton>
      </PersonalSection>

      <PersonalSection>
        <PersonalFront>성별</PersonalFront>
        <div>
          <label>
            <input type="radio" />
            여성
          </label>
          &emsp;
          <label>
            <input type="radio" />
            남성
          </label>
        </div>
      </PersonalSection>

      <PersonalSection>
        <PersonalFront>생일</PersonalFront>
        <div>
          <PersonalInput placeholder="2021-01-01" />
        </div>
      </PersonalSection>

      <PersonalSection>
        <PersonalFront>알림설정</PersonalFront>
        <div>파격할인/이벤트/쿠폰 알림 등의 정보를 받아보시겠습니까?</div>
        <form>
          <label>
            <input type="radio" />
            SMS
          </label>
          &emsp;
          <label>
            <input type="radio" />
            이메일
          </label>
        </form>
      </PersonalSection>
    </div>
  );
}

export default Personal;
