import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
interface Iprops {
	send: () => void
}
const AppMedia: FC<Iprops> = ({send}) => {
	const [switcher, setSwitcher] = useState<boolean>(false)

	return (
		<div className='media_selector_fix absolute bottom-[10px] flex w-[90%] justify-between'>
			<div className='media_content flex'>
				<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
					<span>
						<svg
							className='color_items'
							fill='none'
							height='20'
							viewBox='0 0 20 20'
							width='20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								clipRule='evenodd'
								d='M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 0 1-.91-.2 2.25 2.25 0 0 1-.99-.99 2.4 2.4 0 0 1-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 0 0-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 0 0 1.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 0 0-2.95-2.94 7.5 7.5 0 0 0-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z'
								fill='currentColor'
								fillRule='evenodd'
							></path>
						</svg>
					</span>
					<span className='medi_selector_name bg-white'>Фотография</span>
				</NavLink>
				<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
					<span>
						<svg
							className='color_items'
							fill='none'
							height='20'
							viewBox='0 0 20 20'
							width='20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								clipRule='evenodd'
								d='M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-8.5-7a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm8.65 3.38 2.7-1.56a2.1 2.1 0 0 0 0-3.64l-2.7-1.56A2.1 2.1 0 0 0 7 8.44v3.12a2.1 2.1 0 0 0 3.15 1.82zm1.95-3.9c.4.23.4.8 0 1.04l-2.7 1.56a.6.6 0 0 1-.9-.52V8.44c0-.46.5-.75.9-.52z'
								fill='currentColor'
								fillRule='evenodd'
							></path>
						</svg>
					</span>
					<span className='medi_selector_name bg-white'>Видеозапись</span>
				</NavLink>
				<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
					<span>
						<svg
							className='color_items'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g
								id='music_outline_20__Icons'
								stroke='none'
								strokeWidth='1'
								fill='none'
								fillRule='evenodd'
							>
								<g id='music_outline_20__Icons-20/music_outline_20'>
									<g id='music_outline_20__music_outline_20'>
										<path d='M0 0h20v20H0z'></path>
										<path
											d='M14.73 2.05a2.28 2.28 0 0 1 2.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54ZM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37Zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37Zm-.02-7.78a.78.78 0 0 0-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 0 0-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67V4.2Z'
											id='music_outline_20__Icon-Color'
											fill='currentColor'
											fillRule='nonzero'
										></path>
									</g>
								</g>
							</g>
						</svg>
					</span>
					<span className='medi_selector_name bg-white'>Аудиозапись</span>
				</NavLink>
				<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
					<span>
						<svg
							className='color_items'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M17.25 14.5c.42 0 .75.34.75.75v.1a.75.75 0 0 1-.75.65H4.75a.75.75 0 1 1 0-1.5h12.5Zm0-5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75v-.1a.75.75 0 0 1 .75-.65h8.5Zm-9-6.5c.4 0 .75.34.75.75v.1a.75.75 0 0 1-.75.65h-2.5v5.75a.75.75 0 0 1-1.5 0V4.5h-2.5a.76.76 0 0 1-.74-.65L1 3.75c0-.42.34-.75.75-.75h6.5Zm9 1.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-.1a.75.75 0 0 1 .75-.65h5.5Z'
								fill='currentColor'
							></path>
						</svg>
					</span>
					<span className='medi_selector_name bg-white'>Статья</span>
				</NavLink>
				<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
					<span>
						<svg
							className='color_items'
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='none'
							viewBox='0 0 20 20'
						>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M7.2 1.5a.85.85 0 0 1 .9.8l.25 3.8a.85.85 0 0 1-1.7.1L6.4 2.4a.85.85 0 0 1 .8-.9Zm5.89.18a.85.85 0 0 1 .58 1.06l-1.35 4.65a.85.85 0 0 1-1.64-.48l1.35-4.65a.85.85 0 0 1 1.06-.58Zm.59 7.08a.75.75 0 0 1 1.05-.08 5.14 5.14 0 0 1 1.77 4.07c0 2.68-2.3 5.75-6.5 5.75-3.12 0-6.5-2.22-6.5-5.75 0-.68.21-1.59.77-2.35C4.85 9.6 5.8 9 7.14 9c.39 0 1.9.13 2.79 1.91a.75.75 0 1 1-1.35.68c-.53-1.08-1.35-1.09-1.44-1.09-.83 0-1.34.35-1.66.79A2.62 2.62 0 0 0 5 12.75C5 15.18 7.4 17 10 17c3.36 0 5-2.4 5-4.25 0-.95-.22-2.06-1.24-2.93a.75.75 0 0 1-.08-1.06Z'
								clipRule='evenodd'
							></path>
						</svg>
					</span>
					<span className='medi_selector_name bg-white'>Клип</span>
				</NavLink>
			</div>
			<div className='add_post flex justify-around'>
				{/* POST SETTINGS */}
				{switcher ? (
					<span
						onMouseLeave={() => setSwitcher(false)}
						className='pst_setting flex flex-col absolute right-[50px] top-[35px]'
					>
						<span className='ps-setting-spacing flex relative items-stretch gap-1 mb-[5px]'>
							<input type='checkbox' className='input_ce checkmark' />
							<span className='chech_box_placeholder'>
								Выключить комментарии
							</span>
						</span>
						<span className='ps-setting-spacing flex items-stretch gap-1 '>
							<input type='checkbox' className='input_ce checkmark' />
							<span className='chech_box_placeholder'>
								Не отправлять уведомления
							</span>
						</span>
						<div className='checkbox_setting flex flex-col gap-[5px] pt-2 mt-2'>
							<div className='check_app_media py-[5px] px-[10px] flex items-center gap-[6px]'>
								<span className='check_svg'>
									<svg
										className='color_items'
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M10 3a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 10 3Z'
											clipRule='evenodd'
										></path>
									</svg>
								</span>
								<NavLink to='/cur/appMedia' className='check_placeholder '>
									Указать источник
								</NavLink>
							</div>
							<div className='check_app_media py-[5px] px-[10px] flex items-center gap-[6px]'>
								<span>
									<svg
										className='color_items'
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='24'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											fillRule='evenodd'
											d='M18.57 6.91a.82.82 0 0 0-.58.1h-.02L14.2 8.9H7.6c-.77 0-1.45.29-1.94.73a2.7 2.7 0 0 0-.76 1.87c0 .7.32 1.46.76 1.87a2.76 2.76 0 0 0 1.94.72h6.61l3.76 1.88.02.02a.81.81 0 0 0 .41.1c.22 0 .4-.08.52-.2a.5.5 0 0 0 .18-.36V7.46a.48.48 0 0 0-.09-.27.7.7 0 0 0-.44-.28ZM17.1 5.44a2.62 2.62 0 0 1 1.82-.29 2.5 2.5 0 0 1 1.56 1.01c.26.38.41.84.41 1.3v8.06c0 .68-.3 1.27-.76 1.7a2.57 2.57 0 0 1-1.74.66c-.45 0-.9-.12-1.28-.34l-3.33-1.66H7.6a4.91 4.91 0 0 1-.98-.1 4.6 4.6 0 0 1-2.17-1.1A4.5 4.5 0 0 1 3.1 11.5c0-1.13.48-2.4 1.35-3.2A4.66 4.66 0 0 1 7.6 7.1h6.19l3.33-1.65Z'
											clipRule='evenodd'
										></path>
										<path
											fillRule='evenodd'
											d='M14.9 8v6.98h-1.8V8h1.8Z'
											clipRule='evenodd'
										></path>
										<path d='m8.78 17.62-.31-1.74H7.6c-.33 0-.66-.03-.98-.1L7 17.93c.12.66.5 1.21 1.02 1.55a2.5 2.5 0 0 0 1.83.38 2.5 2.5 0 0 0 1.58-.98c.37-.5.55-1.14.43-1.8l-.2-1.2H9.81l.27 1.5a.56.56 0 0 1-.11.44.7.7 0 0 1-.45.27.7.7 0 0 1-.5-.1.56.56 0 0 1-.26-.37Z'></path>
									</svg>
								</span>
								<NavLink to='/app/media/add' className='check_placeholder'>
									Отметить рекламу
								</NavLink>
							</div>
						</div>
					</span>
				) : null}

				{/* END POST SETTING */}
				<span
					className='add_post_options'
					onMouseEnter={() => setSwitcher(true)}
				>
					<span className='add_post_option_icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='m7.22 3.38.01-.03a4.15 4.15 0 0 1 .17-.48c.36-.82.95-1.29 1.86-1.36l.16-.01h1.21c1.05.03 1.74.6 2.1 1.7l.05.18.05.16c.01.07.03.14.06.2l.05.14.03.02.06-.02.11-.04.14-.06a5.36 5.36 0 0 1 .17-.08l.03-.01a4.23 4.23 0 0 1 .43-.15c.93-.27 1.68-.08 2.32.61l.1.13.72.88c.63.83.61 1.72 0 2.68l-.12.16-.1.14-.12.18-.06.1-.03.05v.02l.08.05.11.06.13.08c1.21.61 1.71 1.42 1.52 2.54l-.03.16-.22.92c-.13.59-.24.87-.67 1.25a2.13 2.13 0 0 1-1.05.52h-.01a3.92 3.92 0 0 1-.44.06l-.2.02H15.63l-.16.01-.16.02.01.13.01.08.03.15c.07.32.1.62.1.9a2.04 2.04 0 0 1-1.13 1.87l-.15.08-1.02.5c-.9.4-1.72.23-2.48-.47a3.93 3.93 0 0 1-.15-.14l-.13-.14-.11-.13a2.94 2.94 0 0 0-.15-.17l-.09-.08-.04-.04-.08.08-.09.1-.1.1c-.83.99-1.7 1.34-2.77.93l-.15-.06-.91-.45-.28-.13a1.78 1.78 0 0 1-.87-.92 2.15 2.15 0 0 1-.2-1.01v-.02c0-.19.02-.39.06-.6l.04-.2.04-.2.01-.15-.1-.02-.12-.01h-.15a4.14 4.14 0 0 1-.86-.1h-.01a2.05 2.05 0 0 1-1.61-1.53l-.05-.16-.25-1.1c-.2-1.03.2-1.82 1.19-2.41l.17-.1.15-.08.19-.1.13-.1v-.01l-.05-.1-.07-.1-.09-.13a5.2 5.2 0 0 1-.29-.42c-.54-.9-.53-1.72.05-2.52l.1-.14.72-.87c.68-.8 1.56-.96 2.64-.56l.18.08.16.07a2.9 2.9 0 0 0 .19.08l.12.04.03-.02.03-.07.04-.12.04-.15.04-.16Zm4.24.84.01.04.05.14a1.5 1.5 0 0 0 .75.83l.03.01a1.5 1.5 0 0 0 1.13.08l.06-.02a1.47 1.47 0 0 0 .07-.02l.12-.04.06-.03.13-.06.04-.01a2.7 2.7 0 0 1 .41-.16c.27-.08.41-.06.47-.04.06.01.16.05.32.22l.07.09.69.84c.13.18.15.29.15.35 0 .09-.03.27-.23.58l-.08.12-.08.1a4.4 4.4 0 0 0-.18.27l-.02.02-.06.1v.01l-.01.02-.03.05a1.5 1.5 0 0 0-.18 1.06v.01a1.5 1.5 0 0 0 .65.96l.08.05.05.04.1.06.07.03.13.08.04.01c.45.24.62.43.67.52.04.06.09.16.04.42l-.02.12-.2.89c-.07.28-.1.35-.11.37h-.01a.97.97 0 0 1-.1.11.65.65 0 0 1-.36.16 2.36 2.36 0 0 1-.25.04h-.16l-.13.01h-.08a4.55 4.55 0 0 0-.28.02l-.15.02a1.5 1.5 0 0 0-1.32 1.63l.01.12v.07l.02.09.01.06.03.15v.05c.06.23.07.42.07.55 0 .2-.04.3-.07.35a.72.72 0 0 1-.28.24l-.1.05-.98.47c-.2.1-.32.09-.38.07-.08-.01-.23-.06-.46-.28a2.38 2.38 0 0 1-.08-.07l-.1-.1-.09-.11a4.39 4.39 0 0 0-.21-.24l-.02-.01-.08-.09a1.43 1.43 0 0 0-.04-.03l-.04-.04a1.5 1.5 0 0 0-2.05.01l-.08.08a1.43 1.43 0 0 0-.04.04l-.1.1a1.53 1.53 0 0 0-.04.04l-.1.12-.03.03c-.31.37-.53.5-.64.53-.08.03-.19.05-.42-.03l-.1-.04-.86-.42-.24-.12a1.19 1.19 0 0 1-.13-.08v-.01a1.08 1.08 0 0 1-.09-.15.67.67 0 0 1-.06-.34l.04-.36.04-.18a4.38 4.38 0 0 0 .06-.35l.01-.15a1.5 1.5 0 0 0-.43-1.22 1.5 1.5 0 0 0-.86-.43h-.1a1.4 1.4 0 0 0-.06-.02h-.13a1.54 1.54 0 0 0-.06-.01h-.19a2.66 2.66 0 0 1-.55-.07c-.22-.05-.3-.11-.35-.15a.7.7 0 0 1-.17-.32L3.26 12l-.24-1.05c-.04-.22 0-.33.02-.38.04-.08.15-.23.46-.42l.13-.08.12-.06a4.43 4.43 0 0 0 .31-.18l.14-.09a1.5 1.5 0 0 0 .65-.94v-.02a1.5 1.5 0 0 0-.17-1.07l-.05-.09a1.49 1.49 0 0 0-.04-.06l-.07-.11a1.5 1.5 0 0 0-.04-.06l-.09-.12a1.52 1.52 0 0 0-.02-.03c-.31-.4-.37-.65-.38-.76 0-.06 0-.18.15-.4L4.2 6l.68-.83c.16-.18.27-.21.33-.23.1-.02.28-.03.63.1l.13.06.13.05a4.42 4.42 0 0 0 .31.13l.12.04a1.5 1.5 0 0 0 1.14-.05l.03-.02a1.5 1.5 0 0 0 .76-.82l.03-.08.02-.07.04-.12.02-.06.04-.14.01-.04.03-.12.12-.32c.1-.23.19-.32.24-.36.04-.03.13-.09.34-.1l.1-.01h1.14c.24.01.34.07.39.11.07.06.2.2.3.54l.05.14.03.13.1.3ZM10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
								clipRule='evenodd'
							></path>
						</svg>
					</span>
				</span>
				<button className='add_post_btn' onClick={() => send()}>
					<span className='add_post_text'>Отправить</span>
				</button>
			</div>
		</div>
	)
}

export default AppMedia
