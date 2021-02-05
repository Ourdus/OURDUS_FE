import React from 'react';
import { Checkbox } from '@material-ui/core';
import styled from 'styled-components';
import '../../css/SignUpStage.css';
import Loginbtn from '../../img/login.png';

const CircleDiv = styled.div`
  display: flex;
  margin: 10% 0% 0% 5%;
  padding: 3% 0% 5% 0%;
`;

const BtnSign = styled.button`
  margin-top: 20px;
  width: 450px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: coral;
  &:hover {
  }
`;

function SignUpStage() {
  return (
    <div className="StageWrapper">
      <div className="SignInfo">
        <button className="LogoBtn" onClick="location.href='https://www.idus.com/' ">
          <img src={Loginbtn} />
        </button>
        <p></p>
        <div className="SignText">
          <hr className="SignHr"></hr>
          &nbsp;&nbsp;정말 간단한 회원가입하기&nbsp;&nbsp;
          <hr className="SignHr"></hr>
        </div>
        <CircleDiv>
          <div className="Circle">1</div>
          <div className="CircleC">2</div>
        </CircleDiv>
        <h5>&emsp;&emsp;&nbsp;가입 정보 입력하기</h5>
        <form>
          ∗ 이메일
          <br />
          <input placeholder="이메일을 입력해주세요." required />
          <br />
          <br />
          ∗ 비밀번호
          <br />
          <input placeholder="비밀번호 (영문 + 숫자 + 특수문자 8자 이상)" required />
          <br />
          <br />
          <input placeholder="비밀번호 확인" required />
          <br />
          <br />
          ∗ 이름
          <br />
          <input placeholder="이름을 입력해주세요." required />
          <br />
          <br />
          ∗ 전화번호
          <br />
          <input placeholder="010-1234-5678" required />
          <br />
          <br />
          추천인코드
          <br />
          <input placeholder="선택사항" />
          <BtnSign>회원가입 하기</BtnSign>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignUpStage;
