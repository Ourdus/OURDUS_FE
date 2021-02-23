import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Header & Footer
import Header from './components/views/Section/Header/Header';
import Footer from './components/views/Section/Footer/Footer';

// Work Page
import IdusPage from './components/views/IdusPage/IdusPage';
import WorkPage from './components/views/WorkPage/WorkPage';
import WorkCategoryPage from './components/views/WorkPage/WorkCategoryPage';
import WorkDetailPage from './components/views/WorkPage/WorkDetailPage';

// Class Page
import ClassPage from './components/views/ClassPage/ClassPage';
import Popular from './components/views/ClassPage/PopularClass';
import MyPage from './components/views/MyPage/MyPage';

// 로그인 및 회원정보 Directory
import SignUpPage from './components/views/LoginPage/SignUpPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import SignUpStage from './components/views/LoginPage/SignForm';
import SearchID from './components/views/LoginPage/SearchID';
import Personal from './components/views/LoginPage/Personal';
import DeliveryAdd from './components/views/LoginPage/DeliveryAdd';
import MyInfo from './components/views/Myinfo/Myinfo';

// Cart 관련 category
import Cart_W from './components/views/CartPage/CartPage_W'; //장바구니
import DirectPay_W from './components/views/CartPage/Pay_W';  //바로결제
import Payment_W from './components/views/CartPage/Payment_W';  //주문결제


//myinfo 내정보 관련
import Sidebar from './components/views/Sidebar/Sidebar'; //sidebar 구성
import Showmyinfo from './components/views/Myinfo/Orderlist'; //주문내역 더보기
import Showmyinfoclass from './components/views/Myinfo/Orderlistonline'; //주문내역 더보기
import Showmyinfoclassoff from './components/views/Myinfo/Orderlistoffline'; //주문내역 더보기

import Notice from './components/views/Notice/Notice'; //게시판 보기
import Notice_1 from './components/views/Notice/Notice_id1'; //게시판 보기



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/main" component={IdusPage} />
          <Route exact path="/main/work" component={WorkPage} />
          <Route exact path="/main/work/category/:id" component={WorkCategoryPage} />
          <Route exact path="/work/detail/:id" component={WorkDetailPage} />
          <Route exact path="/main/class" component={ClassPage} />
          <Route exact path="/main/mypage" component={MyPage} />
          <Route exact path="/w/cart/:id" component={Cart_W} />
          <Route exact path="/w/direct_pay/:id" component={DirectPay_W} />
          <Route exact path="/w/payment/:id" component={Payment_W} />
          <Route exact path="/main/myInfo" component={MyInfo} />
          <Route exact path="/main/class/popular" component={Popular} />
          <Route exact path="/user/join" component={SignUpPage} />
          <Route exact path="/user/join/login" component={LoginPage} />
          <Route exact path="/user/join/signup" component={SignUpStage} />
          <Route exact path="/user/personal" component={Personal} />
          <Route exact path="/user/personal/address" component={DeliveryAdd} />
          <Route exact path="/user/join/auth" component={SearchID} />
	        <Route exact path="/user/sidebar/sidebar" component={Sidebar} />
          <Route exact path="/main/myInfo/showmore" component={Showmyinfo} />
          <Route exact path="/main/myInfo/showmore2" component={Showmyinfoclass} />
          <Route exact path="/main/myInfo/showmore3" component={Showmyinfoclassoff} />
          <Route exact path="/main/notice" component={Notice} />
          <Route exact path="/main/Notice_id1" component={Notice_1} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
