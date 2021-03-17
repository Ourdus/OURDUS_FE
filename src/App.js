import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// viewport importing
import handleViewport from "react-in-viewport";

// Header & Footer
import Header from "./components/views/Section/Header/Header";
import Header_class from "./components/views/Section/Header/Header_class";
import LoginHeader_class from "./components/views/Section/Header/LoginHeader_class";
import LoginHeader_work from "./components/views/Section/Header/LoginHeader_work";

import Footer from "./components/views/Section/Footer/Footer";

// Work Page
import IdusPage from "./components/views/IdusPage/IdusPage";
import WorkPage from "./components/views/WorkPage/WorkPage";
import WorkCategoryPage from "./components/views/WorkPage/WorkCategoryPage";
import WorkDetailPage from "./components/views/WorkPage/WorkDetailPage";

// Class Page
import ClassOn from "./components/views/ClassPage/ClassOnMain";
import ClassOff from "./components/views/ClassPage/ClassOffMain";
import Popular from "./components/views/ClassPage/PopularClass";
import ClassDetailPage from "./components/views/ClassPage/ClassDetailPage";
import MyPage from "./components/views/MyPage/MyPage";

// 로그인 및 회원정보 Directory
import AddAddress from "./components/views/LoginPage/AddAddress"; // 주소정보 추가
import DeliveryAdd from "./components/views/LoginPage/DeliveryAdd"; // 주소정보 보여주느 화면
import LoginPage from "./components/views/LoginPage/LoginPage"; // 로그인 연결 화면
import LoginInput from "./components/views/LoginPage/LoginInput"; // 실제 로그인 화면
import SignUpPage from "./components/views/LoginPage/SignUpPage"; // 회원가입 연결 화면
import SignupForm from "./components/views/LoginPage/SignupForm"; // 실제 회원가입 화면
import SearchID from "./components/views/LoginPage/SearchID"; // 아이디 찾기 화면
import ExpireID from "./components/views/LoginPage/ExpireID"; // 회원 탈퇴 화면
import SearchPW from "./components/views/LoginPage/SearchPassword"; // 비밀번호 찾기 화면
import Personal from "./components/views/LoginPage/Personal"; // 개인정보 보여주는 화면
import PersonalInfo from "./components/views/LoginPage/PersonalInfo"; // 개인정보 입력하는 화면
import MyInfo from "./components/views/Myinfo/Myinfo";

// 작품 카테고리 별 디테일 화면 리스트
import RateCategoryPage from "./components/views/WorkPage/WorkCateDetail/RateCategoryPage";
import HitCategoryPage from "./components/views/WorkPage/WorkCateDetail/HitCategoryPage";
import PriceCategoryPage from "./components/views/WorkPage/WorkCateDetail/PriceCategoryPage";
import PurchCategoryPage from "./components/views/WorkPage/WorkCateDetail/PurchCategoryPage";

// Cart 관련 category
import Cart_W from "./components/views/CartPage/CartPage_W"; //장바구니
import DirectPay_W from "./components/views/CartPage/DirectPay_W"; //바로결제
import Payment_W from "./components/views/CartPage/Payment_W"; //주문결제

//myinfo 내정보 관련
import Showmyinfo from "./components/views/Myinfo/Orderlist"; //주문내역 더보기
import Showmyinfoclass from "./components/views/Myinfo/Orderlistonline"; //주문내역 더보기
import Showmyinfoclassoff from "./components/views/Myinfo/Orderlistoffline"; //주문내역 더보기
import Detailedorderlist from "./components/views/Myinfo/Detailedorderlist"; //주문내역 상세보기

