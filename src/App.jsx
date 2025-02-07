import { useState } from 'react';
import './App.css';
import MainHeader from './components/SideEffect/MainHeader';
import Home from './components/SideEffect/Home';
import Login from './components/SideEffect/Login';

// 컴포넌트
const App = () => {


    return <>
        <MainHeader />
        <main>
            {/* <Home /> */}
            <Login />
        </main>
    </>;
};

export default App;