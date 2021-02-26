import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthenticationService from './ AuthenticationService';
import { PostJwt } from './TokenConfig';
import {deleteJwt} from './TokenConfig';

const EntireDiv = styled.div`
  width: 100%;
  height: 60vh;
  margin: 2% 0% 0% 25%;
  form {
    margin: 0.5% 0% 0% 0%;
  }
`;

const WithDrawText = styled.a`
  color: black;
  font-size: 25px;
  font-weight: bold;
  top: 10px;
  text-decoration: none;
`;

const TextWrapper = styled.div`
  font-size: 17px;
  width: 800px;
  margin: 2% 0% 0% 0%;
  h5 {
    font-size: 15px;
    font-weight: bold;
    margin: 0% 0% 2% 0%;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid lightgrey;
  margin: 0% 0% 0% 0%;
`;

const ContentDiv = styled.div`
  width: 100%;
  margin: 2% 0% 2% 2%;
  border: none;
`;

const SaveBtn = styled.button`
  display: inline-block;
  width: 120px;
  height: 38px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5%;
  color: white;
  background-color: #fd7e14;
  margin: 0.5% 0% 0px 18%;
  font-size: 13px;
`;


function ExpireID() {
  const history = useHistory();
  const WithDraw = async () => {
      deleteJwt()
        .then(() => { 
          history.push('../main/work')
        })
        .catch( (error) =>{
          console.log(error)
        })
    }
  return (
    <EntireDiv>
      <WithDrawText>회원탈퇴</WithDrawText>
      <TextWrapper>
        <h5>회원탈퇴 신청하기 전에 확인해주세요.</h5>
        <TextDiv>
          <ContentDiv>
            탈퇴 후 회원정보 및 이용기록은 모두 삭제되며, 다시 복구 할 수 없습니다.
            <br />
            작성한 구매후기와 결제 내역은 이용약관과 관련법에 의해 보관됩니다.
            <br />
            동일한 SNS계정과 이메일을 사용한 재가입은 24시간 이내에는 불가능합니다.
            <br />
          </ContentDiv>
        </TextDiv>
      </TextWrapper>
      <form>
        <label>
          <input type="radio" checked />
          &nbsp; 탈퇴를 신청합니다.
        </label>
      </form>
      <SaveBtn onClick={() => WithDraw()}>아이디어스 탈퇴</SaveBtn>
    </EntireDiv>
  );
}

export default ExpireID;
