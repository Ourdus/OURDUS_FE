import React, {useState} from 'react';
import './App.css';
import './product.css';
import data from './data.js';
import idusimage from './img/idus.png'

import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoSlack } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { ImBlogger2 } from "react-icons/im";
import { FaKickstarter } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";  
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//css 디자인에 앞써 npm install --save styled-components 설치 css적용을 위해
//import Icon from './components/icons' icon 불러오려고
/*npm install react-icons --save 설치하기 icon 표시하기 위해*/
//npm install react-bootstrap-table --save 설치하기 테이블 생성
// import Modal from 'react-native-modalbox'  팝업창 띄우기 위한 설치
function onclickwork(){


}
function onclickoffline(){

}
function onclickonline(){

}

function App() {

  const categories = [
    {name : '음료'},
    {name : '디저트'},
    {name : '수제잼'},
    {name : '전통주'},
    {name : '문구'},
    {name : '캔들'},
    {name : '향수'},
    {name : '반지'},
    {name : '귀걸이'},
    {name : '목걸이'},
    {name : 'a'},
    {name : 'b'},
    {name : 'c'},
    {name : 'd'},
    {name : 'e'},
    {name : 'f'},
    {name : 'g'},
    {name : 'h'},
    {name : 'i'},
    {name : 'j'},
    {name : 'k'},
    {name : 'l'},
    {name : 'm'},
    {name : 'n'},
  ];

  let [product, setProduct] = useState(data);
  let [category, setCategory] = useState(categories);
  
  return (
    <div className="App">
      <header>
      <section className="header">
      <section className="header-top">

        <section className="header-top__navbar">
          <section className="header-top__navigation">
          <a href="/" className="header-bottom">로그인</a>
          <a href="/" className="header-bottom">회원가입</a>
          <a href="/" className="header-bottom">고객센터</a>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
      
        <section className="header-bottom__info">
        <BsPerson size="20" color="steelblue" />&nbsp;&nbsp;내정보
        </section>
        <section className="header-bottom__shop">
        <FiShoppingCart size="20" color="steelblue" />&nbsp;&nbsp;장바구니
        </section>
       
      </section>
    </section>

    <div className="Navbar">
    <button className="logobutton" ><img src={ idusimage} /></button>
    
            <div className="leftSide">
            <a href="/class" className="linka">클래스</a>
            <a href="/work" className="linka">작품</a>
                <div className="links">
                  
                   
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="작품/클래스 검색하기"/>
                <button className="btn2">검색</button>
            </div>
        </div>

        <div className="Navbar">
                <div className="links">
                    <a href="/category" className="linkb">카테고리</a>
                    <a href="/home" className="linkb">홈</a>
                    <a href="/today" className="linkb">오늘의발견</a>
                    <a href="/livebuy" className="linkb">실시간 구매</a>
                    <a href="/livereview" className="linkb">실시간 후기</a>
                    <a href="/pick" className="linkb">작가님 추천</a>
                    <a href="/livepick" className="linkb">실시간 추천</a>
                    <a href="/popularwork" className="linkb">인기작품</a>
                    <a href="/story" className="linkb">스토리</a>
                    <a href="/new" className="linkb">최신작품</a>
                    <a href="/popularartist" className="linkb">인기작가</a>
                </div>
        </div>
      </header>

          <div className="infowrapper">
          <div className="infotopic">

            내 정보
            
          </div>

          <div className="tableRow">
                <div className="tableColumn">
                <div className="tableTitle">적립금</div>
                  0p  
                </div>
                <div className="tableColumn">
                <div className="tableTitle">할인 쿠폰 수</div>
                  7 개
                </div>
                <div className="tableColumn">
                <div className="tableTitle">작가 발송 완료</div>
                  3 개
                </div>
                <div className="tableColumn">
                <div className="tableTitle">취소/환불 완료</div>
                  5 개
                </div>
            </div>
            <h3>최근 주문내역</h3> <a href="#" className="moreinfo">더보기☞ </a>
            <div className="orderlist">
              <button className="btn" onClick={onclickwork}>작품</button><button className="btn" onClick={onclickonline}>온라인 클래스</button><button className="btn" onClick={onclickoffline}>오프라인 클래스</button>
            <div className="shoplist">최근 1개월이내에 주문한 작품이 없습니다.</div>
            <button className="showMore" onClick> 최근 주문내역 더보기 </button>
            </div>
            <div className="infoRow">
              <div className="infoColumn">
              <h3>안 읽은 메시지</h3> <a href="#" className="moreinfo2">더보기☞</a>
              <div className="messagelist">모든 메시지를 읽으셨습니다.</div>
              </div>
              <div className="infoColumn">
              <h3>알림</h3> <a href="#" className="moreinfo2">더보기☞</a>
              <div className="alarmlist">
                <p>(이벤트/공지) 아이디어스 <br />축3만원 당첨쿠폰 (광고) 무료수신거부</p>
                <p>(이벤트/공지) 아이디어스 <br />발렌타인데이 잊으면 1년이 괴롭습니다.(광고)</p>
                
              </div>
              </div>
 
            </div>
            <h3>즐겨찾는 작품(★)</h3> <a href="#" className="moreinfo">더보기☞ </a>
              <div className="likeworklist">모든 메시지를 읽으셨습니다.</div>
            <h3>좋아하는 작가(♥)</h3> <a href="#" className="moreinfo">더보기☞ </a>
               <div className="likeartistlist">모든 메시지를 읽으셨습니다.</div>
          </div>
          

      <nav className="promotion">
        <h3> 입점 할인 </h3>
        <p> 최대 60 % </p>
      </nav>

      <content>
        <div className="category">
          <h4>카테고리</h4>
          {
            category.map((a, i)=>{
              return <Category_button category={category[i]} key={i}/>
            })
          }
        </div>
        <div className="popular">
          <h4>인기상품</h4>
            {
              product.map((a, i) => {
                return <Product product={product[i]} i={i} key={i} />
              })
            }
          <button className="showMore" onClick> 인기상품 더보기 </button>
        </div>

        <div className="recommend">
          <h4>추천상품</h4>
            {
              product.map((a, i) => {
                return <Product product={product[i]} i={i} key={i} />
              })
            }
          
          <button className="showMore" onclick> 추천상품 더보기 </button>
        </div>

        <div className="new">
          <h4>최신상품</h4>
            {
              product.map((a, i) => {
                return <Product product={product[i]} i={i} key={i} />
              })
            }
          
          <button className="showMore" onClick> 최신상품 더보기</button>
        </div>

        <div className="review">
          <h4>상품후기</h4>
            {
              product.map((a, i) => {
                return <Product product={product[i]} i={i} key={i} />
              })
            }
          
          <button className="showMore" onClick> 상품후기 더보기 </button>
        </div>
      </content>


          



      <footer>
   
      <div className="Wrapper">
            <div className="linkd">
                    <a href="/category" className="linkc">이용약관 &nbsp;&nbsp;&nbsp;</a>
                    <a href="/home" className="linkc">개인정보처리방침&nbsp;&nbsp;&nbsp;</a>
                    <a href="/today" className="linkc">공지사항&nbsp;&nbsp;&nbsp;</a>
                    <a href="/livebuy" className="linkc">자주 묻는 질문&nbsp;&nbsp;&nbsp;</a>
                    <a href="/livereview" className="linkc">이벤트&nbsp;&nbsp;&nbsp;</a>
                    <a href="/pick" className="linkc">입점문의&nbsp;&nbsp;&nbsp;</a>
                    <a href="/livepick" className="linkc">About Idus&nbsp;&nbsp;&nbsp;</a>
                    <a href="/popularwork" className="linke">인재영입&nbsp;&nbsp;&nbsp;</a>
                </div>
              <div className="liner">&nbsp;</div>
           
           
            <div className="Title2">
                  
            </div>
            <div className="Row">
              <div className="Column">
                <div className="iduslogo">idus</div>
                
              </div>
              <div className="Column">
                <div className="Title">(주) 백패커</div>
                <h6 href="#" >대표이사 : 김동환<br />서울특별시 마포구 동교로 19길 12
                    <br />사업자 등록번호:107-87-83297<br />통신판매업신고:2015-서울마포-0440</h6>
                    <div className="smallletter">아이디어스는 통신판매중개자이며 통신판매의 당사자가 아닙니다.<br />따라서 아이디어스는 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다.</div>
                 
                </div>          
                      <div className="Column">
                <div className="Title">고객센터(오전 10~ 저녁 10시)</div>
                    <h6 href="#">카카오톡 아이디어스<br />대표번호 02-6022-3651<br />메일 support@backpac.kr<br />
                    제휴문의 biz@backpac.kr</h6>
                    <div className="smallletter">아이디어스 이용 중 궁금하신 점이 있으신가요?<br />메일 또는 플러스친구 `아이디어스`로 연락해주세요.
<br />최선을 다해 도와드리겠습니다.</div>
                 
                </div>
                <div className="Column">
                <div className="Title">Follow Us</div>
                <IoLogoFacebook size="24" color="orange" /><a href="https://www.facebook.com/idus.me" className="lineno">facebook</a>
                <IoLogoInstagram size="24" color="orange" /><a href="https://www.instagram.com/idus.me/" className="lineno">instagram</a>
                <ImBlogger2 size="24" color="orange" /><a href="https://post.naver.com/idus_me" className="lineno">post</a>
                <IoLogoTwitter size="24" color="orange"/><a href="https://twitter.com/IDus_kr" className="lineno">twitter</a>
                <FaKickstarter size="24" color="orange" /><a href="https://story.kakao.com/ch/idusme" className="lineno">kakaopage</a>
                <div className="Title3">구매안전거래사이트</div>
                <button className="gaipbtn" >가입사실 확인▶</button>
                <div className="smallletter">고객님은 현금 등으로 결제시 당사에서 가입한 구매안전서비스를 이용하실 수 있습니다.<br />Copyright © 2021 Backpackr All right reserved.</div>
                </div>
                
                <div className="Column">
                <div className="Title">OurdusSocial</div>
                   <IoLogoGithub size="24" color="orange" /> <a href="https://github.com/orgs/Ourdus" className="lineno">Git hub</a>
                   <IoLogoSlack size="24" color="orange" /> <a href="https://ourdus.slack.com/" className="lineno">Slack</a>

                 
                </div>



            </div>
            
      </div>
      </footer>

    </div>
  );
}

// 카테고리 버튼
function Category_button(props){
  return(
    <div className="_category_button">
      <button> {props.category.name} </button>
    </div>
  )
}

// 각 상품
function Product(props){
  return(
    <div className="_product">
      <img src = {'https://google'+ props.i +'.jpg'} />
      <h5>{props.product.made_by}</h5>
      <h4>{props.product.title}</h4>
      <p>{props.product.review}</p>
    </div>
  )
}

export default App;