import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import data from '../../data/AddressData';

const BoxDiv = styled.div`
  width: 800px;
  height: 310px;
  border: 1px solid lightgray;
  margin: 3% 0% 0% 0%;
  .DataSpan {
    font-size: 14px;
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
  .star {
    color: red;
    margin: 0% 1% 0% 1%;
    font-size: 23x;
  }
`;

const AddAd = styled.p`
  display: flex;
`;

const UpdataBtn = styled.button`
  display: inline-block;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  width: 55px;
  height: 30px;
  background-color: white;
  font-size: 14px;
`;

// showAddress는 주소(배송지)관리에 대한 정보를 저장 해놓은 곳
function ShowDetail() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: '김동현',
      tel:'',
      zipCode:'',
      address: '',
      addDetail:'',
    },
    {
      id:2,
      name: '',
      tel:'',
      zipCode:'',
      address: '',
      addDetail:'',
    },
    {
      id:3,
      name: '',
      tel:'',
      zipCode:'',
      address: '',
      addDetail:'',
    },
  ]);
  useEffect(() => {
    axios.get(`/api/t/user/address`).then((result) => setProduct(result.data));
  }, []);
  return (
    <div>
      <BoxDiv>
        <BoxTop>
          <p className="boxText">배송지 1 </p>
        </BoxTop>
        <BoxBottom>
          <p>
            <span className="star">*</span>받는분 &emsp;&emsp; <span className="DataSpan">{product[0].name}</span>{' '}
          </p>
          <p>
            <span className="star">*</span>전화번호 &emsp;<span className="DataSpan"> {product[0].tel}</span>
          </p>
          <AddAd>
            <span className="star">*</span>주소&emsp;&emsp;&emsp;&nbsp;<span className="DataSpan">{product[0].ZipCode} </span>
          </AddAd>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <span className="DataSpan">{product[0].address}</span>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <span className="DataSpan">{product[0].addDetail}</span>
          </p>
          <Link to="./addad">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;<UpdataBtn>수정</UpdataBtn>
          </Link>
        </BoxBottom>
      </BoxDiv>

      <BoxDiv>
        <BoxTop>
          <p className="boxText">배송지 2 </p>
        </BoxTop>
        <BoxBottom>
          <p>
            <span className="star">*</span>받는분 &emsp;&emsp; <span className="DataSpan">{product[1].name}</span>
          </p>
          <p>
            <span className="star">*</span>전화번호 &emsp; <span className="DataSpan">{product[1].tel}</span>
          </p>
          <AddAd>
            <span className="star">*</span>주소&emsp;&emsp;&emsp;&nbsp;<span className="DataSpan">{product[1].ZipCode}</span>
          </AddAd>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <span className="DataSpan">{product[1].address}</span>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <span className="DataSpan">{product[1].addDetail}</span>
          </p>
          <Link to="./addad">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;<UpdataBtn>수정</UpdataBtn>
          </Link>
        </BoxBottom>
      </BoxDiv>

      <BoxDiv>
        <BoxTop>
          <p className="boxText">배송지 3 </p>
        </BoxTop>
        <BoxBottom>
          <p>
            <span className="star">*</span>받는분 &emsp;&emsp; <span className="DataSpan">{product[2].name} </span>
          </p>
          <p>
            <span className="star"> *</span>전화번호 &emsp; <span className="DataSpan">{product[2].tel}</span>
          </p>
          <AddAd>
            <span className="star">*</span>주소&emsp;&emsp;&emsp;&nbsp;<span className="DataSpan">{product[2].ZipCode}</span>
          </AddAd>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <span className="DataSpan">{product[2].address}</span>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
            <span className="DataSpan">{product[2].addDetail}</span>
          </p>
          <Link to="./addad">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp;<UpdataBtn>수정</UpdataBtn>
          </Link>
        </BoxBottom>
      </BoxDiv>
    </div>
  );
}

function ShowAddress() {
  return (
    <div>
      <ShowDetail />
    </div>
  );
}
export default ShowAddress;
