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
import { ServiceIcon } from './ServiceIcon'

const ProfileSettings: FC = () => {
	return (
		<div className='flex items-center justify-center'>
			<Menu as='div' className='relative inline-block  items-center text-left'>
				<div className='flex items-center justify-center'>
					<MenuButton className='LinkAndText  '>
						<div className='flex justify-center items-center gap-1'>
							<img
								className='userDefaultImage'
								src='https://pp.userapi.com/60tZWMo4SmwcploUVl9XEt8ufnTTvDUmQ6Bj1g/mmv1pcj63C4.png'
							/>
							<span className='LinkAndText'>
								<svg
									fill='none'
									height='8'
									viewBox='0 0 12 8'
									width='12'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										clip-rule='evenodd'
										d='M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z'
										fill='currentColor'
										fill-rule='evenodd'
									></path>
								</svg>
							</span>
						</div>
					</MenuButton>
				</div>

				<Transition
					enter='transition ease-out duration-95'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-70'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<MenuItems
						style={{ width: '300px' }}
						className='NotificationMenu absolute right-0 z-10 mt-2  origin-top-right  bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
					>
						<div className=' w-full py-3' style={{ width: '300px' }}>
							<MenuItem>
								{({ active }) => (
									<div className='flex flex-col'>
										<div className='flex flex-col items-center justify-center my-2'>
											<div className=' w-full flex flex-col justify-center items-center'>
												<div className='userPlaceHolderImage'>
													<img src='https://pp.userapi.com/nKpB1Qq39oLk0_S8_C9PolGFFUpM5n8FnzKC7A/ucP1cjlkpZk.png' />
												</div>
												<span className='userPlaceHolderName'>
													Rustam Kidiraliyev
												</span>
												<span className='userPlaceHolder_Subtitle '>
													+998 ···· · ·· 42
												</span>
												<div className='wkSpacingBeta'></div>
												<div className='w-full h-8 px-3'>
													<div className='wkUiButton h-full flex items-center justify-center'>
														<NavLink to='sdfksdf'>
															<span className='flex items-center justify-center gap-2'>
																<span className='SettingButton'>
																	Управление аккаунтом
																</span>
																<span>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		className='EcoPlate_lkLogo__jIkZT'
																		width='33'
																		height='16'
																		fill='none'
																	>
																		<path
																			fill='currentColor'
																			d='M20 13h1.65V3.5H20V13ZM23.78 13h3.7c2.93 0 5.02-1.97 5.02-4.76 0-2.77-2.09-4.74-5.03-4.74h-3.69V13Zm1.65-1.48V4.98h2.04c1.97 0 3.31 1.34 3.31 3.26 0 1.94-1.34 3.28-3.3 3.28h-2.05Z'
																		></path>
																		<path
																			fill='#07F'
																			d='M0 7.68c0-3.62 0-5.43 1.12-6.56C2.25 0 4.06 0 7.68 0h.64c3.62 0 5.43 0 6.56 1.12C16 2.25 16 4.06 16 7.68v.64c0 3.62 0 5.43-1.12 6.56C13.75 16 11.94 16 8.32 16h-.64c-3.62 0-5.43 0-6.56-1.12C0 13.75 0 11.94 0 8.32v-.64Z'
																		></path>
																		<path
																			fill='#fff'
																			d='M8.56 11.66c-3.64 0-5.72-2.5-5.81-6.66h1.83c.06 3.05 1.4 4.34 2.47 4.61V5h1.72v2.63C9.82 7.52 10.93 6.32 11.3 5h1.72a5.08 5.08 0 0 1-2.34 3.32c.86.4 2.22 1.45 2.74 3.34h-1.89a3.3 3.3 0 0 0-2.76-2.38v2.38h-.2Z'
																		></path>
																	</svg>
																</span>
															</span>
														</NavLink>
													</div>
												</div>
												<div className='wkSpacingBeta'></div>
												<div className='w-full px-3'>
													<NavLink to='wer' className='flex '>
														<div className='wkIconSpacing'>
															<svg
																aria-hidden='true'
																display='block'
																className='vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20 vkuiIcon--coins_outline_20'
																viewBox='0 0 20 20'
																width='20'
																height='20'
																fill='#71aaeb'
															>
																<path
																	fill-rule='evenodd'
																	d='M17 9.995v3.023c-.018 2.2-3.145 3.981-7 3.981-3.866 0-7-1.79-7-4V7c0-2.209 3.135-4 7-4 3.854 0 6.98 1.78 7 3.979zm-1.5-.002v-.518C14.218 10.404 12.231 11 10 11s-4.218-.596-5.5-1.525v.546c.014.339.279.918 1.294 1.498 1.002.572 2.486.974 4.206.974s3.204-.402 4.206-.974c1.042-.595 1.293-1.19 1.294-1.524zm-11-2.971c.011.337.273.92 1.294 1.504C6.796 9.098 8.28 9.5 10 9.5s3.204-.402 4.206-.974c1.042-.596 1.293-1.19 1.294-1.524V7c0-.334-.252-.93-1.294-1.526C13.204 4.902 11.72 4.5 10 4.5s-3.204.402-4.206.974C4.773 6.058 4.511 6.64 4.5 6.979zm0 5.996v-.55c1.283.929 3.27 1.525 5.5 1.525s4.218-.596 5.5-1.525v.531c0 .334-.25.93-1.294 1.526-1.002.572-2.486.974-4.206.974s-3.204-.402-4.206-.974c-1.024-.586-1.284-1.17-1.293-1.507Z'
																	clip-rule='evenodd'
																></path>
															</svg>
														</div>
														<div className='LinksItems'>Баланс голосов</div>
													</NavLink>
												</div>
												{/* 2 */}
												<div className='w-full px-3 flex items-center'>
													<NavLink to='wer' className='flex '>
														<div className='wkIconSpacing'>
															<svg
																fill='#71aaeb'
																aria-hidden='true'
																display='block'
																className='vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20 vkuiIcon--gear_outline_20'
																viewBox='0 0 20 20'
																width='20'
																height='20'
															>
																<path
																	fill-rule='evenodd'
																	d='m7.222 3.378.01-.033a4 4 0 0 1 .17-.476c.358-.821.944-1.285 1.854-1.36l.166-.009h1.208c1.051.033 1.735.608 2.095 1.692l.057.186.044.166q.025.096.06.203l.05.137.03.015.06-.02.116-.044.135-.059.168-.074.036-.015a4 4 0 0 1 .424-.15c.932-.27 1.685-.075 2.32.618l.108.125.714.88c.636.833.617 1.723-.004 2.683l-.109.161-.102.139q-.06.081-.123.177l-.062.1-.029.05.004.017.08.052.11.066.133.072c1.209.614 1.707 1.42 1.515 2.541l-.032.162-.213.916c-.137.593-.245.873-.67 1.258a2.13 2.13 0 0 1-1.059.518l-.01.003a4 4 0 0 1-.438.059l-.191.012-.173.006-.052.001h-.006q-.075.004-.156.01l-.158.02.012.123.011.083.029.154q.102.482.098.89v.012c-.015.84-.38 1.45-1.132 1.87l-.147.076-1.023.494c-.901.403-1.722.234-2.484-.467a4 4 0 0 1-.144-.14l-.133-.142-.113-.13a3 3 0 0 0-.147-.161l-.085-.083-.043-.04-.08.076-.091.093-.103.115c-.828.981-1.703 1.334-2.763.923l-.153-.063-.915-.443-.271-.138c-.415-.225-.647-.44-.874-.918a2.15 2.15 0 0 1-.209-1.01v-.016c.006-.19.03-.388.07-.603l.038-.195.001-.004q.02-.096.035-.206l.016-.148-.003-.003-.09-.012-.128-.012-.151-.006a4 4 0 0 1-.862-.098l-.012-.003c-.837-.198-1.363-.69-1.608-1.524l-.043-.16-.254-1.102c-.204-1.026.205-1.818 1.186-2.41l.17-.098.152-.08q.09-.045.188-.105l.134-.087.004-.017-.055-.093-.07-.108-.089-.124a5 5 0 0 1-.286-.423c-.54-.905-.534-1.72.046-2.523l.1-.132.717-.877c.687-.792 1.566-.958 2.64-.554l.18.072.158.07a3 3 0 0 0 .193.08l.118.042.032-.014.029-.077.04-.12.04-.143q.02-.085.044-.166m4.24.841.013.038.05.138a1.5 1.5 0 0 0 .743.833l.03.014a1.5 1.5 0 0 0 1.136.082l.06-.02.065-.023.117-.044.062-.025.135-.059.035-.015a3 3 0 0 1 .415-.16c.268-.078.407-.06.47-.043.057.015.16.056.314.22l.077.09.682.84c.138.185.15.295.15.359 0 .084-.03.267-.225.573l-.082.122-.08.108a4 4 0 0 0-.18.26l-.014.022-.062.099-.008.013-.01.018-.03.05a1.5 1.5 0 0 0-.178 1.056l.004.017a1.5 1.5 0 0 0 .648.959l.08.052.05.032.11.066.06.034.133.072.034.018c.456.231.62.421.676.516.036.06.084.162.042.417l-.023.117-.207.892c-.066.285-.095.35-.105.369 0 0 0 .003-.01.013a1 1 0 0 1-.101.103c-.082.074-.166.124-.354.161a2 2 0 0 1-.257.035l-.153.01-.138.004-.071.002a5 5 0 0 0-.28.02l-.158.019a1.5 1.5 0 0 0-1.318 1.628l.011.123.008.07.012.083.01.06.028.154.008.045c.05.236.068.419.066.557-.003.206-.046.301-.073.348-.028.046-.094.131-.276.235l-.105.056-.977.471c-.204.088-.317.082-.382.07-.076-.015-.228-.068-.456-.279l-.08-.076-.1-.107-.088-.102a4 4 0 0 0-.217-.236l-.018-.018-.084-.082-.036-.034-.043-.04a1.5 1.5 0 0 0-2.047.014l-.08.075-.042.041-.09.094-.048.05-.103.116-.025.03c-.315.371-.532.495-.646.535-.073.025-.183.05-.415-.038l-.094-.039-.864-.418-.238-.12a1 1 0 0 1-.13-.083l-.004-.003-.003-.003a1 1 0 0 1-.083-.147.67.67 0 0 1-.063-.34c.003-.09.015-.207.043-.365l.035-.174a4 4 0 0 0 .058-.35l.016-.149a1.5 1.5 0 0 0-.434-1.224l-.004-.003a1.5 1.5 0 0 0-.86-.423l-.09-.012-.064-.008-.128-.01-.068-.005-.15-.007-.04-.001a2.7 2.7 0 0 1-.549-.06c-.215-.05-.305-.115-.346-.154s-.109-.12-.17-.319l-.03-.114-.242-1.052c-.042-.224-.006-.329.023-.387.038-.076.146-.23.459-.42l.128-.074.119-.063a4 4 0 0 0 .316-.179l.134-.087a1.5 1.5 0 0 0 .65-.947l.004-.017a1.5 1.5 0 0 0-.171-1.066l-.055-.093-.037-.062-.07-.108-.04-.057-.088-.124-.024-.031c-.307-.406-.369-.647-.378-.754-.006-.067-.004-.18.148-.395l.072-.094.684-.838c.154-.173.262-.211.33-.225.09-.018.28-.027.623.1l.138.055.123.055a4 4 0 0 0 .316.13l.118.042a1.5 1.5 0 0 0 1.134-.058l.031-.015a1.5 1.5 0 0 0 .764-.823l.03-.077.023-.066.04-.12.02-.065.04-.143.01-.037.03-.119q.056-.191.114-.323c.1-.23.192-.319.243-.357.044-.033.134-.086.343-.105l.1-.006h1.14c.234.01.333.071.386.114.067.056.192.195.308.538l.043.14.034.129q.04.15.088.298M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6'
																	clip-rule='evenodd'
																></path>
															</svg>
														</div>
														<div className='LinksItems'>Настройки</div>
													</NavLink>
												</div>
												{/* 3 */}
												<div className='w-full px-3'>
													<NavLink to='wer' className='flex '>
														<div className='wkIconSpacing'>
															<svg
																aria-hidden='true'
																display='block'
																viewBox='0 0 20 20'
																width='20'
																height='20'
																fill='#71aaeb'
															>
																<g fill='#71aaeb'>
																	<path d='M10.8 6.05a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14.45 8.2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4.3 9.45a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M7.85 4.8a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5'></path>
																	<path
																		fill-rule='evenodd'
																		d='M14.177 14.037c2.142.23 4.323-.743 4.323-4.037 0-2.347-.951-4.472-2.49-6.01S12.347 1.5 10 1.5s-4.472.951-6.01 2.49S1.5 7.653 1.5 10s.951 4.472 2.49 6.01S7.653 18.5 10 18.5c1.13 0 2.255-1.007 1.977-2.425-.047-.24-.11-.472-.168-.688-.254-.94-.43-1.59 1.076-1.487.036.002.455.047 1.292.137m.16-1.491-.246-.027c-.653-.07-1.037-.11-1.103-.116-.525-.036-1.172-.024-1.74.264a2 2 0 0 0-1.102 1.687c-.033.476.089.944.154 1.197l.072.27c.054.197.097.357.133.542a.6.6 0 0 1-.003.277.44.44 0 0 1-.098.173A.57.57 0 0 1 10 17a6.97 6.97 0 0 1-4.95-2.05A6.97 6.97 0 0 1 3 10c0-1.933.782-3.681 2.05-4.95A6.97 6.97 0 0 1 10 3c1.933 0 3.681.782 4.95 2.05A6.97 6.97 0 0 1 17 10c0 1.297-.412 1.873-.774 2.152-.412.317-1.065.482-1.889.394'
																		clip-rule='evenodd'
																	></path>
																</g>
															</svg>
														</div>
														<div className='LinksItems'>
															Тема:
															<button className='wkUiLinkColor'>Тема</button>
														</div>
													</NavLink>
												</div>
												<div className='w-full px-3'>
													<NavLink to='wer' className='flex '>
														<div className='wkIconSpacing'>
															<svg
																fill='#71aaeb'
																aria-hidden='true'
																display='block'
																className='vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20 vkuiIcon--help_outline_20'
																viewBox='0 0 20 20'
																width='20'
																height='20'
															>
																<g>
																	<path d='M10 6.25a1.25 1.25 0 0 0-1.21.937.75.75 0 0 1-1.453-.374 2.75 2.75 0 0 1 5.413.687c0 1.211-.654 1.84-1.144 2.298l-.009.008c-.478.446-.772.72-.855 1.3a.75.75 0 0 1-1.484-.212c.158-1.11.803-1.709 1.256-2.13l.068-.062c.447-.417.668-.663.668-1.202 0-.69-.56-1.25-1.25-1.25M10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2'></path>
																	<path
																		fill-rule='evenodd'
																		d='M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0'
																		clip-rule='evenodd'
																	></path>
																</g>
															</svg>
														</div>
														<div className='LinksItems'>Помощь</div>
													</NavLink>
												</div>
												<div className='w-full px-3'>
													<NavLink to='wer' className='flex '>
														<div className='wkIconSpacing'>
															<svg
																fill='#71aaeb'
																aria-hidden='true'
																display='block'
																className='vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20 vkuiIcon--door_arrow_right_outline_20'
																viewBox='0 0 20 20'
																width='20'
																height='20'
															>
																<path
																	fill-rule='evenodd'
																	d='M8.317 2h.933a.75.75 0 1 1 0 1.5h-.9c-.992 0-1.692 0-2.238.045-.537.044-.86.127-1.11.255A2.75 2.75 0 0 0 3.8 5.002c-.128.25-.21.573-.255 1.11-.044.546-.045 1.245-.045 2.238v3.3c0 .992 0 1.692.045 2.238.044.537.127.86.255 1.11A2.75 2.75 0 0 0 5.002 16.2c.25.128.573.21 1.11.255.546.044 1.246.045 2.238.045h.895a.75.75 0 0 1 0 1.5h-.928c-.952 0-1.713 0-2.327-.05-.63-.052-1.172-.16-1.67-.413a4.25 4.25 0 0 1-1.857-1.858c-.253-.497-.361-1.04-.413-1.67C2 13.397 2 12.636 2 11.684V8.317c0-.952 0-1.713.05-2.327.052-.63.16-1.172.413-1.67a4.25 4.25 0 0 1 1.858-1.857c.497-.253 1.04-.361 1.67-.413C6.603 2 7.364 2 8.316 2Zm5.903 4.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H8.75a.75.75 0 0 1 0-1.5h6.69l-1.22-1.22a.75.75 0 0 1 0-1.06'
																	clip-rule='evenodd'
																></path>
															</svg>
														</div>
														<div className='LinksItems'>Выйти</div>
													</NavLink>
												</div>
											</div>
										</div>
									</div>
								)}
							</MenuItem>
						</div>
					</MenuItems>
				</Transition>
			</Menu>
		</div>
	)
}

export default ProfileSettings
