import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IMG1 from '../../img/classtest.png';
import KakaoMap from "./Map";
import starImg from '../../img/stars.png';
import favImg from '../../img/fav_button_img.png';
import shareImg from '../../img/share_button_img.png';

// 연동 코드 -------------------------------

function ClassDetailPage({match}) {

    const i = match.params.id;
    const [tab, setTab] = useState(1);

    // axios 데이터 -----------------------------------------------
    const [classData, setClassData] = useState([]);

    useEffect(()=>{
        axios
        .get(`/api/c/${i}`)
        .then((result) => setClassData(result.data.response))
    }, []);

    console.log(classData);

    return (
        <ClassDetail>
            <LeftContent>
                <IMG_C>
                <img src={IMG1} />
                <IMGS_C>
                {
                    classData.imageList.map((img, i) => {
                        return (
                            <div>
                                <img src={img.i} />
                            </div>
                        );
                    })
                }
                {/* <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} />
                <img src={IMG1} /> */}
                </IMGS_C>
                </IMG_C>
                <Information_C>
                    <Menu_bar>
                    <button onClick={()=>{setTab(1)}}>소개</button>
                    <button onClick={()=>{setTab(2)}}>장소</button>
                    <button onClick={()=>{setTab(3)}}>참여후기</button>
                    <button onClick={()=>{setTab(4)}}>댓글</button>
                    </Menu_bar>

                    <Changed_Menu tab={tab} classData={classData} />
                    
                </Information_C>
            </LeftContent>
            <RightContent>
                <Author_R>
                    {classData.authorName}
                </Author_R>
                <Category_R>
                    {classData.categoryName}
                </Category_R>
                <Title_R>
                    {classData.name}
                </Title_R>
                <Price_R>
                    {classData.price} 원
                </Price_R>
                <Favorite_R>
                    <img src={favImg} />&nbsp;&nbsp;즐겨찾기
                </Favorite_R>
                <Share_R>
                    <img src={shareImg} />&nbsp;&nbsp;공유하기
                </Share_R>
                <ClassInfo_R>
                    <p>
                        <h1>난이도<br /><h4>{classData.level}</h4></h1>
                        <h2>소요시간<br /><h4>{classData.duration} 시간</h4></h2>
                        <h3>수업인원<br /><h4>최대 {classData.max}명</h4></h3>
                    </p>
                </ClassInfo_R>
                <Reservation_B>
                    예약하기
                </Reservation_B>
            </RightContent>
        </ClassDetail>
    )
}

