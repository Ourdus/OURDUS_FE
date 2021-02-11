//    // 화면 로딩되면 받은 데이터 바로 보여주는 효과 = useEffect
//    useEffect(()=>{
//     axios.get(`/w/product/${i}`)
//     .then((newProduct)=>{
//     console.log('success')
//     setProduct(newProduct.data);  // = setProduct([...newProduct.data]);
// })
// .catch(()=>{
//     console.log('fail');
// })
// },[]);     // [] 사용 : 업데이트 시 실행 안되게 한다

// // axios GET -----------------------------------
// axios.get(`/w/product/${i}`)
// .then((newProduct)=>{
//     console.log('success')
//     // setProduct([...newProduct.data]);
//     setProduct(newProduct.data);
// })
// .catch(()=>{
//   //   Console.log('fail')
// })

// // axios POST ----------------------------------

// axios.post( '서버 URL', { id : "보낼 데이터", pw : "보낼 데이터"} );








// // import axios from "axios";

// // Products = async() => {
// //     axios({
// //         method: 'get',
// //         url: '/w/product/{product_id}',
// //         // responseType: 'stream',
// //         params: {
// //             // 매개변수 추가하는 기능
// //         }
// //       })
// //         .then(function (response) {
// //           setProducts
// //             response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
// //         });
// // };

//  // axios Header 설정
//  // axios 쿠키 설정


// // //동현오빠 코드

// // function KakaoButton({ history }) {
// //     const [users, setUsers] = useState(null);
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);
    
// //     useEffect(() => {
// //     return () => setLoading(false);
// //     }, []);
    
// //     const kakaoFetchUsers = async () => {
// //     const headers = {
// //     'Access-Control-Allow-Origin': '*',
// //     Accept: 'application/json',
// //     'Content-Type': 'application/x-www-form-urlencoded',
// //     };
// //     try {
// //         setUsers(null);
// //         setError(null);
// //         setLoading(true);
// //         const response = await axios.get('/users/login/kakao', headers);
// //         setUsers(response.data);
// //         } catch (e) {
// //         setError(e);
// //         }
// //         setLoading(false);
// //         };
        
// //         return (
// //         <a href="/users/login/kakao">
// //         <KakaoBtn onClick={kakaoFetchUsers}>
// //         <img src={kakaoLogo} alt="kakao" className="icon" />
// //         <span className="buttonText">카카오톡으로 로그인하기</span>
// //         </KakaoBtn>
// //         </a>
// //         );
// //     }
