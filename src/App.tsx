import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/Welcome';
import { Register } from './components/auth/Register'
import ConfirmCode from './components/auth/ConfirmCode'

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/register' element={<Register/>} /> 
                <Route path='/confirm/code' element={<ConfirmCode/>}/>
            </Routes>
        </Router>
    );
};

export default App;
