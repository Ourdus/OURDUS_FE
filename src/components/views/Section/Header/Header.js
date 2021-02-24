import React from 'react';
import '../../../css/Header.css';
//import ReactHoverObserver from 'react-hover-observer';
import idusimage from '../../../img/idus.png';
import {Link} from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

//npm install --save react-hover-observer hover 기능 활용을 위한 npm 설치!

//import Jumbotron from 'react-bootstrap/Jumbotron'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//css 디자인에 앞써 npm install --save styled-components 설치 css적용을 위해
//import Icon from './components/icons' icon 불러오려고
/*npm install react-icons --save 설치하기 icon 표시하기 위해*/
//npm install react-bootstrap-table --save 설치하기 테이블 생성
// import Modal from 'react-native-modalbox'  팝업창 띄우기 위한 설치

function Header() {
  return (
    <div>
      <header>
        <section className="header">
          <section className="header-top">
            <section className="header-top__navbar">
              <section className="header-top__navigation">
              <Link to="../../user/join/login">
                <a href="/" className="header-bottom">
                  로그인
                </a>
                </Link>
                <Link to="../../user/join/login">
                <a href="/" className="header-bottom">
                  회원가입
                </a>
                </Link>
                <a href="/" className="header-bottom">
                  고객센터
                </a>
              </section>
              <hr className="header-top__seperator" />
            </section>
          </section>

          
          <section className="header-bottom">
            <a href="/"  className="idusappdown">아이디어스 앱 설치하기</a>
            
          <section className="header-bottom__info">
            
            &nbsp;&nbsp;<BsPerson size="20" color="steelblue" />
              <a href="/" className="header-bottom">내정보</a>
            </section>
            <section className="header-bottom__shop">
            &nbsp;&nbsp; <FiShoppingCart size="20" color="steelblue" />
             
              <a href="/" className="header-bottom">장바구니</a>

            </section>
          </section>
        </section>

        <div className="Navbar">
          <button className="logobutton">
            <img src={idusimage} />
          </button>

          <div className="leftSide">
            <a href="/class" className="linka">
              작품
            </a>
            <a href="/work" className="linka">
              클래스
            </a>

            


          </div>
          <div className="rightSide">
            <input type="text" placeholder="작품/클래스 검색하기" />
            <button className="btn2">검색</button>
            
          </div>
          
        </div>
        

        <div className="Navbar">
          <div className="links">
            <a href="/category" className="linkb">
              카테고리
            </a>
            <a href="/home" className="linkb">
              홈
            </a>
            <a href="/today" className="linkb">
              오늘의발견
            </a>
            <a href="/livebuy" className="linkb">
              실시간 구매
            </a>
            <a href="/livereview" className="linkb">
              실시간 후기
            </a>
            <a href="/pick" className="linkb">
              작가님 추천
            </a>
            <a href="/livepick" className="linkb">
              실시간 추천
            </a>
            <a href="/popularwork" className="linkb">
              인기작품
            </a>
            <a href="/story" className="linkb">
              스토리
            </a>
            <a href="/new" className="linkb">
              최신작품
            </a>
            <a href="/popularartist" className="linkb">
              인기작가
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;