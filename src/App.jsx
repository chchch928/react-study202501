import ExpenseItem from "./components/expenses/ExpenseItem";
import ExpenseList from "./components/expenses/ExpenseList.jsx";
import Counter from "./components/Counter.jsx";
import NewExpense from "./components/new-expense/NewExpense.jsx";
import CheckBoxStyle from "./components/practice/CheckBoxStyle.jsx";

// 컴포넌트
const App = () => {



    // 서버에서 지출항목 JSON이 응답됨
    const expenses = [
        {
            title: '치킨',
            price: 30000,
            date: new Date(2025, 2 - 1, 3),
        },
        {
            title: '족발',
            price: 50000,
            date: new Date(2024, 9 - 1, 30),
        },
        {
            title: '헬스장등록',
            price: 300000,
            date: new Date(2025, 1 - 1, 15),
        },
    ];

    // 상향식 데이터 전달을 위해 하위컴포넌트에게 함수 하나를 내려줘야함
    const onAddExpense = (newUserData) => {
        console.log('상향식데이터 전달용 함수')
        // console.log(newUserData)
        expenses.push(newUserData)

        console.log(expenses)
    };

    return (
        <>
        <NewExpense onSave = {onAddExpense} />
        <ExpenseList expenses = {expenses}/>
        </>
    );
}


export default App;
