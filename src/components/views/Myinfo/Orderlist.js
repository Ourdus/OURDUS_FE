import styled from 'styled-components';
import myinfobanner from '../../img/myinfocf.png';
import { Link } from 'react-router-dom';
import '../../css/personalInfo.css';
import sidebarimage from '../../img/sidebarimage.png';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
/*sidebar 디자인을 위한 css*/

export const banner = styled.div`
    margin-left: 50px;
    
`;
export const showtopic = styled.div`
margin-left: 5%;
margin-top: 5%;
`;
export const showMoreorder2 = styled.div`
  margin-left: 10%;
  color: white;
  background: orange;
  padding: 0.375rem 0.75rem;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  `;
  export const btn4 = styled.div`
  color: white;
  background: #d3d3d3;
  padding: 0.375rem 0.75rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  width: 26%;
  line-height: 1.5;
  `;
  
function Orderlist(){
    const [product, setProduct] = useState([]);
    useEffect(() => {
       try {
       axios
       .get('/api/t/w/me/order/payment')
       .then(function(response) {
          setProduct(response.data.response);
       })
       } catch (e) {
       console.log('error');
       }
    }, []);

  //const i = match.params.id; //주소 (work/detail/:id) 중 id 값 받아온 것
  

    return(
   
      <div className="showtopic">
            <div className="sidebar">
       <div className="topsidebar">
         <button className="sidebarbutton" href="#">
           <img src={sidebarimage} />
         </button>
         <br />
         아기손
         <h6>아이유</h6>
         
       </div>
       <div className="headsidebar">MYMENU</div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">주문배송</div>
         <div className="sidebarlink">
           {' '}
           
             주문내역
          
           <br />
           취소/환불내역
         </div>
       </div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">알림 및 메시지</div>
          알림
         <br />
         메시지
       </div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">선물함</div>
          받은 선물함
         <br />
         보낸 선물함
       </div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">나의 구매후기</div>
         후기 쓰기
         <br />
         내가 쓴 후기
       </div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">관심리스트</div>
         즐겨찾기(★)
         <br />
         좋아하는작가(♥)
         <br />
         최근 본 작품
       </div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">할인혜택</div> VIP클럽
         <br />
         쿠폰함
         <br />
         적립금
         <br />
         친구 초대 쿠폰
       </div>
       <div className="smallsidebar">
         <div className="smallsidebartopic">내 정보</div>
         회원 등급
         <br />
         회원 정보 관리
         <br />
         신용카드 및 환불계좌 관리
         <br />
         주소(배송지) 관리
         <br />
         본인 인증
       </div>
     </div>
          <h2>최근 주문내역</h2>
          <div className="myorderlist">
      
         <button className="btn4" >
           작품
         </button>
         
         <button className="btn4" >
           온라인 클래스
         </button>
         <button className="btn4" >
           오프라인 클래스
         </button>
         <div className="shoplist">
  
         {product.slice(0, 10).map((a, i) => {
            <div className="infogroup">
            <div className="date_price">
              <div className="info_date"> get orderDate 2020-10-25</div>
              <div className="info_price"> get price 7,8000원</div>
            </div>
            <div className="date_price">
              <div className="info_date"> {product[i].orderDate}</div>
              <div className="info_price"> {product[i].price}</div>
            </div>
    
            <div className="workinfolist">
            <div className="workinfodetail">
            
            {product[i].productName} <br />
            {product[i].optionInfo}
            </div>
            <div className="workauthor">
                <div>{product[i].optionInfo}</div>
               <div><button class="secondinfobutton">메시지로 문의</button></div>
            </div>
            <div className="reveiwbuttongroup">
              <div><button class="firstreveiwbutton">구매후기 작성</button></div>
              <div><button class="secondinfobutton">발송 정보 조회</button></div>
            </div>
            </div>
          </div>
          })}

       
      
  
  
  
         </div>
         <Link to={'/main/work'} >
         <button className="showMoreorder2" onClick>
         
           작품 구경하러 가기
         </button>
         </Link>
         <div className="banner">
          <button className="sidebarbutton3" href="#">
           <img src={myinfobanner} />
         </button>
         </div>
       </div>
      </div>
      
   );
  }
  
export default Orderlist