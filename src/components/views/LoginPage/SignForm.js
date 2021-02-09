import React, { useState } from 'react';
import '../../css/SignForm.css';
import axios from 'axios';
import styled from 'styled-components';
import Loginbtn from '../../img/login.png';

const SignText = styled.div`
  width: 600px;
  display: flex;
  font-size: 16px;
  margin: 0% 0% 0% 0%;
`;

const SignHr = styled.hr`
  width: 20%;
  border: 1px thin black;
  margin: 2% 0% 0% 0%;
`;

const CircleDiv = styled.div`
  display: flex;
  margin: 10% 0% 0% 5%;
  padding: 3% 0% 5% 0%;
`;

const SignInput = styled.input`
  width: 450px;
  height: 50px;
  border: 1px solid lightgrey;
`;

const BtnSign = styled.button`
  margin-top: 20px;
  width: 450px;
  height: 50px;
  color: white;
  border: none;
  background-color: coral;
`;

const PostUserInfo = async (email, name, password, Pnumber, recommended) => {
  try {
    axios
      .post('/api/user/join', {
        email: 'ehehdgus11@naver.com',
        name: '김동현',
        Pnumber: '010-5517-8496',
        recommended: '',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log('error : ', error.response);
      });
  } catch (e) {
    console.log('error');
  }
};

function SignForm() {
  return (
    <div className="StageWrapper">
      <div className="StageInfo">
        <button className="LogoBtn" onClick="location.href='https://www.idus.com/' ">
          <img src={Loginbtn} alt="loginbtn" />
        </button>
        <p></p>
        <SignText>
          <SignHr></SignHr>
          &nbsp;&nbsp;정말 간단한 회원가입하기&nbsp;&nbsp;
          <SignHr></SignHr>
        </SignText>
        <CircleDiv>
          &nbsp;
          <div className="Circle">1</div>
          <div className="CircleC">2</div>
        </CircleDiv>
        <h5>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가입 정보 입력하기</h5>
        <form method="submit">
          ∗ 이메일
          <br />
          <SignInput className="email" type="email" placeholder="이메일을 입력해주세요" required />
          <br />
          <br />
          ∗ 비밀번호
          <br />
          <SignInput className="password" type="password" placeholder="비밀번호 (영문 + 숫자 + 특수문자 8자 이상)" required />
          <br />
          <br />
          <SignInput type="password" placeholder="비밀번호 확인" required />
          <br />
          <br />
          ∗ 이름
          <br />
          <SignInput className="name" placeholder="이름을 입력해주세요." required />
          <br />
          <br />
          ∗ 전화번호
          <br />
          <SignInput className="Pnumber" placeholder="010-1234-5678" required />
          <br />
          <br />
          추천인코드
          <br />
          <SignInput className="recommended" placeholder="선택 사항" />
          <BtnSign onClick={PostUserInfo}>회원가입하기</BtnSign>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignForm;