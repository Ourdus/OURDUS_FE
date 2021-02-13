import React, { useState } from 'react';
import '../../css/SignForm.css';
import axios from 'axios';
import styled from 'styled-components';
import Loginbtn from '../../img/login.png';

const StageInfo = styled.div`
  width: 350px;
  height: 50vh;
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
    font-size: 14px;
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

const PostUserInfo = async (email, name, password, Pnumber, recommended) => {
  try {
    axios
      .post('/api/user/join', {
        email: '',
        name: '',
        Pnumber: '',
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
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
    Pnumber: '',
    recommended: '',
  });
  const { email, password, name, Pnumber, recommended } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="StageWrapper">
      <StageInfo>
        <button className="LogoBtn" onClick="location.href='https://www.idus.com/' ">
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
            <SignInput className="AuthInput" placeholder="010-1234-5678" required />
            <BtnSign onClick={PostUserInfo}>인증요청</BtnSign>
          </form>
        </FormDiv>
      </StageInfo>
    </div>
  );
}

export default SignForm;
