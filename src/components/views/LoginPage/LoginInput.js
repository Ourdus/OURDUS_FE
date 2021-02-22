import React, { useState, useHistory } from 'react';
import ReactDom,{ Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import '../../css/LoginPage.css';
import axios from 'axios';
import styled from 'styled-components';
import kakaoLogo from '../../img/kakaologo.svg';
import PromoLogin from '../../img/Promo_login.png';
import Loginbtn from '../../img/login.png';

const SingUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0% 0% 0% 0%;
  padding: 5% 5% 25% 5%;
`;

const LogoBtn = styled.button`
  width: 100%;
  height: 6vh;
  text-align: center;
  margin: 3% 0% 0% 0%;
  border-radius: 3%;
  display: inline-block;
  background-color: white;
  border: none;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 6vh;
  text-align: center;
  margin: 3% 0% 0% 0%;
  border-radius: 3%;
  display: inline-block;
  border: 1px solid coral;
  background-color: white;
  color: coral;
`;

const OtherBtn = styled.button`
  width: 100%;
  height: 6vh;
  text-align: center;
  margin: 3% 0% 0% 0%;
  border-radius: 3%;
  display: inline-block;
  border: 1px solid lightgrey;
  background-color: white;
`;

const KakaoBtn = styled.button`
  width: 100%;
  height: 6vh;
  background-color: #f6e24b;
  border: 0;
  outline: 0;
  text-align: center;
  cursor: pointer;
  img.icon {
    vertical-align: middle;
    display: inline-block;
    height: 18.5px;
    margin: 0 auto;
    background-color: #f6e24b;
  }
  span.buttonText {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
    vertical-align: middle;
    width: 200px;
    height: 16px;
    margin: 0 auto;
    margin-left: 30px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
`;
const SignInput = styled.input`
  width: 400px;
  height: 50px;
  margin: 5% 0% 0% 0%;
  border: 1px solid lightgrey;
`;

const InputDiv = styled.div`
  margin: 8% 0% 0% 0%;
  display: flex;
  font-size: 15px;
  hr {
    width: 35%;
  }
`;

const BtnSign = styled.button`
  margin-top: 20px;
  width: 400px;
  height: 50px;
  color: white;
  border: none;
  background-color: coral;
`;

const ShopTag = styled.a`
  color: #adb5bd;
  font-size: 12px;
  margin-left: 51%;
  text-decoration: none;
`;

const PostUserInfo = async (inputs) => {
  axios.defaults.withCredentials = true;
  const data = {
    email: inputs.email,
    password:inputs.password,
  }
  try {
    axios
      .post('/api/user/join',data)
      .then((response) => {
        const { accessToken } = response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log({accessToken});
        useHistory.push('/');
        
      })
      .catch((error) => {
        console.log('error : ', error.response);
      });
  } catch (e) {
    console.log('error');
  }
};

function LoginPage() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <SingUpWrapper>
      <div className="SignUp">
        <LogoBtn>
          <img src={Loginbtn} />
        </LogoBtn>
        <p></p>
        <img src={PromoLogin} className="PromoLogin" />
        <Link to="./">
          <LoginBtn onClick="location.href='SignUpPage.js'">회원가입 하기</LoginBtn>
        </Link>
        <p></p>
        <div className="loginText">
          <hr className="loginHr"></hr>
          &emsp;로그인 &emsp;
          <hr className="loginHr"></hr>
        </div>
        <KakaoBtn>
          <img src={kakaoLogo} alt="kakao" className="icon" />
          <span className="buttonText">카카오톡으로 로그인하기</span>
        </KakaoBtn>
        <OtherBtn>다른 아이디로 로그인하기</OtherBtn>
        <InputDiv>
          <hr></hr>
          &emsp;이메일 로그인&emsp;
          <hr></hr>
        </InputDiv>
        <form method="submit">
          <SignInput
            name="email"
            type="email"
            placeholder="이메일"
            oninvalid="this.setCustomValidity('')"
            oninput="setCustomValidity('영문, 숫자, 특수문자를 조합한 8자 이상의 비밀번호를 입력해주세요.')"
            onChange={onChange}
            value={email}
            required
          />
          <br></br>
          <SignInput name="password" type="password" placeholder="비밀번호" onChange={onChange} value={password} required />
        </form>
        <Link to="./auth">
          <ShopTag>아이디 / 비밀번호를 잊어버리셨나요?</ShopTag>
        </Link>
        <BtnSign onClick={() => PostUserInfo(inputs)}>회원가입하기</BtnSign>
      </div>
    </SingUpWrapper>
  );
}

export default LoginPage;
