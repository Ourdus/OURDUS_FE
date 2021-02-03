import { Checkbox } from '@material-ui/core';
import React from 'react';
import '../../css/Login.css';
import Loginbtn from '../../img/login.png';

function SignUpStage() {
  return (
    <div className="SignUpWrapper">
      <div className="SignInfo">
        <button className="btn" onClick="location.href='https://www.idus.com/' ">
          <img src={Loginbtn} />
        </button>
        <p></p>
        <h5>&nbsp;정말 간단한 회원가입하기</h5>
        <div className="choice">
          <div id="_circle">1</div>
          <div id="_circleC">2</div>
        </div>
        <h5>&emsp;&nbsp;&nbsp;가입 정보 입력하기</h5>
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
          <button className="btnSign">회원가입 하기</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignUpStage;
