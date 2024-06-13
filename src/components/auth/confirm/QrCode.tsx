import { FC } from 'react';
import SVG from '../../svg/formSvg'
import { NavLink } from 'react-router-dom'




export const QrCode:FC = () => {
	return (
		<div className='flex mt-6  maxWith360  p-5 bg-zinc-900  rounded-xl justify-center items-center mb-5'>
					<div className='wkQrCode flex p-1 h-full mr-2 bg-white rounded-md'>
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
	)
} 