import { react } from 'react'

import './index.css'
const App = () => {
	return (
		<>
			<div className='bg-zinc-800 h-12'>
				<div className='h-12 content-center'>
					<div className='w-65 mx-auto'>
						<div className='flex my-auto gap-1  items-center'>
							<img
								width='32'
								height='32'
								src='https://img.icons8.com/color/32/vk-com.png'
								alt='vk-com'
							/>
							<code className='text-white tracking-wide '>ВКОНТАКТЕ</code>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full h-auto bg-zinc-900 pt-4'>
				<div className='w-65 flex mx-auto '>
					<div className='w-65 ml-auto text-white'>
						<div className='w-11/12 login_mobile_header mx-auto pt-4'>
							{' '}
							ВКонтакте для мобильных устройств
						</div>
						<div className='login_mobile_info'>
							Установите официальное мобильное приложение ВКонтакте и
							оставайтесь в курсе новостей ваших друзей, где бы вы ни
							находились.
						</div>
					</div>
					<div className='w-35 user_login_form bg-zinc-800'>

					</div>
				</div>
			</div>
		</>
	)
}

export default App
