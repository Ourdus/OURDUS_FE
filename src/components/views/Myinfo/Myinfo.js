import React from 'react';
import '../../css/personalInfo.css';
import sidebarimage from '../../img/sidebarimage.png';
function onclickwork() {}
function onclickoffline() {}
function onclickonline() {}

function Myinfo() {
  return (
    <div className="infoall">
      <div className="sidebar">
        <div className="topsidebar">
          <button className="sidebarbutton" href="#">
            <img src={sidebarimage} />
          </button>
          아기손
          <br />
          아이유
        </div>
        <div className="headsidebar">MYMENU</div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">주문배송</div>
          <div className="sidebarlink">
            {' '}
            <a href="#" className="sidebarlink">
              주문내역
            </a>
            <br />
            취소/환불내역
          </div>
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">알림 및 메시지</div>
          <a href="#"> 알림</a>
          <br />
          메시지
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">선물함</div>
          <a href="#"> 받은 선물함</a>
          <br />
          보낸 선물함
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">나의 구매후기</div>
          <a href="#">후기 쓰기</a>
          <br />
          내가 쓴 후기
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">관심리스트</div>
          <a href="#">즐겨찾기(★)</a>
          <br />
          좋아하는작가(♥)
          <br />
          최근 본 작품
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">할인혜택</div> <a href="#">VIP클럽</a>
          <br />
          쿠폰함
          <br />
          적립금
          <br />
          친구 초대 쿠폰
        </div>
        <div className="smallsidebar">
          <div className="smallsidebartopic">내 정보</div>
          <a href="#">회원 등급</a>
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
          <div className="tableColumn">
            <div className="tableTitle">취소/환불 완료</div>5 개
          </div>
        </div>
        <h5>최근 주문내역</h5>{' '}
        <a href="#" className="moreinfo">
          더보기☞{' '}
        </a>
        <div className="orderlist">
          <button className="btn3" onClick={onclickwork}>
            작품
          </button>
          <button className="btn3" onClick={onclickonline}>
            온라인 클래스
          </button>
          <button className="btn3" onClick={onclickoffline}>
            오프라인 클래스
          </button>
          <div className="shoplist">최근 1개월이내에 주문한 작품이 없습니다.</div>
          <button className="showMore" onClick>
            {' '}
            최근 주문내역 더보기{' '}
          </button>
        </div>
        <div className="infoRow">
          <div className="infoColumn">
            <h5>안 읽은 메시지</h5>{' '}
            <a href="#" className="moreinfo2">
              더보기☞
            </a>
            <div className="messagelist">모든 메시지를 읽으셨습니다.</div>
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
        <div className="likeworklist">모든 메시지를 읽으셨습니다.</div>
        <h5>좋아하는 작가(♥)</h5>{' '}
        <a href="#" className="moreinfo">
          더보기☞{' '}
        </a>
        <div className="likeartistlist">모든 메시지를 읽으셨습니다.</div>
      </div>
    </div>
  );
}
export default Myinfo;
