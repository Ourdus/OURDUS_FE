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
import Login from './components/views/LoginPage/LoginPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import SignUp from './components/views/LoginPage/SIgnUpStage';
import Personal from './components/views/LoginPage/Personal';
import DeliveryAdd from './components/views/LoginPage/DeliveryAdd';
import MyInfo from './components/views/myinfo/myinfo';
// Cart 관련 category
import Cart_W from './components/views/CartPage/CartPage_W';
import Pay_W from './components/views/CartPage/Pay_W';

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
          <Route exact path="/main/login" component={LoginPage} />
          <Route exact path="/main/mypage" component={MyPage} />
          <Route exact path="/w/cart/:id" component={Cart_W} />
          <Route exact path="/main/myInfo" component={MyInfo} />
          <Route exact path="/w/pay/:id" component={Pay_W} />
          <Route exact path="/main/class/popular" component={Popular} />
          <Route exact path="/user/join" component={Login} />
          <Route exact path="/user/join/signup" component={SignUp} />
          <Route exact path="/user/personal" component={Personal} />
          <Route exact path="/user/personal/address" component={DeliveryAdd} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
