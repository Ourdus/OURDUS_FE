import styled from 'styled-components';
import myinfobanner from '../../img/myinfocf.png';
import { Link } from 'react-router-dom';
import '../../css/personalInfo.css';
import sidebarimage from '../../img/sidebarimage.png';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

function Detailedorderlist(){
    //const order_id = props.params.id; //주문내역 (work/detail/:id) 중 id 값 받아온 것
   /* const [orderlist, setOrderlist] = useState([]);
    useEffect(() => {
        try {
        axios
        .get('/api/t/w/me/order/payment/detail/1')
        .then(function(response) {
            setOrderlist(response.data.response);
        })
        } catch (e) {
        console.log('error');
        }
    }, []);*/

    return(
        <div>

        <h5>배송 정</h5>{' '}
  
        <div>
            <div>받는분 : {/*orderlist.name*/} </div>
            <div>전화 :  {/*orderlist.phone*/}</div>
            <div>주소 :  {/*orderlist.addressMain*/}</div>
    </div>
        
        <h5>결제 정보</h5>{' '}
        <div>
            <div>

            보
            </div>
            <div>결제방법 : {/*orderlist.account*/} </div>
        </div>
        <div>
            <div>
                 작품금액 :  <br />
                 배송비 :  <br />
                 제주 / 도서상간 추가비용 : 0원<br />
                 작가쿠폰할인 : 0원<br />
                 아이디어스 VIP클럽 : 0원<br />
                 아이디어스 쿠폰 : 0원<br />
                 작가 후원하기 : 0원<br />
            </div>
            <div>
                  적립금 적립 :       <br />     
                  적립 기준 :   결제 완료시 적립 예정 상대로 바로 적립   <br />
                  가용 시점 :  작품 발송일로부터 7일 후 적립금 사용 가능 <br />
                  유효기간 :   적립일로부터 6개월  <br />
                 </div>
            <div>총 결제금액 : </div>
        </div>
       

            
        </div>
    )
}
export default Detailedorderlist();