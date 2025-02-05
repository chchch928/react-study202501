import './App.css'
import CourseInput from "./components/CourseGoals/CourseInput.jsx";
import CourseList from "./components/CourseGoals/CourseList.jsx";
import {useState} from "react";

// 컴포넌트
const App = () => {

    // 목표 데이터들의 묶음배열
    const [goals, setGoals] = useState([]);

    // CourseInput에게 전달할 함수
    const onAddGoal = (goal) => {
        setGoals([...goals,goal]);
    };

    console.log(goals);

    return (
      <div>
          <section id = 'goal-form'>
              <CourseInput onAdd = {onAddGoal} />
          </section>

          <section id = 'goals'>
              <CourseList items={goals} />
          </section>
      </div>
    );
}


export default App;
