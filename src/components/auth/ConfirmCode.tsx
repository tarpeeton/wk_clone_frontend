import { FC } from 'react'
import {NavLink} from 'react-router-dom'
import './auth.css'
import SVG from '../svg/formSvg'
const ConfirmCode: FC = () => {
	return (
		<div className='RegisterContent min-h-screen w-full flex content-center items-center'>
			<div className='flex flex-col mx-auto'>
			<div className='bg-zinc-900 maxWith360 mx-auto p-7 rounded-xl relative'>
				<div className='absolute top-4 left-1 w-12 h-12 flex items-start justify-center'>
					<div className='vkc__ContentHeader__navigationIconWrapper NavigateButton'>
						<button>
							<svg width='28' height='28' xmlns='http://www.w3.org/2000/svg'>
								<g fill='none' fill-rule='evenodd'>
									<path d='M28 0H0v28h28z'></path>
									<path
										d='M12.293 6.293a1 1 0 011.414 1.414L8.414 13H22a1 1 0 01.993.883L23 14a1 1 0 01-1 1H8.414l5.293 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-7-7-.073-.082A1.005 1.005 0 015 14l.004.09A1.006 1.006 0 015 14.02V14a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z'
										fill='currentColor'
										fill-rule='nonzero'
									></path>
								</g>
							</svg>
						</button>
					</div>
				</div>
				{/* step info body */}
				<div className='flex-col'>
					<div className='stepInfoBody flex flex-col items-center justify-center'>
							<div>
							<svg aria-hidden="true" display="block" className="vkuiIcon vkuiIcon--192 vkuiIcon--w-192 vkuiIcon--h-120 vkuiIcon--illustration_confirmation_sms_120h " viewBox="0 0 192 120" width="192" height="120" ><use xlinkHref="#illustration_confirmation_sms_120h" ></use></svg>
							</div>
							<div className='DisplayTitle'>
								<h1>Введите код из SMS</h1>
							</div>
							<h4 className='mt-2'>
								<div className='flex flex-col mx-auto items-center text-center pb-4'>
									<span className='infoSend'>
									SMS-сообщение отправлено на номер
									</span>
									<b/>
									<span className='descriptionNumber font-semibold'>+7 998 911-33-22</span>
								</div>
							</h4>
							<div className='w-full'>
							<input
							type='text'
							className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white mb-3'
							placeholder='Телефон или почта'
							autoFocus={true}
							
						/>
						<div className='flex flex-col gap-2 mt-3'>
						<button className='w-full  px-4 outline-none rounded-lg bg-white h-9'>
							<span className=' text-zinc-950  font-sans font-semibold'>
								Продолжить
							</span>
						</button>
						<button className='w-full  px-4 outline-none rounded-lg h-9  hover:bg-zinc-800'>
							<span className='text-white  font-sans font-semibold'>
							Отправить ещё раз
							</span>
						</button>

						</div>
						
							</div>
					</div>
				</div>
			</div>
			{/*  Qr Code */}
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
			<div className='text-white mx-auto'>
				<NavLink className='promoLink hover:underline' to='https://id.vk.com/about/id'>
				Узнать больше о VK ID
				</NavLink>
			</div>
			</div>
			

		</div>
		
	)
}

export default ConfirmCode
