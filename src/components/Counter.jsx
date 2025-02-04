import React, {useState} from 'react';

const Counter = () => {

  // useState의 리턴값:
  // 1- 상태관리 변수값
  // 2 - 상태변경 함수

  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    // 상태값을 업데이트 할 때는 상태값에 직접 접근하면 안되고
    // 반드시 setter를 통해 업데이트 해야함

    setCount(count+1);
  }

  const decreaseHandler = () => {
    setCount(count-1);
  }


  return (
    <div>
      <h1>숫자: {count}</h1>
      <button onClick={increaseHandler} >증가</button>
      <button onClick={decreaseHandler} >감소</button>
    </div>
  );
};

export default Counter;