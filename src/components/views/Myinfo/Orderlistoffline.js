import styled from "styled-components";
import React from "react";
import myinfobanner from "../../img/myinfocf.png";
import { Link } from "react-router-dom";
//import SideBar from "../Sidebar/SideBar";
/*sidebar 디자인을 위한 css*/
import "../../css/personalInfo.css";
import sidebarimage from "../../img/sidebarimage.png";

export const banner = styled.div`
  margin-left: 50px;
`;
export const showtopic = styled.div`
  margin-left: 5%;
  margin-top: 5%;
`;
export const showMoreorder2 = styled.div`
  margin-left: 30%;
  color: white;
  background: orange;
  padding: 0.375rem 0.75rem;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
`;
export const btn4 = styled.div`
  color: white;
  background: #d3d3d3;
  padding: 0.375rem 0.75rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  width: 26%;
  line-height: 1.5;
`;

function Orderlistoffline() {
  return (
    <div className="showtopic">
      {/* <SideBar></SideBar> */}
      <h2>최근 주문내역</h2>
      <div className="myorderlist">
        <button className="btn4">작품</button>

        <button className="btn4">온라인 클래스</button>
        <button className="btn4">오프라인 클래스</button>
        <div className="shoplist">
          <br />
          <br />
          수강한 클래스 내역이 없습니다.
        </div>
        <Link to={"/main/work"}>
          <button className="showMoreorder2" onClick>
            클래스 구경하러 가기
          </button>
        </Link>
        <div className="banner">
          <button className="sidebarbutton3" href="#">
            <img src={myinfobanner} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Orderlistoffline;
