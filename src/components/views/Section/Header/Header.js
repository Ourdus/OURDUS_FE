import "../../../css/Header.css";
//import ReactHoverObserver from 'react-hover-observer';
import idusimage from "../../../img/idus.png";
import inputsearch from "../../../img/inputsearch.png";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BeenhereSharp } from "@material-ui/icons";
//npm install --save react-hover-observer hover 기능 활용을 위한 npm 설치!

//import Jumbotron from 'react-bootstrap/Jumbotron'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//css 디자인에 앞써 npm install --save styled-components 설치 css적용을 위해
//import Icon from './components/icons' icon 불러오려고
/*npm install react-icons --save 설치하기 icon 표시하기 위해*/
//npm install react-bootstrap-table --save 설치하기 테이블 생성
// import Modal from 'react-native-modalbox'  팝업창 띄우기 위한 설치

function Header({ match }) {
  const [username, setUsername] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/t/user/info`)
      //   .then((result) => console.log(result.data.response));
      .then((result) => setUsername(result.data.response));
  }, []);
  if (username.length > 0) {
    //로그인한상태
    return (
      <div>
        <header>
          <div className="header">
            <div className="header-top">
              <div className="header-top__navbar">
                <div className="header-top__navigation">
                  <a href="/" className="header-bottom">
                    알림
                  </a>
                  <a href="/" className="header-bottom">
                    메시지
                  </a>
                  <a href="/" className="header-bottom">
                    고객센터
                  </a>
                </div>
                <hr className="header-top__seperator" />
              </div>
            </div>

            <div className="header-bottom">
              <a href="/" className="idusappdown">
                아이디어스 앱 설치하기
              </a>

              <HeaderBottomWrapper>
                <HeaderBottomInfo>
                  &emsp;&nbsp;
                  <BsPerson size="20" color="steelblue" />
                  <Link to={"/main/myinfo/"} className="_category_button">
                    <a href="/" className="header-bottom">
                      내정보
                    </a>
                  </Link>
                </HeaderBottomInfo>
                <HeaderBottomInfo>
                  &nbsp;&nbsp;&nbsp;
                  <FiShoppingCart size="20" color="steelblue" />
                  <a href="/" className="header-bottom">
                    장바구니
                  </a>
                </HeaderBottomInfo>
              </HeaderBottomWrapper>
            </div>
          </div>

          <div>
            <LogoBtn>
              <img src={idusimage} />
            </LogoBtn>

            <div className="leftSide">
              <a href="/class" className="linka">
                작품
              </a>
              <a href="/work" className="linkf">
                클래스
              </a>
            </div>
            <div className="rightSide">
              <input type="text" placeholder="작품/클래스 검색하기" />
              <button className="btn2">검색</button>
            </div>
          </div>

          <div className="Navbar2">
            <LinksDiv>
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
            </LinksDiv>
          </div>
        </header>
      </div>
    );
  }
  //로그인안한상태
  else {
    return (
      <div>
        <header>
          <div className="header">
            <div className="header-top">
              <div className="header-top__navbar">
                <div className="header-top__navigation">
                  <a href="../" className="idusappdown">
                    아이디어스 앱 설치하기
                  </a>
                  <Link to="../user/join/login">
                    <a className="header-bottom">로그인</a>
                  </Link>

                  <Link to="../user/join/signup">
                    <a className="header-bottom">회원가입</a>
                  </Link>
                  <a href="/" className="header-bottom">
                    고객센터
                  </a>
                </div>
                <hr className="header-top__seperator" />
              </div>
            </div>
          </div>

          <div className="Navbar">
            <LogoBtn>
              <Link to="../main/oc">
                <img src={idusimage} />
              </Link>
            </LogoBtn>

            <div className="leftSide">
              <a href="../main/work" className="linka">
                작품
              </a>
              <a href="../main/oc" className="linkf">
                클래스
              </a>
            </div>
            <RightSide>
              <input
                type="text"
                placeholder="신학기를 검색해보세요."
                className="inputstyleclass"
              />
              <SearchBtn>
                <img src={inputsearch} />
              </SearchBtn>
            </RightSide>

            <HeaderBottomWrapper>
              <HeaderBottomInfo>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BsPerson size="20" color="steelblue" />
                <Link to={"/main/myinfo/"} className="_category_button">
                  <a href="/" className="header-bottom">
                    내정보
                  </a>
                </Link>
              </HeaderBottomInfo>
              <HeaderBottomInfo>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FiShoppingCart size="20" color="steelblue" />
                <a href="/" className="header-bottom">
                  장바구니
                </a>
              </HeaderBottomInfo>
            </HeaderBottomWrapper>
          </div>

          <div className="Navbar2">
            <LinksDiv>
              <a href="/category" className="linkz">
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
            </LinksDiv>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

const HeaderBottomWrapper = styled.div`
  display: flex;
  margin: 1.1% 0% 0% 20%;
  background: none;
  font-size: 14px;
`;

const HeaderBottomInfo = styled.div`
  width: 80px;
  margin: 0% 0% 0% 1%;
`;

const RightSide = styled.div`
  margin: 0% 0% 0% 0%;
  display: flex;
  align-items: center;
  position: relative;
  input {
    margin: 5% 0% 0% 0%;
    width: 380px;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 15px;
    align-items: center;
  }
`;

const LinksDiv = styled.div`
  max-height: 80px;
  font-size: calc(10px + 2vmin);
`;

const SearchBtn = styled.button`
  width: 40px;
  margin: 5% 0% 0% 85%;
  background: white;
  border: none;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 0.6% 0% 0% 15%;
  background: white;
  border: none;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;
