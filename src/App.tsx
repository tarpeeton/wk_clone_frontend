import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './components/Welcome'
import { Register } from './components/auth/Register'
import ConfirmCode from './components/auth/confirm/ConfirmCode'
import { NewPassword } from './components/auth/form/newPassword'
import { RegisterForm } from './components/auth/form/register'
import './index.css'

const App: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/confirm/code' element={<ConfirmCode />} />
				<Route path='/auth/register' element={<RegisterForm />} />
				<Route path='/auth/newPassword' element={<NewPassword />} />
			</Routes>
		</Router>
	)
}

export default App
