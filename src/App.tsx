import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/Welcome';
import { Register } from './components/auth/Register'
import ConfirmCode from './components/auth/ConfirmCode'
import { RegisterForm } from './components/auth/form/register'
import { NewPassword } from './components/auth/form/newPassword'

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/register' element={<Register/>} /> 
                <Route path='/confirm/code' element={<ConfirmCode/>}/>
                <Route path='/auth/register' element={<RegisterForm/>} />
                <Route path='/auth/newPassword' element={<NewPassword/>} />
            </Routes>
        </Router>
    );
};

export default App;
