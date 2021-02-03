import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import IdusPage from './components/views/IdusPage/IdusPage';
import WorkPage from './components/views/WorkPage/WorkPage';
import WorkCategoryPage from './components/views/WorkPage/WorkCategoryPage';
import ClassPage from './components/views/ClassPage/ClassPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import MyPage from './components/views/MyPage/MyPage';
import Header from './components/views/Section/Header/Header';
import Footer from './components/views/Section/Footer/Footer';
import WorkDetailPage from './components/views/WorkPage/WorkDetailPage';
import Cart_W from './components/views/CartPage/CartPage_W';
import Pay_W from './components/views/CartPage/Pay_W';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={IdusPage} />
          <Route exact path='/work' component={WorkPage} />
          <Route exact path='/work/category/:id' component={WorkCategoryPage} />
          <Route exact path='/work/detail/:id' component={WorkDetailPage} />
          <Route exact path='/class' component={ClassPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/mypage' component={MyPage} />
          <Route exact path='/w/cart/:id' component={Cart_W} />
          <Route exact path='/w/pay/:id' component={Pay_W} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
