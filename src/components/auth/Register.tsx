import { ChangeEvent, FC  , MouseEvent} from 'react'
import { useState } from 'react'
import './auth.css'
import { QrCode } from './qrCode'
import { NavLink, useNavigate } from 'react-router-dom'

const Register: FC = () => {
	
	const [isChecked, setIsChecked] = useState<boolean>(true)
	const [data, setData] = useState<string>('+7')
	const navigate = useNavigate()

	const handleCheckboxChange = (): void => {
		setIsChecked(!isChecked)
	}
	const handeInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setData(e.target.value)
	}
	const navigateToConfirm = (e: MouseEvent<HTMLButtonElement>): void => {
		navigate('/confirm/code')
	}

	return (
		<div className='RegisterContent min-h-screen w-full flex content-center items-center'>
			<div className='contentItem  rounded-xl bg-zinc-900 mx-auto  flex flex-row justify-between p-3'>
				<div className='WkCode rounded-lg  bg-zinc-800 flex flex-col items-center '>
					<div className='QrContent flex flex-col items-center'>
						<div className='qrCode p-3 rounded-lg'>
							<QrCode />
						</div>
						<h1 className=' mt-4 text-white'>Быстрый вход по QR-коду</h1>
						<span className='my-2 font-normal QrInfo'>
							Отсканируйте QR-код сканером в приложении ВКонтакте или камерой
							устройства
						</span>
						<NavLink
							to='https://id.vk.com/about/faq/users/registration_and_login/login/QR/20313'
							className='InfoLinks'
						>
							Подробнее
						</NavLink>
					</div>
				</div>
				{/* wk Form */}
				<div className='WkForm   flex flex-col h-full '>
					<div className='stepInfoBody pb-4 flex flex-col items-center justify-center '>
						<div className='stepsvg '>
							<svg
								width='48'
								height='48'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								role='img'
								aria-hidden='true'
							>
								<path
									d='M0 9.6c0-4.5 0-6.8 1.4-8.2C2.8 0 5.1 0 9.6 0h.8c4.5 0 6.8 0 8.2 1.4C20 2.8 20 5.1 20 9.6v.8c0 4.5 0 6.8-1.4 8.2-1.4 1.4-3.7 1.4-8.2 1.4h-.8c-4.5 0-6.8 0-8.2-1.4C0 17.2 0 14.9 0 10.4v-.8Z'
									fill='#07F'
								></path>
								<path
									d='M10.7 14.3c-4.5 0-7.2-3.1-7.3-8.3h2.3c0 3.8 1.8 5.4 3.1 5.8V6H11v3.3c1.3-.1 2.6-1.6 3-3.3h2.2c-.3 2-1.8 3.5-2.8 4.2 1 .5 2.7 1.8 3.3 4.1h-2.3c-.5-1.6-1.8-2.8-3.4-3v3h-.3Z'
									fill='#fff'
								></path>
							</svg>
						</div>
						<div className='stepHeaderInfo'>
							<p className='text-white text-xl leading-5 font-medium'>
								Введите номер
							</p>
						</div>
						<div className='stepInfo QrInfo mt-2 w-full flex'>
							<span
								className='w-full  items-center justify-center'
								style={{ fontSize: '15px' }}
							>
								Ваш номер телефона будет использоваться для входа в аккаунт
							</span>
						</div>
					</div>
					<section className='mb-7'>
						<input
							type='text'
							className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white'
							placeholder='Телефон или почта'
							autoFocus={true}
							value={data}
							onChange={handeInputChange}
						/>
						<div className='flex mt-3 w-full items-center'>
							<input
								className='hidden'
								type='checkbox'
								id='save-login'
								checked={isChecked}
								onChange={handleCheckboxChange}
							/>
							<label
								htmlFor='save-login'
								className='relative flex items-center cursor-pointer'
							>
								{isChecked ? (
									<svg
										width='21'
										height='21'
										viewBox='0 0 20 20'
										fill='none'
										className='flex w-5 h-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M2.44 4.18C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.44 4.22a4 4 0 0 0 1.74 1.74c.86.44 1.98.44 4.22.44h3.2c2.24 0 3.36 0 4.22-.44a4 4 0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.22V8.4c0-2.24 0-3.36-.44-4.22a4 4 0 0 0-1.74-1.74C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74Zm12.2 3.8a.9.9 0 1 0-1.28-1.27L8.7 11.38 6.64 9.33a.9.9 0 0 0-1.28 1.27l2.7 2.69a.9.9 0 0 0 1.27 0l5.3-5.3Z'
											fill='currentColor'
										></path>
									</svg>
								) : (
									<div className='border border-lg rounded-md w-5 h-5'></div>
								)}
								<span
									style={{ fontSize: '16px' }}
									className='save textContract ml-2 leading-5'
								>
									Сохранить вход
								</span>
							</label>
						</div>
					</section>
					<div className='footerstepInfo flex flex-col justify-between grow-1'>
						<button onClick={navigateToConfirm} className='w-full  px-4 outline-none rounded-lg bg-white h-9'>
							<span className=' text-zinc-950  font-sans font-semibold'>
								Продолжить
							</span>
						</button>
						<div className='text-white stepFooterInfo text-center'>
							Нажимая «Продолжить», вы принимаете
							<NavLink to='https://id.vk.com/terms?' className='aboutLink'>
								пользовательское соглашение
							</NavLink>
							и
							<NavLink to='https://id.vk.com/privacy?' className='aboutLink'>
								политику конфиденциальности
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Register }
