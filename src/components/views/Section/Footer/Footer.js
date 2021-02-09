import React from 'react';
import '../../../css/Footer.css';
import kakaoimage from '../../../img/kakao.png';
import twitterimage from '../../../img/twitter.png';
import instagramimage from '../../../img/instagram.png';
import facebookimage from '../../../img/facebook.png';
import blogimage from '../../../img/blog.png';
import gumeimage from '../../../img/gume.png';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoSlack } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { ImBlogger2 } from 'react-icons/im';
import { FaKickstarter } from 'react-icons/fa';
function Footer() {
  return (
    <div>
      <footer>
        <div className="Wrapper">
          <div className="linkd">
            <a href="/category" className="linkc">
              이용약관 &nbsp;&nbsp;&nbsp;
            </a>
            <a href="/home" className="linkc">
              개인정보처리방침&nbsp;&nbsp;&nbsp;
            </a>
            <a href="/today" className="linkc">
              공지사항&nbsp;&nbsp;&nbsp;
            </a>
            <a href="/livebuy" className="linkc">
              자주 묻는 질문&nbsp;&nbsp;&nbsp;
            </a>
            <a href="/livereview" className="linkc">
              이벤트&nbsp;&nbsp;&nbsp;
            </a>
            <a href="/pick" className="linkc">
              입점문의&nbsp;&nbsp;&nbsp;
            </a>
            <a href="/livepick" className="linkc">
              About Idus&nbsp;&nbsp;&nbsp;
            </a>
            <a href="/popularwork" className="linke">
              인재영입&nbsp;&nbsp;&nbsp;
            </a>
          </div>
          <div className="liner">&nbsp;</div>
          <div className="Title2"></div>
          <div className="Row">
            <div className="Column">
              <div className="iduslogo">idus</div>
            </div>
            <div className="Column">
              <div className="Title">(주) 백패커</div>
              <h6 href="#">
                대표이사 : 김동환
                <br />
                서울특별시 마포구 동교로 19길 12
                <br />
                사업자 등록번호:107-87-83297
                <br />
                통신판매업신고:2015-서울마포-0440
              </h6>
              <div className="smallletter">
                아이디어스는 통신판매중개자이며 통신판매의 당사자가 아닙니다.
                <br />
                따라서 아이디어스는 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다.
              </div>
            </div>
            <div className="Column">
              <div className="Title">고객센터(오전 10~ 저녁 10시)</div>
              <h6 href="#">
                카카오톡 아이디어스
                <br />
                대표번호 02-6022-3651
                <br />
                메일 support@backpac.kr
                <br />
                제휴문의 biz@backpac.kr
              </h6>
              <div className="smallletter">
                아이디어스 이용 중 궁금하신 점이 있으신가요?
                <br />
                메일 또는 플러스친구 `아이디어스`로 연락해주세요.
                <br />
                최선을 다해 도와드리겠습니다.
              </div>
            </div>
            <div className="Column">
              <div className="Title">Follow Us</div>
              <div className="iconColumn">
                <a href="https://story.kakao.com/ch/idusme" className="lineno">
                  <button className="iconbutton" href="https://story.kakao.com/ch/idusme">
                    <img src={kakaoimage} />
                  </button>
                </a>

                <a href="https://twitter.com/IDus_kr" className="lineno">
                  <button className="iconbutton" href="https://story.kakao.com/ch/idusme">
                    <img src={twitterimage} />
                  </button>
                </a>

                <a href="https://post.naver.com/idus_me" className="lineno">
                  <button className="iconbutton" href="https://story.kakao.com/ch/idusme">
                    <img src={blogimage} />
                  </button>
                </a>
                <a href="https://www.facebook.com/idus.me" className="lineno">
                  <button className="iconbutton" href="https://story.kakao.com/ch/idusme">
                    <img src={facebookimage} />
                  </button>
                </a>

                <a href="https://www.instagram.com/idus.me/" className="lineno">
                  <button className="iconbutton" href="https://story.kakao.com/ch/idusme">
                    <img src={instagramimage} />
                  </button>
                </a>
              </div>
              <div className="Title3">구매안전거래사이트</div>
              <div className="sortgaip">
                <button className="gaipbtn">가입사실 확인▶</button>
                <button className="iconbutton2">
                  <img src={gumeimage} />
                </button>
              </div>
              <div className="smallletter">
                고객님은 현금 등으로 결제시 당사에서 가입한 구매안전서비스를 이용하실 수 있습니다.
                <br />
                Copyright © 2021 Backpackr All right reserved.
              </div>
            </div>
            <div className="Column">
              <div className="Title">OurdusSocial</div>
              <IoLogoGithub size="24" color="orange" />{' '}
              <a href="https://github.com/orgs/Ourdus" className="lineno">
                Git hub
              </a>
              <IoLogoSlack size="24" color="orange" />{' '}
              <a href="https://ourdus.slack.com/" className="lineno">
                Slack
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
