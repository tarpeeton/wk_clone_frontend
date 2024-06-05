import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/Welcome';
import { Register } from './components/auth/Register'

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/register' element={<Register/>} /> 
            </Routes>
        </Router>
    );
};

export default App;