function Changed_Menu(props) {

    // 댓글 삭제
    const [deleteComment, setDeleteComment] = useState();

    const PostDeleteComment = (deleteId) => {
        axios.post(
            '/api/t/w/product/{product_id}',
            {id : deleteId})
            .then(function (response) {console.log(response);})
            .catch(error => {console.log('error : ',error.response)}
        );
    }

    const PostComment = async(inputs) => {
        const data = {
            comment: inputs.comment
        }
        try {
            axios
            .post(`/api/{class_id}/comment`, data)
        }
        catch(e) {
            console.log("error");
        }
    };

    const [inputs, setInputs] = useState({newComment:""});
    const { newComment } = inputs;

    const onChange = (e)=>{
        const {name, value} = e.target;
        setInputs({[name]:value});
    };


    if(props.tab === 1){
        return (
                <Info>
                        <h1>안녕하세요  :)</h1>
                        <h1>{props.classData.authorName} 입니다.</h1>
                        <h2>제가 진행 할 금손 클래스는 ...</h2>
                        <p>
                        {props.classData.description}
                        수업시간<br /><br /><br />
                        수업당일 제작 - 2시간 소요예정<br /><br />
                        (제작시간은 개인차가 있습니다. 일정에 여유를 가지고 방문해주세요.)<br /><br />
                        클래스시간은 3타임으로 운영되고 있습니다.<br /><br /><br />
                        ★원하시는 시간대를 메세지로 예약해주세요★<br /><br /><br />
                        10:00~12:00<br /><br />
                        13:00~15:00<br /><br />
                        16:00~18:00<br /><br /><br />
                        수업정원은 4명입니다.<br /><br />
                        </p>
                        <h2>이런 분들에게 추천드려요 !</h2>
                        <p>
                        나만의 시간을 가질수 있어서 스트레스 해소에 좋습니다.<br />
                        정성스럽게 직접만든 작품을 선물해보세요.<br />
                        마크라메 매듭법을 배워 집에서 다양한 작품을 만들어 보세요.<br />
                        나만의 인테리어를 완성해보세요.<br />
                        </p>
                        <h2>메모</h2>
                        <p>
                        구성품<br /><br />
                        마크라메 작품 1개 + 데코용 조화, 리본 + 고리<br />
                        (수업이 끝난후 집에서 만드실수 있는 재료 별도 구매가능)<br />
                        </p>
                    </Info>
        );
    }

    if(props.tab === 2){
        return (
            <Addr>
                        <h2>장소 및 편의시설</h2>
                        {/* <KakaoMap /> */}
                        <h3>취소 및 환불 정책</h3>
                        <h4>클래스 5일 전 취소 시</h4>
                        <h5><Green>100%</Green> 환불</h5>
                        <h4>클래스 4일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>5%</Green> 차감 후 환불</h5>
                        <h4>클래스 3일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>10%</Green> 차감 후 환불</h5>
                        <h4>클래스 2일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>20%</Green> 차감 후 환불</h5>
                        <h4>클래스 1일 전 취소 시</h4>
                        <h5>클래스 금액의 <Green>30%</Green> 차감 후 환불</h5>
                        <h4>클래스 당일 취소나 불참 시</h4>
                        <h5><Red>환불 불가</Red></h5>
                        <h4>예약 당일 밤 12시 이전 취소 시</h4>
                        <h5><Green>100%</Green> 환불</h5>
            </Addr>
        );
    }

    if(props.tab === 3){
        return (
            <Review>
                <p>참여후기</p>
                {
                    props.classData.reviewList.map((review, i) => {
                        const rate = (review.rate)*2;
                        return (
                            <div>
                            <h1>{review.userName}</h1>
                            {/* <h4>{reviews[i].rate}</h4> */}
                            {/* <h4><img src={starImg} /></h4> */}
                            <Stars>
                            <Star_out>
                                <img src={starImg} />
                                <Star_in width={rate}>
                                    <h4></h4>
                                </Star_in>
                            </Star_out>
                            </Stars>
                            <h2>{review.date}</h2>
                            <h3>{review.content}</h3>
                            </div>
                        );
                    })
                }                        
            </Review>
        );
    }

    if(props.tab === 4){
        return (
            <Comment>
                <p>댓글</p>
                <CommentScroll>
                {
                    // 원래는 classData.comments.map((comment, i) 임
                    props.classData.commentList.map((comment, i)=>{
                        return(
                            <div>
                                <h1>• {comment.userName}</h1>
                                <button onClick={()=> {
                                    PostDeleteComment(comment.id)
                                }}>X</button>
                                <h2>{comment.content}</h2>
                            </div>
                        );
                    })
                }
                </CommentScroll>
                {/* 댓글 추가 방법 1 */}
                <textarea 
                name="comment" 
                type="comment" 
                placeholder="댓글을 입력해주세요." 
                onChange={onChange}
                value={newComment}
                required
                />
                <button onClick={() => PostComment(inputs)}>댓글 등록</button>
                {/* 댓글 추가 방법 2 */}
                {/* <input placeholder="댓글을 입력해주세요" onChange={()=>{setNewComment(e.target.value)}} /> */}
            </Comment>
        );
    }
}

// 기타 css
const Red = styled.span`
color: red;
`
const Green = styled.span`
color: green;
`

// Main
const ClassDetail = styled.div`
width: 1000px;
padding-top: 50px;
margin: auto;
`
// Left
const LeftContent = styled.div`
width: 550px;
display: inline-block;
`
// IMG
const IMG_C = styled.div`
width: 100%;
margin: auto;
img {
    width: 100%;
}
`
const IMGS_C = styled.div`
padding: 15px 0px;
text-align: center;
img {
    width: 55px;
    margin-right: 4px;
}
`
// 클래스 정보
const Information_C = styled.div`
width: 100%;
padding: 20px 0px;
text-align: center;
button {
    width: 25%;
    padding: 15px 0px;
    margin-bottom: 30px;
    display: inline-block;
    background-color: white;
    border-top: 1px solid lightgray;
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid lightgray;
}
`
// 메뉴바
const Menu_bar = styled.div`
position: sticky;
top: 0px;
background-color: white;
z-index: 99;
`
// Info
const Info = styled.div`
h1 {
    padding: 0px 0px 0px 20px;
    text-align: left;
    font-size: 25px;
    font-weight: bolder;
}
h2 {
    padding: 50px 0px 50px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
p {
    padding: 0px 20px;
    text-align: left;
}
`
// Addr
const Addr = styled.div`
width: 100%;
padding: 10px 0px;
h2 {
    padding: 0px 0px 50px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
h3 {
    padding: 50px 20px 20px 20px;
    text-align: left;
    font-size: 18px;
}
h4 {
    width: 37%;
    padding: 10px 0px 10px 20px;
    margin: 0;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    background-color: rgb(233, 233, 233);
    border-bottom: 1px solid rgb(206, 206, 206);
    /* border-right: 1px solid rgb(206, 206, 206); */
}
h5 {
    width: 63%;
    padding: 0px 0px 0px 20px;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
}
`
const Map = styled.div`
width: 500px;
`
// Review
const Review = styled.div`
height: 600px;
overflow: scroll;
p {
    padding: 10px 0px 30px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
h1 {
    width: 450px;
    padding: 20px 20px 10px 20px;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
}
h2 {
    padding: 10px 20px;
    font-size: 10px;
    font-weight: 500;
    text-align: left;
}
h3 {
    padding: 10px 20px 40px 20px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    border-bottom: 1px solid lightgray;
}
h4 {
    width: 100px;
    display: inline-block;
    text-align: right;
}
img {
    width: 100px;
}
`

