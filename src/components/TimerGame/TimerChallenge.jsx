import React, {useState} from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  //타이머가 시작되었는지 확인하는 상태값
  const [timerStarted,setTimerStarted] = useState(false);

  // 시간이 다 지났는지 여부
  const [timerExpired,setTimerExpired] = useState(false);

  // 타이머 id 저장
  let timer;

  // start 이벤트
  const handleStart = e => {
    setTimerStarted(true);

    /*
      setTimeout실행시 타이머의 id(aaa)가 생성된다.
      타이머 실행시 setTimerExpired가 실행됨.
      상태변수는 실행시 컴포넌트를 리렌더링함.
      리렌더링할 때 기존에 저장한 timer id(aaa)를 없앤다.
      따라서 제대로 clear를 수행하지 못함
    */

    // 실제 시간을 실행
    timer = setTimeout(() => {
      console.log(`${targetTime}초가 지남!`);
      setTimerExpired(true);
    },targetTime * 1000);

    console.log(`start timer : ${timer}`);
  }

  // stop 이벤트
  const handleStop = e => {
    console.log(`stop timer: ${timer}`)
    console.log('타이머를 중지함');
    clearTimeout(timer); // 타이머 해제
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lose!!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick = {timerStarted? handleStop : handleStart}>
          {timerStarted? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className="">
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;