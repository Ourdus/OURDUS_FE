import React, { useState } from 'react';
import '../../css/Login.css';
import data from '../../data/AddressData';
import AddressForm from '../Section/Login/AddressForm';
import ShowAddress from './ShowAddress';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 2% 0% 0% 0%;
`;

const DeliveryDiv = styled.div`
  margin: 0px 30% 0px 28%;
`;

function DeliveryAdd() {
  return (
    <Wrapper>
      <DeliveryDiv>
        <h2>주소(배송지) 관리</h2>
        <br />
        <ShowAddress />
      </DeliveryDiv>
    </Wrapper>
  );
}

export default DeliveryAdd;
