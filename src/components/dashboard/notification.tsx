import { FC } from 'react'
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/dashboard/navbar.css'

const Example: FC = () => {
	return (
		<Menu as='div' className='relative inline-block  items-center text-left'>
			<div className='flex items-center'>
				<MenuButton className='LinkAndText  '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M12 2.1c4.02 0 6.9 3.28 6.9 7.53v1.6c0 .23.2.53.72 1.08l.27.27c1.08 1.1 1.51 1.73 1.51 2.75 0 .44-.05.79-.27 1.2-.45.88-1.42 1.37-2.87 1.37h-1.9c-.64 2.33-2.14 3.6-4.36 3.6-2.25 0-3.75-1.3-4.37-3.67l.02.07H5.74c-1.5 0-2.47-.5-2.9-1.41-.2-.4-.24-.72-.24-1.16 0-1.02.43-1.65 1.51-2.75l.27-.27c.53-.55.72-.85.72-1.08v-1.6C5.1 5.38 7.99 2.1 12 2.1Zm2.47 15.8H9.53c.46 1.25 1.25 1.8 2.47 1.8 1.22 0 2.01-.55 2.47-1.8ZM12 3.9c-2.96 0-5.1 2.43-5.1 5.73v1.6c0 .85-.39 1.46-1.23 2.33l-.28.29c-.75.75-.99 1.11-.99 1.48 0 .19.01.29.06.38.1.22.43.39 1.28.39h12.52c.82 0 1.16-.17 1.28-.4.05-.1.06-.2.06-.37 0-.37-.24-.73-.99-1.48l-.28-.29c-.84-.87-1.23-1.48-1.23-2.33v-1.6c0-3.3-2.13-5.73-5.1-5.73Z'></path>
					</svg>
				</MenuButton>
			</div>

			<Transition
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<MenuItems
					style={{ width: '470px' }}
					className='NotificationMenu absolute left-0 z-10 mt-2  origin-top-right  bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
				>
					<div className=' w-full' style={{ width: '470px' }}>
						<MenuItem>
							{({ active }) => (
								<div className='w-full py-1 px-4 flex justify-between '>
									<span className='Font13Header'>Ваша страница</span>
									<NavLink to='sdf' className='size13Px'>
										Настройки
									</NavLink>
								</div>
							)}
						</MenuItem>
						<MenuItem>
							{({ active }) => (
								<div className='w-full flex gap-4 mt-3 NotificationMenuItem'>
									<div className='feedBackImage'>
										<img src='https://sun7-20.userapi.com/cOQYQcaQsUReR2ZkRyOzQOzfH-GAcLVHqM576Q/_sFYPRWGYqw.png' />
									</div>
									<div className='flex-col w-4/5'>
										<div className='feedBackHeader Font13Header '>
											Защитите свой аккаунт. Соблюдайте простые правила,
											и&nbsp;ваши данные будут в&nbsp;безопасности.
											<NavLink
												className='Links size13Px'
												to='https://vk.com/faq22114?flow_service=vkprotect_security_recommendation_faq'
											>
												Подробнее здесь
											</NavLink>
										</div>
										<div className='feedBackButton w-2/5 bg-zinc-700 rounded-lg items-center flex justify-center mt-2 text-center'>
											<NavLink to='https://id.vk.com/account/#/main'>
												<span className='Font14pxNotification'>
													Защитить аккаунт
												</span>
											</NavLink>
										</div>
									</div>
								</div>
							)}
						</MenuItem>
						<MenuItem>
							{({ active }) => (
								<div className='w-full flex gap-4 mt-3 NotificationMenuItem'>
									<div className='feedBackImage'>
										<img src='https://sun7-20.userapi.com/cOQYQcaQsUReR2ZkRyOzQOzfH-GAcLVHqM576Q/_sFYPRWGYqw.png' />
									</div>
									<div className='flex-col w-4/5'>
										<div className='feedback_header Font13Header'>
											Вы вошли в аккаунт Rustam Kidiraliyev{' '}
											<span className='rel_date'>сегодня в 3:24</span> через
											сайт «ВКонтакте», Ташкент. Нажмите «Подробнее», чтобы
											посмотреть всю историю активности.
										</div>
										<div className='feedBackButton w-2/5 bg-gray-200 rounded-lg items-center flex justify-center mt-2 text-center '>
											<NavLink to='https://id.vk.com/account/#/main'>
												<span className='Font14pxNotification ColorBlack'>
													Подробнее
												</span>
											</NavLink>
										</div>
									</div>
								</div>
							)}
						</MenuItem>
						<MenuItem>{({ active }) => 
						<div className='w-full flex text-center'>
							<NavLink to='/all/notifications' className='w-full p-2 NotificationMenuItem ShowNotification'>
							Показать все
							</NavLink>
						</div>
						}</MenuItem>
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	)
}

export default Example