import Notice from "./components/views/Notice/Notice"; //게시판 보기
import Notice_1 from "./components/views/Notice/Notice_id1"; //게시판 보기
import Notice_2 from "./components/views/Notice/Notice_id2"; //게시판 보기
import Notice_3 from "./components/views/Notice/Notice_id3"; //게시판 보기
import Notice_4 from "./components/views/Notice/Notice_id4"; //게시판 보기
import Notice_5 from "./components/views/Notice/Notice_id5"; //게시판 보기
import Notice_6 from "./components/views/Notice/Notice_id6"; //게시판 보기
import Notice_7 from "./components/views/Notice/Notice_id7"; //게시판 보기
import Notice_8 from "./components/views/Notice/Notice_id8"; //게시판 보기
import Notice_9 from "./components/views/Notice/Notice_id9"; //게시판 보기
import Notice_10 from "./components/views/Notice/Notice_id10"; //게시판 보기
import Notice_11 from "./components/views/Notice/Notice_id11"; //게시판 보기
import Notice_12 from "./components/views/Notice/Notice_id12"; //게시판 보기
import Notice_13 from "./components/views/Notice/Notice_id13"; //게시판 보기
import Notice_14 from "./components/views/Notice/Notice_id14"; //게시판 보기
import Notice_15 from "./components/views/Notice/Notice_id15"; //게시판 보기
import Notice_16 from "./components/views/Notice/Notice_id16"; //게시판 보기
import Notice_17 from "./components/views/Notice/Notice_id17"; //게시판 보기
import Notice_18 from "./components/views/Notice/Notice_id18"; //게시판 보기
import Notice_19 from "./components/views/Notice/Notice_id19"; //게시판 보기
import Notice_20 from "./components/views/Notice/Notice_id20"; //게시판 보기

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/main" component={IdusPage} />
          <Route exact path="/main/work" component={WorkPage} />
          {/* 작품 메인 -> 더보기 를 했을 때 이동하는 페이지 */}
          <Route
            exact
            path="/main/work/category/hit"
            component={HitCategoryPage}
          />
          <Route
            exact
            path="/main/work/category/Rate"
            component={RateCategoryPage}
          />
          <Route
            exact
            path="/main/work/category/purchase"
            component={PurchCategoryPage}
          />
          <Route
            exact
            path="/main/work/category/price"
            component={PriceCategoryPage}
          />
          <Route exact path="/work/detail/:id" component={WorkDetailPage} />
          <Route exact path="/main/oc" component={ClassOn} />
          <Route exact path="/main/c" component={ClassOff} />
          <Route
            exact
            path="/main/class/detail/:id"
            component={ClassDetailPage}
          />
          <Route exact path="/main/mypage" component={MyPage} />
          <Route exact path="/w/cart/:id" component={Cart_W} />
          <Route exact path="/w/directPay" component={DirectPay_W} />
          <Route exact path="/w/payment" component={Payment_W} />
          <Route exact path="/main/myInfo" component={MyInfo} />
          <Route exact path="/main/class/popular" component={Popular} />
          <Route exact path="/user/join" component={SignUpPage} />
          <Route exact path="/user/join/login" component={LoginPage} />
          <Route exact path="/user/join/input" component={LoginInput} />
          <Route exact path="/user/join/signup" component={SignupForm} />
          <Route exact path="/user/personal" component={Personal} />
          <Route exact path="/user/personalinfo" component={PersonalInfo} />
          <Route exact path="/user/personal/address" component={DeliveryAdd} />
          <Route exact path="/user/personal/addad" component={AddAddress} />
          <Route exact path="/user/join/auth" component={SearchID} />
          <Route exact path="/user/join/authP" component={SearchPW} />
          <Route exact path="/user/leave" component={ExpireID} />
          <Route exact path="/main/myInfo/showmore" component={Showmyinfo} />
          <Route
            exact
            path="/main/myInfo/showmore2"
            component={Showmyinfoclass}
          />
          <Route
            exact
            path="/main/myInfo/showmore3"
            component={Showmyinfoclassoff}
          />
          <Route
            exact
            path="/main/showmyorderdetail"
            component={Detailedorderlist}
          />
          <Route exact path="/main/notice" component={Notice} />
          <Route exact path="/main/Notice_id1" component={Notice_1} />
          <Route exact path="/main/Notice_id2" component={Notice_2} />
          <Route exact path="/main/Notice_id3" component={Notice_3} />
          <Route exact path="/main/Notice_id4" component={Notice_4} />
          <Route exact path="/main/Notice_id5" component={Notice_5} />
          <Route exact path="/main/Notice_id6" component={Notice_6} />
          <Route exact path="/main/Notice_id7" component={Notice_7} />
          <Route exact path="/main/Notice_id8" component={Notice_8} />
          <Route exact path="/main/Notice_id9" component={Notice_9} />
          <Route exact path="/main/Notice_id10" component={Notice_10} />
          <Route exact path="/main/Notice_id11" component={Notice_11} />
          <Route exact path="/main/Notice_id12" component={Notice_12} />
          <Route exact path="/main/Notice_id13" component={Notice_13} />
          <Route exact path="/main/Notice_id14" component={Notice_14} />
          <Route exact path="/main/Notice_id15" component={Notice_15} />
          <Route exact path="/main/Notice_id16" component={Notice_16} />
          <Route exact path="/main/Notice_id17" component={Notice_17} />
          <Route exact path="/main/Notice_id18" component={Notice_18} />
          <Route exact path="/main/Notice_id19" component={Notice_19} />
          <Route exact path="/main/Notice_id20" component={Notice_20} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
