import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import '../../css/Login.css';
import {getJwt} from './TokenConfig.js';

const PersonalWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const PersonalDiv = styled.div`
  margin: 5% 0% 0% 25%;
`;

const PersonalTop = styled.div`
  display: flex;
  width: 60%;
  margin: 0px 30% 0px 5%;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const PersonalSection = styled.div`
  display: flex;
  width: 60%;
  margin: 0px 30% 0px 5%;
  border-bottom: 1px solid lightgrey;
`;

const PersonalFtop = styled.div`
  width: 170px;
  height: 60px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 15px 20px;
  background-color: #f6f8f6;
`;

const PersonalFront = styled.div`
  width: 170px;
  height: 60px;
  border-bottom: 1px solid lightgray;
  padding: 15px 20px;
  background-color: #f6f8f6;
`;

const PersonalInput = styled.input`
  margin: 7% 0% 0px 5%;
  width: 200px;
`;

const StyledButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 35px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  background-color: white;
  margin: 1.5% 0% 0px 2%;
  font-size: 13px;
`;

const LabelDiv = styled.div`
  margin: 2% 0% 0% 2%;
`;

const TextDiv = styled.div`
  margin: 2% 0% 0% 2%;
`;

const FormDiv = styled.div`
  margin: 2% 0% 0% 2%;
`;

const OutButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 35px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  background-color: white;
  margin: 1% 0% 0px 59.5%;
  font-size: 13px;
`;

const SaveBtn = styled.button`
  display: inline-block;
  width: 150px;
  height: 38px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  color: white;
  background-color: #fd7e14;
  margin: 1% 0% 0px 30%;
  font-size: 13px;
`;

function PersonalInfo() {
  const url = '/api/t/user/info'
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getJwt(url)
      .then(function (response) {
        const data = response.data.response;
        console.log(data);
        setProduct(data);
      })
      .catch(function (error) {
        console.log('실패');
      });
  }, []);
  return (
    <PersonalWrapper>
      <PersonalDiv>
        <PersonalTop>
          <PersonalFtop>이름</PersonalFtop>
          <div>{product.name}</div>
        </PersonalTop>

        <PersonalSection>
          <PersonalFront>이메일</PersonalFront>
          <div>{product.email}</div>
        </PersonalSection>

        <PersonalSection>
          <PersonalFront>전화</PersonalFront>
          <div>{product.tel}</div>
        </PersonalSection>

        <PersonalSection>
          <PersonalFront>성별</PersonalFront>
          <LabelDiv>
            <form>
              <label>
                <input type="radio" name="sex" />
                &nbsp;여성
              </label>
              &emsp;
              <label>
                <input type="radio" name="sex" checked />
                &nbsp;남성
              </label>
            </form>
          </LabelDiv>
        </PersonalSection>

        <PersonalSection>
          <PersonalFront>생일</PersonalFront>
          <div>{product.birth}</div>
        </PersonalSection>

        <PersonalSection>
          <PersonalFront>알림설정</PersonalFront>
          <TextDiv>파격할인/이벤트/쿠폰 알림 등의 정보를 받아보시겠습니까?</TextDiv>
          <FormDiv>
            <form>
              <label>
                <input type="radio" />
                SMS
              </label>
              &emsp;
              <label>
                <input type="radio" />
                이메일
              </label>
            </form>
          </FormDiv>
        </PersonalSection>
        <Link to="./leave">
          <OutButton>회원탈퇴</OutButton>
        </Link>
        <SaveBtn>회원정보 수정하기</SaveBtn>
      </PersonalDiv>
    </PersonalWrapper>
  );
}

export default PersonalInfo;