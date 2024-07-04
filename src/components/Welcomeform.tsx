import { FC, MouseEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SVG from './svg/formSvg'

const WelcomeForm: FC = () => {

	const [email, setEmailOrPassword] = useState<string>('')

	
	const serverUpdate = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		console.log(email)
};

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
				<input type="checkbox" className='save_login' />
					<span className='save textContract ml-2'>Сохранить вход</span>
			</div>
			<div className='w-full justify-center border rounded-md items-center  mt-1 h-9 bg-white'>
				<button
					onClick={serverUpdate}
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
