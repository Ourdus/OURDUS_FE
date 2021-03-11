import React from "react";
import sidebarimage from "../../img/sidebarimage.png";

function SideBar() {
  return (
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
          {" "}
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
  );
}

export default SideBar;
