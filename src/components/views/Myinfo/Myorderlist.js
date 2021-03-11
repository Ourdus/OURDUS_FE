import React, { useState } from "react";
import styled from "styled-components";
import "../../css/personalInfo.css";
import sidebarimage from "../../img/sidebarimage.png";
import myinfo1 from "../../img/myinfo1.png";
import myinfo2 from "../../img/myinfo2.png";
import myinfo3 from "../../img/myinfo3.png";
import myinfo4 from "../../img/myinfo4.png";
import myinfo5 from "../../img/myinfo5.png";
import axios from "axios";
import { Link } from "react-router-dom";
import categoryData from "../../data/categoryData";
import data from "../../data/MyinfoData";
import Product from "../Section/Product/MyinfoProduct";
import SideBar from "../Sidebar/SideBar";

function onclickwork() {}
function onclickoffline() {}
function onclickonline() {}

function Myorderlist() {
  let [product, setProduct] = useState(data);
  let [category, setCategory] = useState(categoryData);
  return (
    <div className="infoall">
      <SideBar></SideBar>
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
        <h5>최근 주문내역</h5>{" "}
        <a href="#" className="moreinfo">
          더보기☞{" "}
        </a>
        <div className="orderlist">
          <Link to={"/main/myinfo/showmore"}>
            <button className="btn3">작품</button>
          </Link>
          <Link to={"/main/myinfo/showmore2"}>
            <button className="btn3">온라인 클래스</button>
          </Link>
          <Link to={"/main/myinfo/showmore3"}>
            <button className="btn3">오프라인 클래스</button>
          </Link>
          <div className="shoplist">
            최근 1개월이내에 주문한 작품이 없습니다.
          </div>
        </div>
        <Link to={"/main/myinfo/showmore"}>
          <button className="showMoreorder" onClick>
            최근 주문내역 더보기
          </button>
        </Link>
        <div className="infoRow">
          <div className="infoColumn">
            <h5>안 읽은 메시지</h5>{" "}
            <a href="#" className="moreinfo2">
              더보기☞
            </a>
            <div className="messagelist">모든 메시지를 읽으셨습니다.</div>
          </div>
          <div className="infoColumn">
            <h5>알림</h5>{" "}
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
        <h5>즐겨찾는 작품(★)</h5>{" "}
        <a href="#" className="moreinfo">
          더보기☞{" "}
        </a>
        <div className="likeworklist">
          <div className="likeworkdiv">
            <button className="iconbutton3">
              <img src={myinfo1} />
            </button>
            <div className="likeworktopic">또리네상점</div>
            <div className="likeworkcontent">
              [선물추천]애플워치 스트랩 곱창벤드 체크네이비
            </div>
          </div>
          <div className="likeworkdiv">
            <button className="iconbutton3">
              <img src={myinfo2} />
            </button>
            <div className="likeworktopic">플러터제이</div>
            <div className="likeworkcontent">
              4컬러 달빛에 띄운 나비의꿈 키링
            </div>
          </div>
          <div className="likeworkdiv">
            <button className="iconbutton3">
              <img src={myinfo3} />
            </button>
            <div className="likeworktopic">중국성 딸래미</div>
            <div className="likeworkcontent">🔥리얼 중국집 짜장소스🔥</div>
          </div>
          <div className="likeworkdiv">
            <button className="iconbutton3">
              <img src={myinfo4} />
            </button>
            <div className="likeworktopic">사르르</div>
            <div className="likeworkcontent">초코 스키니 다쿠아즈 8개</div>
          </div>
        </div>
        <h5>좋아하는 작가(♥)</h5>{" "}
        <a href="#" className="moreinfo">
          더보기☞{" "}
        </a>
        <div className="likeartistlist">
          <div className="likeartistpicture">
            <img src={myinfo5} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myorderlist;
