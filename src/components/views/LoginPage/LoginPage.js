import React from 'react';
import '../../css/Login.css';
import PromoLogin from '../../img/Promo_login.png';
import Loginbtn from '../../img/login.png';

function LoginPage() {
  return (
    <div className="SignUpWrapper">
      <div className="SignUp">
        <button className="btn" onClick="location.href='https://www.idus.com/' ">
          <img src={Loginbtn} />
        </button>
        <p></p>
        <img src={PromoLogin} className="PromoLogin" />
        <p></p>
        <h5>정말 간단한 회원가입하기</h5>
        <div className="choice">
          <div id="circleC">1</div>
          <div id="circle">2</div>
        </div>
        <h5>&emsp;회원가입 방법 선택하기</h5>
        <button className="choice_btn"> 다른 방법으로 가입하기 </button>
        &emsp;&emsp;&emsp;&emsp;&emsp;이미 가입하셨다면 <a href="#one">바로 로그인 하기</a>
      </div>
    </div>
  );
}

export default LoginPage;
