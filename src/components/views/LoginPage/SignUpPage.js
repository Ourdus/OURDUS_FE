import React from 'react';
import axios from 'axios';
import '../../css/SignUpPage.css';
import styled from 'styled-components';
import PromoLogin from '../../img/Promo_login.png';
import Loginbtn from '../../img/login.png';
import kakaoLogo from '../../img/kakaologo.svg';
import { Link, useHistory } from 'react-router-dom';

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

const KakaoBtn = styled.button`
  width: 90%;
  height: 5vh;
  background-color: #f6e24b;
  border: 0;
  outline: 0;
  text-align: center;
  margin: 5% 0% 0% 5%;
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

function SignUpPage() {
  return (
    <SingUpWrapper>
      <div className="SignUp">
        <LogoBtn>
          <img src={Loginbtn} />
        </LogoBtn>
        <p></p>
        <img src={PromoLogin} className="PromoLogin" />
        <p></p>
        <div className="SignText">
          <hr className="SignHr"></hr>
          &nbsp;&nbsp;정말 간단한 회원가입하기 &emsp;
          <hr className="SignHr"></hr>
        </div>
        <div className="choice">
          <div id="circleC">1</div>
          <div id="circle">2</div>
        </div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;회원가입 방법 선택하기
        <br />
        <KakaoBtn>
          <img src={kakaoLogo} alt="kakao" className="icon" />
          <span className="buttonText">카카오톡으로 가입하기</span>
        </KakaoBtn>
        <Link to="./join/signup">
          <button className="choice_btn"> 다른 방법으로 가입하기 </button>
        </Link>
        &emsp;&emsp;&emsp;&emsp;&emsp;이미 가입하셨다면{' '}
        <a className="aTag" href="/user/join/login">
          바로 로그인 하기
        </a>
      </div>
    </SingUpWrapper>
  );
}

export default SignUpPage;