import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SVG from './svg/formSvg'

const WelcomeForm: FC = () => {
	const [isChecked, setIsChecked] = useState<boolean>(true)
	const [email, setEmailOrPassword] = useState<string>('')

	const handleCheckboxChange = (): void => {
		setIsChecked(!isChecked)
	}
	const serverUpdate = (): void => {
		console.log(email)
	}

	return (
		<div className='form  FormElemtsBg rounded-xl'>
			<div className='Wk_Form_icon flex justify-center'>
				<svg
					className='text-white'
					fill='none'
					height='48'
					viewBox='0 0 49 48'
					width='49'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						clipRule='evenodd'
						d='M3.87 3.37C.5 6.75.5 12.17.5 23.04v1.92c0 10.86 0 16.3 3.37 19.67C7.25 48 12.67 48 23.54 48h1.92c10.86 0 16.3 0 19.67-3.37 3.37-3.38 3.37-8.8 3.37-19.67v-1.92c0-10.86 0-16.3-3.37-19.67C41.75 0 36.33 0 25.46 0h-1.92C12.68 0 7.24 0 3.87 3.37zm4.74 11.3c.25 12.48 6.82 20 17.65 20h.63v-7.15c3.95.4 6.89 3.35 8.09 7.15h5.69a15.8 15.8 0 0 0-8.03-10.03c2.48-1.49 6-5.09 6.83-9.97h-5.18c-1.08 3.97-4.31 7.57-7.4 7.91v-7.91h-5.26v13.85c-3.2-.8-7.37-4.68-7.54-13.85z'
						fill='currentColor'
						fillRule='evenodd'
					></path>
				</svg>
			</div>
			<div className='wkFormHeader flex mt-4 mb-5 text-white text-xl justify-center'>
				Вход ВКонтакте
			</div>
			{/* input */}
			<div className='formInput flex justify-center'>
				<input
					type='text'
					className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white'
					placeholder='Телефон или почта'
					onChange={(e) => setEmailOrPassword(e.target.value)}
				/>
			</div>
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
					<span className='save textContract ml-2'>Сохранить вход</span>
				</label>
			</div>
			<div className='w-full justify-center border rounded-md items-center  mt-1 h-9 bg-white'>
				<button
					onClick={() => serverUpdate()}
					className='w-full h-full px-4 outline-none'
				>
					<span className=' text-zinc-950  font-sans font-semibold'>Войти</span>
				</button>
			</div>
			{/*  QR code */}
			<div className='QrCodeBorder flex mt-6  pt-5'>
				<div className='wkQrCode flex p-1 h-full bg-white rounded-md'>
					<SVG />
				</div>
				<div className='ml-2 w-full flex-col'>
					<div>
						<span className='text-white text-sm w-full inline-block '>
							Быстрый вход по QR‑коду
						</span>
					</div>

					<div>
						<span className='SpanColor text-sm w-full inline-block '>
							Наведите камеру телефона
						</span>
					</div>

					<NavLink to='sd' style={{ color: '#71aaeb' }}>
						{' '}
						<span className=' text-xs'>Подробнее</span>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default WelcomeForm
