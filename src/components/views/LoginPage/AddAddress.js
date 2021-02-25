import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data/AddressData';
import AuthenticationService from './ AuthenticationService';

const Wrapper = styled.div`
  width: 100%;
  margin: 2% 0% 0% 0%;
`;

const DeliveryDiv = styled.div`
  margin: 0px 30% 0px 28%;
`;

const BoxDiv = styled.div`
  width: 800px;
  height: 310px;
  border: 1px solid lightgray;
  margin: 3% 0% 0% 0%;
  Link {
    text-decoration: none;
  }
`;

const BoxTop = styled.div`
  width: 800px;
  height: 40px;
  border: 1px solid lightgray;
  background-color: #f6f8f6;
  font-size: 12px;
  color: #495057;
`;

const BoxBottom = styled.div`
  margin-top: 20px;
  span {
    color: red;
    margin: 0% 1% 0% 1%;
    font-size: 23x;
  }
`;

const AddAd = styled.p`
  display: flex;
`;

const CancleBtn = styled.button`
  display: inline-block;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  width: 55px;
  height: 30px;
  background-color: white;
  font-size: 14px;
`;

const SaveBtn = styled.button`
  display: inline-block;
  text-align: center;
  border: none;
  border-radius: 5%;
  width: 55px;
  height: 30px;
  color: white;
  background-color: #f08c00;
  font-size: 14px;
`;

const SearchBtn = styled.button`
  display: inline-block;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  margin: 0% 0% 0% 0.5%;
  width: 65px;
  height: 25px;
  background-color: white;
  font-size: 12px;
`;

const AddInput = styled.input`
  width: 50%;
  height: 25px;
  font-size: 14px;
`;

const ZipInput = styled.input`
  width: 13%;
  height: 25px;
  font-size: 14px;
`;


function AddDetail({match}) {
  const i = match.params.id; 
  const [users, setUsers] = useState([
    {
      id: 1,
      name: '받는 분 이름을 입력해주세요',
      tel: '전화번호를 입력해주세요',
      zipcode: '우편번호',
      address: '기본 주소',
      addDetail: '나머지 주소',
    },
    {
      id: 2,
      name: '받는 분 이름을 입력해주세요',
      tel: '전화번호를 입력해주세요',
      zipcode: '우편번호',
      address: '기본 주소',
      addDetail: '나머지 주소',
    },
    {
      id: 3,
      name: '받는 분 이름을 입력해주세요',
      tel: '전화번호를 입력해주세요',
      zipcode: '우편번호',
      address: '기본 주소',
      addDetail: '나머지 주소',
    },
  ]);

  const { name, tel, zipcode, address, addDetail } = users;

  const onChange = (e, id) => {
    const { name, value } = e.target;
    setUsers(users.map(
      user => user.id === id 
      ? {...user, [name] :value} 
      :  user
    ));
  }

  return (
    <div>
      <BoxDiv>
        <BoxTop>
          <p className="boxText">배송지 1 </p>
        </BoxTop>
        <BoxBottom>
          <p>
            <span>*</span>받는분 &emsp;&emsp;&nbsp;
            <AddInput name="name" onChange={onChange} value={name} placeholder={users[0].name}></AddInput>
          </p>
          <p>
            <span>*</span>전화번호 &emsp;&nbsp;
            <AddInput name="tel" onChange={onChange} value={tel} placeholder={users[0].tel}></AddInput>
          </p>
          <AddAd>
            <span>*</span>주소&emsp;&emsp;&emsp;&nbsp;
            <ZipInput name="zipcode" onChange={onChange} value={zipcode} placeholder={users[0].zipcode}></ZipInput>
            <SearchBtn>주소 찾기</SearchBtn>
          </AddAd>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <AddInput name="address" onChange={onChange} value={address} placeholder={users[0].address}></AddInput>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <AddInput name="addDetail" onChange={onChange} value={addDetail} placeholder={users[0].addDetail}></AddInput>
          </p>
          <Link to="./address">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;<CancleBtn>취소</CancleBtn>
          </Link>
          &nbsp;<SaveBtn onClick={() => PostUserInfo(users[0], i)}>저장</SaveBtn>
        </BoxBottom>
      </BoxDiv>

      <BoxDiv>
        <BoxTop>
          <p className="boxText">배송지 2 </p>
        </BoxTop>
        <BoxBottom>
          <p>
            <span>*</span>받는분 &emsp;&emsp;&nbsp;
            <AddInput name="name" onChange={onChange} value={name}  placeholder={users[1].name}></AddInput>
          </p>
          <p>
            <span>*</span>전화번호 &emsp;&nbsp;
            <AddInput name="tel" onChange={onChange} value={tel} placeholder={users[1].tel}></AddInput>
          </p>
          <AddAd>
            <span>*</span>주소&emsp;&emsp;&emsp;&nbsp;
            <ZipInput name="zipcode" onChange={onChange} value={zipcode} placeholder={users[1].zipcode}></ZipInput>
            <SearchBtn>주소 찾기</SearchBtn>
          </AddAd>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <AddInput name="address" onChange={onChange} value={address} placeholder={users[1].address}></AddInput>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <AddInput name="addDetail" onChange={onChange} value={addDetail} placeholder={users[1].addDetail}></AddInput>
          </p>
          <Link to="./address">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;<CancleBtn>취소</CancleBtn>
          </Link>
          &nbsp;<SaveBtn onClick={() => PostUserInfo(users[1], i)}>저장</SaveBtn>
        </BoxBottom>
      </BoxDiv>

        <BoxDiv>
        <BoxTop>
          <p className="boxText">배송지 3 </p>
        </BoxTop>
        <BoxBottom>
          <p>
            <span>*</span>받는분 &emsp;&emsp;&nbsp;
            <AddInput name="name" onChange={onChange} value={name} placeholder={users[2].name}></AddInput>
          </p>
          <p>
            <span>*</span>전화번호 &emsp;&nbsp;
            <AddInput name="tel" onChange={onChange} value={tel} placeholder={users[2].tel}></AddInput>
          </p>
          <AddAd>
            <span>*</span>주소&emsp;&emsp;&emsp;&nbsp;
            <ZipInput name="zipcode" onChange={onChange} value={zipcode} placeholder={users[2].zipcode}></ZipInput>
            <SearchBtn>주소 찾기</SearchBtn>
          </AddAd>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <AddInput name="address" onChange={onChange} value={address} placeholder={users[2].address}></AddInput>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <AddInput name="addDetail" onChange={onChange} value={addDetail} placeholder={users[2].addDetail}></AddInput>
          </p>
          <Link to="./address">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;<CancleBtn>취소</CancleBtn>
          </Link>
          &nbsp;<SaveBtn onClick={() => PostUserInfo(users[2], i)}>저장</SaveBtn>
        </BoxBottom>
      </BoxDiv>
    </div>
  );
}

function ShowAddress() {
  return (
    <Wrapper>
      <DeliveryDiv>
        <h2>주소(배송지) 관리</h2>
        <br />
        <AddDetail />
      </DeliveryDiv>
    </Wrapper>
  );
}
export default ShowAddress;
