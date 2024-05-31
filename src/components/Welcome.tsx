import { FC } from 'react'
import { NavLink } from 'react-router-dom'
const LinkPlaymerket: string =
	'https://play.google.com/store/apps/details?id=com.vkontakte.android'
const LinkAppStore: string =
	'https://apps.apple.com/ru/app/%D0%B2%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%87%D0%B0%D1%82/id564177498'
const RuStore: string =
	'https://www.rustore.ru/catalog/app/com.vkontakte.android'
const HomePage: FC = () => {
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
			{/* Comtents */}
			<div className='w-full  h-screen bg-zinc-900 pt-4'>
				<div className='w-65 flex mx-auto '>
					<div className='w-65 ml-auto text-white'>
						<div className='w-11/12 login_mobile_header mx-auto pt-4'>
							ВКонтакте для мобильных устройств
						</div>
						<div className='login_mobile_info'>
							Установите официальное мобильное приложение ВКонтакте и
							оставайтесь в курсе новостей ваших друзей, где бы вы ни
							находились.
						</div>
						{/* download links  */}
						<div className='mt-4 w-4/5 pt-4 mx-auto flex relative'>
							<div className='relative h-405 w-183'>
								<NavLink to={LinkPlaymerket}>
									<img
										className='h-405'
										src='https://sun7-20.userapi.com/e-4kB16HM_5ciRsLi_MGGRe2VHKW4FsikCJZCg/2Sd0NvW2ujQ.png'
									/>
								</NavLink>
							</div>
							<div className='absolute left-40 w-198 '>
								<NavLink to={LinkAppStore}>
									<img
										className='h-430'
										src='https://sun7-21.userapi.com/rwNyXuU4nRaYpEiL1DvfDvhtJinKkmmpGGjb2g/7FrUq5H2FIQ.png'
									/>
								</NavLink>
							</div>
						</div>
						{/* Mobile dowload Links */}
						<div className='mt-4 w-4/5  mx-auto  flex gap-2'>
							<span className='w-32 flex items-center gap-2 hover:bg-zinc-800 padding_mobile_dowload_links rounded duration-500 ease-in-out'>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M12.75 2.47a.5.5 0 0 1 .87.5l-1.34 2.3A8 8 0 0 1 16 12.05H0a8 8 0 0 1 3.62-6.7L2.25 2.97a.5.5 0 0 1 .87-.5l1.37 2.38a7.97 7.97 0 0 1 6.92-.05l1.34-2.33ZM13 9.04a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
										fill='currentColor'
									></path>
								</svg>
								<NavLink to={LinkPlaymerket}>
									{' '}
									Google Play
								</NavLink>
							</span>
							<span className='w-24 flex items-center gap-2 hover:bg-zinc-800 p-1 rounded padding_mobile_dowload_links  duration-500 ease-in-out'>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M12.75 2.47a.5.5 0 0 1 .87.5l-1.34 2.3A8 8 0 0 1 16 12.05H0a8 8 0 0 1 3.62-6.7L2.25 2.97a.5.5 0 0 1 .87-.5l1.37 2.38a7.97 7.97 0 0 1 6.92-.05l1.34-2.33ZM13 9.04a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
										fill='currentColor'
									></path>
								</svg>

								<NavLink to={RuStore} >
									{' '}
									RuStore
								</NavLink>
							</span>
							
					<span className='flex w-32 items-center gap-2 hover:bg-zinc-800 p-1 rounded padding_mobile_dowload_links  duration-500 ease-in-out'>
						
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11.83 7.44c-.01-1.77 1.45-2.62 1.52-2.67a3.28 3.28 0 0 0-2.57-1.38c-1.1-.11-2.13.64-2.69.64-.55 0-1.4-.63-2.31-.61-1.2.02-2.3.69-2.9 1.75-1.25 2.15-.33 5.32.88 7.06.59.85 1.3 1.8 2.22 1.77.89-.03 1.22-.57 2.3-.57 1.07 0 1.37.57 2.32.55.95-.01 1.56-.86 2.14-1.72.68-.98.96-1.94.98-1.99-.02 0-1.87-.71-1.89-2.83Zm-1.77-5.2c.5-.6.83-1.42.74-2.24-.71.03-1.57.47-2.07 1.06a2.93 2.93 0 0 0-.75 2.17c.79.06 1.6-.4 2.08-1Z'
								fill='currentColor'
							></path>
						</svg>
						<NavLink to={LinkAppStore}>
							{' '}
							App Store
						</NavLink>
					</span>
						</div>
					</div>


					<div className='w-35 user_login_form bg-zinc-800'></div>
				</div>
			</div>
		</>
	)
}

export default HomePage
