import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
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

const PostUserInfo = async (inputs) => {
  const Message = '필수 항목입니다.';
  try {
    axios
      .post('/api/user/join', {
        email: inputs.email,
        password: inputs.password,
        name: inputs.name,
        tel: inputs.tel,
        writerFlag: false,
      })
      .then((response) => {
        const { accessToken } = response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        useHistory.push('/');
      })
      .catch((error) => {
        console.log('error : ', error.response);
        alert('이미 가입된 아이디가 있습니다.');
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
    tel: '',
  });
  const { email, password, name, tel } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <div className="StageWrapper">
      <div className="StageInfo">
        <button className="LogoBtn">
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
          <SignInput name="email" type="email" placeholder="이메일을 입력해주세요" onChange={onChange} value={email} />
          <br />
          <br />
          ∗ 비밀번호
          <br />
          <SignInput
            name="password"
            type="password"
            placeholder="비밀번호 (영문 + 숫자 + 특수문자 8자 이상)"
            onChange={onChange}
            value={password}
            oninvalid="this.setCustomValidity({Message})"
            oninput="setCustomValidity('영문, 숫자, 특수문자를 조합한 8자 이상의 비밀번호를 입력해주세요.')"
            required
          />
          <br />
          <br />
          <SignInput
            type="password"
            placeholder="비밀번호 확인"
            onChange={onChange}
            oninvalid="this.setCustomValidity({Message})"
            oninput="setCustomValidity('값은 값을 다시 입력하세요.')"
            required
          />
          <br />
          <br />
          ∗ 이름
          <br />
          <SignInput name="name" placeholder="이름을 입력해주세요." onChange={onChange} value={name} required />
          <br />
          <br />
          ∗ 전화번호
          <br />
          <SignInput name="tel" placeholder="010-1234-5678" onChange={onChange} value={tel} required />
          <br />
          <br />
          추천인코드
          <br />
          <SignInput name="recommended" placeholder="선택 사항" onChange={onChange} />
          <BtnSign onClick={() => PostUserInfo(inputs)}>회원가입하기</BtnSign>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignForm;
