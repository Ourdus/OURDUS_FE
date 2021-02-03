import React, { useState } from 'react';
import data from '../../data/AddressData';

// showAddress는 주소(배송지)관리에 대한 정보를 저장 해놓은 곳

function ShowDetail() {
  let [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="box">
        <div className="boxTop">
          <p className="boxText">배송지 0 </p>
        </div>
        <div className="boxBottom">
          <p>*받는분 &emsp;&emsp; {data[0].username} </p>
          <p>*전화번호 &emsp; {data[0].Pnumber}</p>
          <p className="addAd">
            *주소&emsp;&emsp;&emsp;&nbsp; {data[0].ZipCode}
            &nbsp;&nbsp;<button>주소찾기</button>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            {data[0].Address}
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            {data[0].AddDetail}
          </p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<button onClick={onIncrease}>수정</button>
        </div>
      </div>

      <div className="box">
        <div className="boxTop">
          <p className="boxText">배송지 1 </p>
        </div>
        <div className="boxBottom">
          <p>*받는분 &emsp;&emsp; {data[1].username} </p>
          <p>*전화번호 &emsp; {data[1].Pnumber}</p>
          <p className="addAd">
            *주소&emsp;&emsp;&emsp;&nbsp; {data[1].ZipCode}
            &nbsp;&nbsp;<button>주소찾기</button>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            {data[1].Address}
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            {data[1].AddDetail}
          </p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<button onClick={onIncrease}>수정</button>
        </div>
      </div>

      <div className="box">
        <div className="boxTop">
          <p className="boxText">배송지 2 </p>
        </div>
        <div className="boxBottom">
          <p>*받는분 &emsp;&emsp; {data[2].username} </p>
          <p>*전화번호 &emsp; {data[2].Pnumber}</p>
          <p className="addAd">
            *주소&emsp;&emsp;&emsp;&nbsp; {data[2].ZipCode}
            &nbsp;&nbsp;<button>주소찾기</button>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            {data[2].Address}
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            {data[2].AddDetail}
          </p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<button onClick={onIncrease}>수정</button>
        </div>
      </div>
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
