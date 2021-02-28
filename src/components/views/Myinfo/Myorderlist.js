import React, { useState } from 'react';
import styled from 'styled-components';
import '../../css/personalInfo.css';
import sidebarimage from '../../img/sidebarimage.png';
import myinfo1 from '../../img/myinfo1.png';
import myinfo2 from '../../img/myinfo2.png';
import myinfo3 from '../../img/myinfo3.png';
import myinfo4 from '../../img/myinfo4.png';
import myinfo5 from '../../img/myinfo5.png';
import axios from 'axios'
import { Link } from 'react-router-dom';
import categoryData from '../../data/categoryData';
import data from '../../data/MyinfoData';
import Product from '../Section/Product/MyinfoProduct';

function onclickwork() {}
function onclickoffline() {}
function onclickonline() {}

function Myorderlist() {
  let [product, setProduct] = useState(data);
  let [category, setCategory] = useState(categoryData);
  return (
    <div className="infoall">
          <div className="sidebar">
     <div className="topsidebar">
       <button className="sidebarbutton" href="#">
         <img src={sidebarimage} />
       </button>
       <br />
       아기손
       <h6>아이유</h6>
       
     </div>
     <div className="headsidebar">MYMENU</div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">주문배송</div>
       <div className="sidebarlink">
         {' '}
         
           주문내역
        
         <br />
         취소/환불내역
       </div>
     </div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">알림 및 메시지</div>
        알림
       <br />
       메시지
     </div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">선물함</div>
        받은 선물함
       <br />
       보낸 선물함
     </div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">나의 구매후기</div>
       후기 쓰기
       <br />
       내가 쓴 후기
     </div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">관심리스트</div>
       즐겨찾기(★)
       <br />
       좋아하는작가(♥)
       <br />
       최근 본 작품
     </div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">할인혜택</div> VIP클럽
       <br />
       쿠폰함
       <br />
       적립금
       <br />
       친구 초대 쿠폰
     </div>
     <div className="smallsidebar">
       <div className="smallsidebartopic">내 정보</div>
       회원 등급
       <br />
       회원 정보 관리
       <br />
       신용카드 및 환불계좌 관리
       <br />
       주소(배송지) 관리
       <br />
       본인 인증
     </div>
   </div>
      <div className="infowrapper">
        <div className="infotopic">내 정보</div>
        <div className="tableRow">
          <div className="tableColumn">
            <div className="tableTitle">적립금</div>
            0p
          </div>
          <div className="tableColumn">
            <div className="tableTitle">할인 쿠폰 수</div>7 개
          </div>
          <div className="tableColumn">
            <div className="tableTitle">작가 발송 완료</div>3 개
          </div>
          <div className="lasttableColumn">
            <div className="tableTitle">취소/환불 완료</div>5 개
          </div>
        </div>
        <h5>최근 주문내역</h5>{' '}
        <a href="#" className="moreinfo">
          더보기☞{' '}
        </a>
        <div className="orderlist">
        <Link to={'/main/myinfo/showmore'} >
          <button className="btn3" >
            작품
          </button>
          </Link>
          <Link to={'/main/myinfo/showmore2'} >
          <button className="btn3" >
            온라인 클래스
          </button>
          </Link>
          <Link to={'/main/myinfo/showmore3'} >
          <button className="btn3" >
            오프라인 클래스
          </button>
          </Link>
          <div className="shoplist">최근 1개월이내에 주문한 작품이 없습니다.</div>
          
        </div>
        <Link to={'/main/myinfo/showmore'} >
          <button className="showMoreorder" onClick>
            최근 주문내역 더보기
          </button>
          </Link>
        <div className="infoRow">
          <div className="infoColumn">
            <h5>안 읽은 메시지</h5>{' '}
            <a href="#" className="moreinfo2">
              더보기☞
            </a>
            <div className="messagelist">
              모든 메시지를 읽으셨습니다.</div>
          </div>
          <div className="infoColumn">
            <h5>알림</h5>{' '}
            <a href="#" className="moreinfo2">
              더보기☞
            </a>
            <div className="alarmlist">
              <p>
                (이벤트/공지) 아이디어스 <br />
                축3만원 당첨쿠폰 (광고) 무료수신거부
              </p>
              <p>
                (이벤트/공지) 아이디어스 <br />
                발렌타인데이 잊으면 1년이 괴롭습니다.(광고)
              </p>
            </div>
          </div>
        </div>
        <h5>즐겨찾는 작품(★)</h5>{' '}
        <a href="#" className="moreinfo">
          더보기☞{' '}
        </a>
        <div className="likeworklist">
          <div className="likeworkdiv">
            <button className="iconbutton3"><img src={myinfo1} /></button>
            <div className="likeworktopic">또리네상점</div>
            <div className="likeworkcontent">[선물추천]애플워치 스트랩 곱창벤드 체크네이비</div>
          </div>
          <div className="likeworkdiv">
          <button className="iconbutton3"><img src={myinfo2} /></button>
          <div className="likeworktopic">플러터제이</div>
            <div className="likeworkcontent">4컬러 달빛에 띄운 나비의꿈 키링</div>
          </div>
          <div className="likeworkdiv">
          <button className="iconbutton3"><img src={myinfo3} /></button>
          <div className="likeworktopic">중국성 딸래미</div>
            <div className="likeworkcontent">🔥리얼 중국집 짜장소스🔥</div>
          </div>
          <div className="likeworkdiv">
          <button className="iconbutton3"><img src={myinfo4} /></button>
          <div className="likeworktopic">사르르</div>
            <div className="likeworkcontent">초코 스키니 다쿠아즈 8개</div>
          </div>
          </div>
        <h5>좋아하는 작가(♥)</h5>{' '}
        <a href="#" className="moreinfo">
          더보기☞{' '}
        </a>
        <div className="likeartistlist">
          <div className="likeartistpicture"><img src={myinfo5} /> </div>
        </div>
      </div>
    </div>
  );
}

export default Myorderlist;
