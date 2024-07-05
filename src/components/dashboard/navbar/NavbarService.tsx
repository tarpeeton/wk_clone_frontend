import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from '@headlessui/react'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../assets/css/dashboard/navbar.css'

import { ServiceIcon } from './ServiceIcon'

const Navbarservices: FC = () => {
	return (
		<div className='flex items-center justify-center'>
			<Menu as='div' className='relative inline-block  items-center text-left'>
				<div className='flex items-center justify-center'>
					<MenuButton className='LinkAndText flex items-center justify-center '>
							<ServiceIcon />
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
					<MenuItems className='NotificationMenu absolute right-0 z-10 mt-2  origin-top-right  bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
						<div className=' w-full py-3' style={{ width: '358px' }}>
							<MenuItem>
								<div className='w-full py-1 px-4 flex justify-between '>
									<span className='Font13Header font-medium'>Сервисы VK</span>
								</div>
							</MenuItem>
							<MenuItem>
								<div>
									<div className='flex flex-row flex-wrap justify-evenly'>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/wdsnm7?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-17.userapi.com/vEM591iAVwI_O7n6XMUR1e-wxz52cORXH6ExIg/OR4kW_5U7BU.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Питомцы</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/xws327?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-22.userapi.com/LgyTK7ITo1SddxIM1SzkvKgc3snDgf8meg1tMw/LCS8uWL-pBw.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Чекбэк</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/nvqli5?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-20.userapi.com/GwN1Ur0pZIpy71T677ki9-xQCYm1oXZDcD-nOQ/oHTKG4xlxdI.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Маркет</span>
										</a>
										<a
											className='ServiceItems'
											href='https://vk.com/dating#utm_source=service_navigation'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-22.userapi.com/5pJMfN0gfx5A5k5aKsMre1DAWFAAlxHnNqU-3w/w9fliLG4eQk.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Знакомства</span>
										</a>
										<a
											className='ServiceItems'
											href='/write-194070336'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-21.userapi.com/uPQZw_kYKfl9NXT2zhTaT8ZpwUkec2RxYNidTQ/JAuM5eYbn8M.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Маруся</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/kesae0?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-23.userapi.com/pduVhSbex9H9hz-PlH7jwjbTfet4IwEw6fxRIw/aYroGhFgn40.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Почта</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/kd1631?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-18.userapi.com/0fAZvU8C1AKedvV-URRFpTm3PHpvK5G-DGCo6A/uRB1nz3rYsA.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Облако</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/ib8ez3?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-18.userapi.com/mnSeKuH9DPzOVgXbQAjNGgqEK8qO-i7AhRc5Jg/2IIe3H1ju3U.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>ОК</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/wcxwy4?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-23.userapi.com/Yct5I01IrZ7S4GEcdUoZQkgDo1whD44jafPPAg/snv0GXYe3hs.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>VK Почта</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/nssrj8?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-19.userapi.com/lv7mD3dUTqTjc2npBwc1jlpcuNBWq0RGJvez7w/wN6glWanz0s.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Skillbox</span>
										</a>
										<a
											className='ServiceItems'
											href='https://trk.mail.ru/c/g3h303?mt_sub1=vk.com&amp;mt_sub5=EXP_ID'
											target='_blank'
										>
											<div className='ServiceImageEcoCystem'>
												<img
													src='https://sun7-18.userapi.com/KuaOOQPwUXtA8Eqnu94bFq4dDY1ETPUz1W9TsA/xvdbws3eg_M.svg'
													alt=''
													className='ServiceItemsImages'
												/>
											</div>
											<span className='ServiceitemsNames'>Geekbrains</span>
										</a>
										<a
											className='ServiceItems'
											href='https://id.vk.com/account/#/services'
											target='_blank'
										>
											<div className='MoreButton'>
												<svg
													aria-hidden='true'
													display='block'
													viewBox='0 0 28 28'
													height='28'
												>
													<path d='M8.5 14a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m8 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m5.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5'></path>
												</svg>
											</div>
											<span className='ShowNotification'>
												<span>Ещё</span>
											</span>
										</a>
									</div>
								</div>
							</MenuItem>

							<MenuItem>
								<div className='CatalogItem w-full flex text-center items-center justify-center '>
									<svg
										fill='none'
										height='20'
										viewBox='0 0 20 20'
										width='20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											clipRule='evenodd'
											d='M11.76 7.7c-.28-.27-.52-.51-.7-.73a2.3 2.3 0 0 1-.47-.77 2.25 2.25 0 0 1 0-1.4c.1-.3.27-.54.46-.77.19-.22.45-.48.73-.76l.25-.24.24-.25c.28-.28.54-.54.76-.73.23-.19.47-.36.77-.46.46-.14.94-.14 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7l.26.28.27.26c.28.28.52.52.7.74.2.23.37.47.47.77.14.46.14.94 0 1.4-.1.3-.27.54-.46.77-.19.22-.45.48-.73.76l-.25.24-.24.25c-.28.28-.54.54-.76.73-.23.19-.47.36-.77.46-.46.14-.94.14-1.4 0a2.3 2.3 0 0 1-.77-.46 13.4 13.4 0 0 1-.74-.7l-.26-.28-.27-.26zm4.4-1.03-.25.24-.24.25c-.3.3-.5.5-.67.64a.85.85 0 0 1-.27.18.75.75 0 0 1-.46 0A.86.86 0 0 1 14 7.8c-.16-.14-.36-.33-.67-.64l-.24-.25-.25-.24c-.3-.3-.5-.5-.64-.67a.85.85 0 0 1-.18-.27.75.75 0 0 1 0-.46.85.85 0 0 1 .18-.27c.14-.16.33-.36.64-.67l.25-.24.24-.25c.3-.3.5-.5.67-.64a.86.86 0 0 1 .27-.18.75.75 0 0 1 .46 0c.04.01.11.05.27.18.16.14.36.33.67.64l.24.25.25.24c.3.3.5.5.64.67.13.16.17.23.18.27.05.15.05.31 0 .46a.86.86 0 0 1-.18.27c-.14.16-.33.36-.64.67zM11 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 0 1-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02-.3-.03-.59-.08-.87-.23a2.25 2.25 0 0 1-.98-.98 2.3 2.3 0 0 1-.23-.87c-.02-.28-.02-.63-.02-1.02v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06.75.75 0 0 1-.33-.33.86.86 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 0 1 .33-.33.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.86.86 0 0 1-.06.32.75.75 0 0 1-.33.33.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02zM2 5.12v.76c0 .4 0 .74.02 1.02a2.25 2.25 0 0 0 1.2 1.86c.3.14.59.2.88.22.28.02.65.02 1.05.02h.7c.4 0 .77 0 1.05-.02a2.25 2.25 0 0 0 1.86-1.2c.14-.3.2-.59.22-.88C9 6.62 9 6.27 9 5.88v-.76c0-.4 0-.74-.02-1.02a2.3 2.3 0 0 0-.23-.87 2.25 2.25 0 0 0-.98-.98 2.3 2.3 0 0 0-.87-.23C6.62 2 6.25 2 5.85 2h-.7c-.4 0-.77 0-1.05.02a2.25 2.25 0 0 0-1.86 1.2c-.14.3-.2.59-.22.88C2 4.38 2 4.73 2 5.12zM5.5 7.5h.35c.43 0 .71 0 .92-.02.2-.01.28-.04.32-.06a.75.75 0 0 0 .33-.33.85.85 0 0 0 .06-.32c.02-.2.02-.49.02-.92v-.7c0-.43 0-.71-.02-.92a.85.85 0 0 0-.06-.32.75.75 0 0 0-.33-.33.86.86 0 0 0-.32-.06c-.2-.02-.49-.02-.92-.02h-.7c-.43 0-.71 0-.92.02a.86.86 0 0 0-.32.06.75.75 0 0 0-.33.33.85.85 0 0 0-.06.32c-.02.2-.02.49-.02.92v.7c0 .43 0 .71.02.92.01.2.04.28.06.32.07.14.19.26.33.33.04.02.11.05.32.06.2.02.49.02.92.02zM2 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 0 1-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02a2.25 2.25 0 0 1-1.86-1.2 2.3 2.3 0 0 1-.22-.88C2 15.62 2 15.27 2 14.88v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06.75.75 0 0 1-.33-.33.85.85 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 0 1 .33-.33.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.85.85 0 0 1-.06.32.75.75 0 0 1-.33.33.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02z'
											fill='#71aaeb'
											fillRule='evenodd'
										></path>
									</svg>
									<NavLink to='/all/notifications' className='p-2 catalog'>
										Каталог сервисов
									</NavLink>
									<svg
										className='LinkAndText'
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='12'
										fill='currentColor'
										viewBox='0 0 12 12'
									>
										<path
											fillRule='evenodd'
											d='M4.22 2.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L6.69 6 4.22 3.53a.75.75 0 0 1 0-1.06Z'
											clipRule='evenodd'
										></path>
									</svg>
								</div>
							</MenuItem>
						</div>
					</MenuItems>
				</Transition>
			</Menu>
		</div>
	)
}

export default Navbarservices
