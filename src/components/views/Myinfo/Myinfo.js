import React from 'react';
import '../../css/personalInfo.css';

function onclickwork() {}
function onclickoffline() {}
function onclickonline() {}

function Myinfo() {
  return (
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
      <h3>최근 주문내역</h3>{' '}
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
          <h3>안 읽은 메시지</h3>{' '}
          <a href="#" className="moreinfo2">
            더보기☞
          </a>
          <div className="messagelist">모든 메시지를 읽으셨습니다.</div>
        </div>
        <div className="infoColumn">
          <h3>알림</h3>{' '}
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
      <h3>즐겨찾는 작품(★)</h3>{' '}
      <a href="#" className="moreinfo">
        더보기☞{' '}
      </a>
      <div className="likeworklist">모든 메시지를 읽으셨습니다.</div>
      <h3>좋아하는 작가(♥)</h3>{' '}
      <a href="#" className="moreinfo">
        더보기☞{' '}
      </a>
      <div className="likeartistlist">모든 메시지를 읽으셨습니다.</div>
    </div>
  );
}
export default Myinfo;
