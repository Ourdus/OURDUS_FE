import React, { useState } from 'react';

function CreateChart({ username, Pnumber, ZipCode, Address, AddDetail, onChange, onCreate }) {
  let [count, setCount] = useState(1);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="box">
      <div className="boxTop">
        <p className="boxText">배송지 {count} </p>
      </div>
      <div className="boxBottom">
        <p>
          *받는분 &emsp;&emsp; <input name="username" placeholder="받는분 이름을 입력해주세요." required />
        </p>
        <p>
          *전화번호 &emsp; <input name="Pnumber" required></input>
        </p>
        <p className="addAd">
          *주소&emsp;&emsp;&emsp;&nbsp; <input name="ZipCode" placeholder="우편번호" required />
          &nbsp;<button>주소찾기</button>
        </p>
        <p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
          <input name="Address" placeholder="기본 주소" required />
        </p>
        <p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
          <input name="AddDetail" placeholder="나머지 주소" required />
        </p>
        &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<button>취소</button>&nbsp;
        <button className="saveBtn">저장</button>
      </div>
    </div>
  );
}

export default CreateChart;
