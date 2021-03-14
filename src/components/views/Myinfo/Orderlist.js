import styled from "styled-components";
import myinfobanner from "../../img/myinfocf.png";
import { Link } from "react-router-dom";
//import SideBar from "../Sidebar/SideBar";
import "../../css/personalInfo.css";
import sidebarimage from "../../img/sidebarimage.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
/*sidebar 디자인을 위한 css*/

export const Banner = styled.div`
  margin-left: 50px;
`;
export const Showtopic = styled.div`
  margin-left: 5%;
  margin-top: 5%;
  width: 55%;
`;
export const ShowMoreorder2 = styled.div`
  margin-left: 30%;
  color: white;
  background: orange;
  padding: 2%;
  padding-left : 8%;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  width: 30%;
`;
export const Btn4 = styled.button`
  color: white;
  background: #d3d3d3;
  padding: 0.375rem 0.75rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  width: 33%;
  line-height: 1.5;
`;

function Orderlist() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      axios.get("/api/t/w/me/order/payment").then(function (response) {
        setProduct(response.data.response);
      });
    } catch (e) {
      console.log("error");
    }
  }, []);

  //const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것

  return (
    <Showtopic>
      {/* <SideBar></SideBar> */}
      <h2>최근 주문내역</h2>
      <div className="myorderlist">
        <Btn4>작품</Btn4>

        <Btn4>온라인 클래스</Btn4>
        <Btn4>오프라인 클래스</Btn4>
        <div className="shoplist">
          <div className="infogroup">
            <div className="date_price">
              <div className="info_date"> get orderDate 2020-10-25</div>
              <div className="info_price"> get price 7,8000원</div>
            </div>
            <div className="date_price">
              <div className="info_date"> product[i].orderDate</div>
              <div className="info_price"> product[i].price</div>
            </div>

            <div className="workinfolist">
              <div className="workinfodetail">
                product[i].productName[j] <br />
                product[i].optionInfo[j]
              </div>
              <div className="workauthor">
                <div>product[i].optionInfo[j]</div>
                <div>
                  <button class="secondinfobutton">메시지로 문의</button>
                </div>
              </div>
              <div className="reveiwbuttongroup">
                <div>
                  <button class="firstreveiwbutton">구매후기 작성</button>
                </div>
                <div>
                  <button class="secondinfobutton">발송 정보 조회</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/main/work"}>
          <ShowMoreorder2 onClick>
            작품 구경하러 가기
          </ShowMoreorder2>
        </Link>
        <Banner>
          <button className="sidebarbutton3" href="#">
            <img src={myinfobanner} />
          </button>
        </Banner>
      </div>
    </Showtopic>
  );
}
export default Orderlist;
