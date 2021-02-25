import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/LoginPage.css';
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

function LoginPage() {
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
        <Link to="./input">
          <OtherBtn>다른 아이디로 로그인하기</OtherBtn>
        </Link>
      </div>
    </SingUpWrapper>
  );
}

export default LoginPage;
