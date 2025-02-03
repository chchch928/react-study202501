import ExpenseItem from "./components/expenses/ExpenseItem.jsx";

const App = () => {
    return (
        <>
            <ExpenseItem
                title={'닭강정'}
                price={8000}
                date={new Date(2025, 1, 3)}
            />
            <ExpenseItem
                title={'아이스크림'}
                price={3000}
                date={new Date(2025, 1, 1)}
            />
            <ExpenseItem
                title={'자바책 구매'}
                price={30000}
                date={new Date(2024, 12, 23)}
            />
        </>
    );
};

export default App;
