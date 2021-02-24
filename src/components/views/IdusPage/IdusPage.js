import React from 'react';
import Header from '../Section/Header/Header';
import Footer from '../Section/Footer/Footer';
import axios from 'axios';
import { checkHeader, deleteJwt } from '../LoginPage/TokenConfig';
import { useHistory } from 'react-router-dom';

function IdusPage() {
  checkHeader();
  const history = useHistory();
  const changePage = () =>{
    history.push("/user/personalinfo");
  }

  const logOut = () =>{
    deleteJwt();
  }
  return (
    <div>
      <h5>IdusPage</h5>
      <button onClick={() => changePage()}>Personalinfo로 이동하자</button>
      <button onClick={() => logOut()}>로그아웃</button>
    </div>
  );
}

export default IdusPage;
