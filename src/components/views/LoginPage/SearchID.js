import React, { useState, useGI } from 'react';
import { Route, useHistory } from 'react-router-dom';
import '../../css/SignForm.css';
import axios from 'axios';
import styled from 'styled-components';
import Loginbtn from '../../img/login.png';

const StageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0% 0% 0% 0%;
  padding: 5% 5% 25% 5%;
`;

const StageInfo = styled.div`
  width: 350px;
  height: 10vh;
  margin: 5% 0% 0% 35%;
  display: inline-block;
  background-color: #fff;
  border-radius: 3%;
`;

const SignText = styled.div`
  width: 600px;
  display: flex;
  font-size: 15px;
  margin: 0% 0% 0% 0%;
`;

const SignHr = styled.hr`
  width: 20%;
  border: 1px thin black;
  margin: 2% 0% 0% 0%;
`;

const TextDiv = styled.div`
  margin: 5% 0% 0% 0%;

  h5 {
    margin: 0% 3% 10% 22%;
    font-size: 13px;
  }
`;

const SignInput = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid lightgrey;
`;

const BtnSign = styled.button`
  width: 100px;
  height: 50px;
  color: #adb5bd;
  border: none;
  font-weight: bold;
  background-color: #e9ecef;
  margin: 0% 0% 0% 3%;
`;

const FormDiv = styled.div`
  display: flex;
  form {
    display: flex;
    margin: 0% 2% 0% 0%;
  }
`;

const PostUserInfo = async (tel) => {
  const history = useHistory();
  try {
    axios
      .post('/api/user/id-finding', {
        tel: tel,
      })
      .then(function (response) {
        console.log(response);
        history.push('./');
      })
      .catch((error) => {
        console.log('error : ', error.response);
      });
  } catch (e) {
    console.log('error');
  }
};

function SignForm() {
  const [tel, setTel] = useState('');

  const onChange = (e) => {
    setTel(e.target.value);
  };

  return (
    <StageWrapper>
      <StageInfo>
        <button className="LogoBtn">
          <img src={Loginbtn} alt="loginbtn" />
        </button>
        <p></p>
        <SignText>
          <SignHr></SignHr>
          &nbsp;&nbsp;아이디 / 비밀번호 찾기&nbsp;&nbsp;
          <SignHr></SignHr>
        </SignText>
        <br />
        <TextDiv>
          <h5>회원 가입시 사용한 전화번호를 입력해주세요.</h5>
        </TextDiv>
        <FormDiv>
          <form method="submit">
            <SignInput className="AuthInput" placeholder="010-1234-5678" onChange={onChange} value={tel} required />
            <BtnSign onClick={() => PostUserInfo(tel)}>인증요청</BtnSign>
          </form>
        </FormDiv>
      </StageInfo>
    </StageWrapper>
  );
}

export default SignForm;
