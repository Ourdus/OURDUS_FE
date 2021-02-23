import React from 'react';
import Header from '../Section/Header/Header';
import Footer from '../Section/Footer/Footer';
import axios from 'axios';
import instance from '../LoginPage/axiosConfig.js';
import { useHistory } from 'react-router-dom';

function IdusPage() {
  const history = useHistory();
  const changePage = () =>{
    history.push("/user/personalinfo");
  }
  console.log(instance.defaults.headers);
  return (
    <div>
      <h5>IdusPage</h5>
      <button onClick={() => changePage()}>이동하자</button>
    </div>
  );
}

export default IdusPage;
