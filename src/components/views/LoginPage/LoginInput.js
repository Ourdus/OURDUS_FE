import React, { useState } from "react";
import ReactDom, { Link, useHistory } from "react-router-dom";
//import { useDispatch } from 'react-redux'
import "../../css/LoginPage.css";
import axios from "axios";
import styled from "styled-components";
import kakaoLogo from "../../img/kakaologo.svg";
import PromoLogin from "../../img/Promo_login.png";
import Loginbtn from "../../img/login.png";
import { setJwt } from "./TokenConfig.js";
import AuthenticationService from "./ AuthenticationService";

function LoginPage() {
  const history = useHistory();

  const PostUserInfo = async (inputs) => {
    const data = {
      email: inputs.email,
      password: inputs.password,
    };
    try {
      axios
        .post("/api/user/login", data)
        .then((response) => {
          // console.log(response);
          const accessToken = response.data.response.data;
          // console.log("accessToken:" + accessToken);
          setJwt(accessToken);
          history.push("/main");
        })
        .catch((error) => {
          console.log("error : ", error.response);
        });
    } catch (e) {
      console.log("error");
    }
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
          <LoginBtn onClick="location.href='SignUpPage.js'">
            회원가입 하기
          </LoginBtn>
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
          <SignInput
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={password}
            required
          />
        </form>
        <LinkDiv>
          <Link to="./auth">
            <ShopTag> 아이디 </ShopTag>
          </Link>
          &nbsp;/&nbsp;
          <Link to="./authP">
            <ShopTag> 비밀번호 </ShopTag>
          </Link>
          를 잊으셨나요?
        </LinkDiv>
        <BtnSign onClick={() => PostUserInfo(inputs)}>로그인</BtnSign>
      </div>
    </SingUpWrapper>
  );
}

export default LoginPage;

const SingUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0% 0% 0% 0%;
  padding: 6% 5% 25% 18%;
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
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap");
    vertical-align: middle;
    width: 200px;
    height: 16px;
    margin: 0 auto;
    margin-left: 30px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-family: "Roboto", sans-serif;
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
  margin: 0% 0% 0% 0%;
  text-decoration: none;
  &:hover {
    color: #adb5bd;
    text-decoration: none;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  color: #adb5bd;
  margin: 2% 0% 0% 60%;
  font-size: 12px;
`;