const Stars = styled.div`
width: 100px;
/* height: 20px; */
display: inline-block;
`
const Star_out = styled.span`
img {
    width: 100px;
    /* height: 20px; */
    position: relative;
    z-index: 2;
    left: -15px;
}
`
const Star_in = styled.span`
h4 {
    width: ${props => props.width}%;
    height: 16px;
    float: left;
    position: relative;
    background-color: rgb(240, 221, 6);
    z-index: 1;
    top: -18px;
    left: -15px;
}
`

// Comment
const Comment = styled.div`
p {
    padding: 10px 0px 30px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
}
div {
    margin: 0px 10px 30px 10px;
}
h1 {
    width: 100%;
    padding: 20px 10px 0px 20px;
    font-size: 16px;
    text-align: left;
    font-weight: 500;
}
h2 {
    width: 100%;
    padding: 10px 10px 20px 30px;
    font-size: 15px;
    text-align: left;
}
textarea {
    width: 70%;
    display: inline-block;
}
button {
    width: 20%;
    display: inline-block;
    margin-top: -20px;
    border: none;
}
`
const UploadB = styled.div`
width: 70%;
float: right;
padding: 0px 10px;
background-color: pink;
top: -30px;
`
const CommentScroll = styled.div`
height: 600px;
overflow: scroll;
border: 1px solid rgb(233, 233, 233);
border-radius: 10px;
h1 {
    width: 50%;
    display: inline-block;
}
button {
    width: 50%;
    display: inline-block;
    text-align: right;
    font-size: 15px;
    padding-right: 30px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}
`
// Right
const RightContent = styled.div`
width: 450px;
padding: 10px 20px 10px 20px;
margin: 0px 0px 0px 20px;
display: inline-block;
position: absolute;
border: 1px solid lightgray;
border-radius: 5px;
`
const Author_R = styled.div`
width: 50%;
padding-top: 10px;
display: inline-block;
text-align: left;
font-size: 15px;
`
const Category_R = styled.div`
width: 50%;
padding-top: 10px;
padding-right: 5px;
display: inline-block;
text-align: right;
font-size: 15px;
`
const Title_R = styled.div`
width: 100%;
padding: 20px 0px 0px 0px;
font-size: 20px;
font-weight: 500;
`
const Price_R = styled.div`
width: 100%;
padding: 20px 0px 30px 0px;
text-align: left;
font-size: 25px;
font-weight: 600;
`
const Favorite_R = styled.button`
width: 50%;
padding: 5px 0px;
display: inline-block;
text-align: center;
font-size: 15px;
background-color: white;
border: 1px solid lightgray;
border-radius: 3px;
img {
    width: 25px;
}
`
const Share_R = styled.button`
width: 50%;
padding: 5px 0px;
display: inline-block;
text-align: center;
font-size: 15px;
background-color: white;
border: 1px solid lightgray;
border-radius: 3px;
img {
    width: 25px;
}
`
const ClassInfo_R = styled.div`
padding: 20px 0px;
p {
    width: 100%;
    padding: 15px 0px 0px 0px;
    background-color: rgb(235, 235, 235);
    border-radius: 3px;
}
h1 {
    width: 33%;
    display: inline-block;
    font-size: 13px;
    font-weight: 300;
    text-align: center;
    border-right: 1px solid rgb(195, 195, 195);
}
h2 {
    width: 33%;
    display: inline-block;
    font-size: 13px;
    font-weight: 300;
    text-align: center;
    border-right: 1px solid rgb(195, 195, 195);
}
h3 {
    width: 33%;
    display: inline-block;
    font-size: 13px;
    font-weight: 300;
    text-align: center;
}
h4 {
    padding-top: 10px;
    font-size: 14px;
}
`
const Reservation_B = styled.button`
width: 100%;
padding: 12px 0px;
margin-top: -5px;
margin-bottom: 20px;
border: 2px solid lightgray;
border-radius: 3px;
background-color: rgb(220, 220, 220);
`


export default ClassDetailPage;
