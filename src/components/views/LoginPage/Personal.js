import React from 'react';
import styled from 'styled-components';
import '../../css/Login.css';

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
