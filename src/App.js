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
import ClassDetailPage from './components/views/ClassPage/ClassDetailPage';
import MyPage from './components/views/MyPage/MyPage';

// 로그인 및 회원정보 Directory
import SignUpPage from './components/views/LoginPage/SignUpPage';
import AddAddress from './components/views/LoginPage/AddAddress';
import LoginPage from './components/views/LoginPage/LoginPage';
import LoginInput from './components/views/LoginPage/LoginInput';
import SignUpStage from './components/views/LoginPage/SignForm';
import SearchID from './components/views/LoginPage/SearchID';
import Personal from './components/views/LoginPage/Personal';
import DeliveryAdd from './components/views/LoginPage/DeliveryAdd';
import MyInfo from './components/views/Myinfo/Myinfo';

// Cart 관련 category
import Cart_W from './components/views/CartPage/CartPage_W'; //장바구니
import DirectPay_W from './components/views/CartPage/DirectPay_W';  //바로결제
import Payment_W from './components/views/CartPage/Payment_W';  //주문결제
import { Add } from '@material-ui/icons';

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
          <Route exact path="/main/class/detail/:id" component={ClassDetailPage} />
          <Route exact path="/main/mypage" component={MyPage} />
          <Route exact path="/w/cart/:id" component={Cart_W} />
          <Route exact path="/w/directPay" component={DirectPay_W} />
          <Route exact path="/w/payment" component={Payment_W} />
          <Route exact path="/main/myInfo" component={MyInfo} />
          <Route exact path="/main/class/popular" component={Popular} />
          <Route exact path="/user/join" component={SignUpPage} />
          <Route exact path="/user/join/login" component={LoginPage} />
          <Route exact path="/user/join/input" component={LoginInput} />
          <Route exact path="/user/join/signup" component={SignUpStage} />
          <Route exact path="/user/personal" component={Personal} />
          <Route exact path="/user/personal/address" component={DeliveryAdd} />
          <Route exact path="/user/personal/addad" component={AddAddress} />
          <Route exact path="/user/join/auth" component={SearchID} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
