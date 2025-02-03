import React from "react";
import Hello from "./components/Hello.jsx";
import Bye from "./components/Bye.jsx";

// 컴포넌트
function App() {

    /*
      jsx: 리액트에서 사용하는 특수한 js 문법, 태그 그대로 쓰면 알아서 변환
       - 규칙 :
    1. return 안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

    */
    // const $h1 = React.createElement('h1',null,'안녕 리액트')을 리액트에서 알아서 만들어줌;

    const $h1 = <h1>안녕 리액트</h1>;

    const subject = 'Vanilla Javascript'

    // return $h1;

    return (
        <>
            <Bye />
            <Hello />
            <Bye />
        </>


    );

}

export default App
