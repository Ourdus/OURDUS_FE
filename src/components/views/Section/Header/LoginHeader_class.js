import React from 'react';
import '../../../css/Header.css';
//import ReactHoverObserver from 'react-hover-observer';
import idusimage from '../../../img/idus.png';
import inputsearch from '../../../img/inputsearch.png';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
//npm install --save react-hover-observer hover 기능 활용을 위한 npm 설치!

//import Jumbotron from 'react-bootstrap/Jumbotron'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//css 디자인에 앞써 npm install --save styled-components 설치 css적용을 위해
//import Icon from './components/icons' icon 불러오려고
/*npm install react-icons --save 설치하기 icon 표시하기 위해*/
//npm install react-bootstrap-table --save 설치하기 테이블 생성
// import Modal from 'react-native-modalbox'  팝업창 띄우기 위한 설치

function Header_class() {
  return (
    <div>
      <header>
        <section className="header">
          <section className="header-top">
            
            <section className="header-top__navbar">
              
              <section className="header-top__navigation">
              <a href="/" className="idusappdown">
              아이디어스 앱 설치하기
            </a>
                <a href="/" className="header-bottom">
                  
                </a>
                <a href="/" className="header-bottom">
                  알림
                </a>
                <a href="/" className="header-bottom">
                  메시지
                </a>
                <a href="/" className="header-bottom">
                  고객센터
                </a>
              </section>
              <hr className="header-top__seperator" />
            </section>
          </section>

          <section className="header-bottom">
            

            <section className="header-bottom__info">
              &nbsp;&nbsp;
              <BsPerson size="20" color="steelblue" />
              <Link to={'/main/myinfo/'} className="_category_button">
              <a href="/" className="header-bottom">
                내정보
              </a>
              </Link>
            </section>
            <section className="header-bottom__shop">
              &nbsp;&nbsp; <FiShoppingCart size="20" color="steelblue" />
              <a href="/" className="header-bottom">
                장바구니
              </a>
            </section>
          </section>
        </section>

        <div className="Navbar">
          <button className="logobutton">
            <img src={idusimage} />
          </button>

          <div className="leftSide">
            <a href="/class" className="linkf">
              작품
            </a>
            <a href="/work" className="linka">
              클래스
            </a>
          </div>
          <div className="rightSide">
            <input type="text" placeholder="신학기를 검색해보세요." className="inputstyleclass" />
            <button className="inputbtn3"><img src={inputsearch} /></button>
            
          </div>
          
        </div>
        

        <div className="Navbar">
          <div className="links">
            <a href="/category" className="linkb">
              온라인 홈
            </a>
            <a href="/home" className="linkb">
              오프라인 홈
            </a>
            <a href="/today" className="linkb">
              오프라인 카테고리
            </a>
            <a href="/livebuy" className="linkb">
               오프라인 인기 클래스
            </a>
            <a href="/livereview" className="linkb">
               오프라인 지역별
            </a>
            <a href="/pick" className="linkb">
              오프라인 신규
            </a>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header_class;