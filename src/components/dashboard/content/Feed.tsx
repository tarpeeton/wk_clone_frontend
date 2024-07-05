import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../assets//css/dashboard/feed.css'
import FanctComponent from './Fancy'
import EmojiPicker from './newHostory/emoji/Emoji'
import AppMedia from './newHostory/media/app_media'
import { News } from './news/news'

const Feed: FC = () => {
	const [Focus, setFocus] = useState<boolean>(false)
	const [picker, setPickerOpen] = useState<boolean>(false)
	const [togle, setTogle] = useState<boolean>(false)
	const [text, setText] = useState<string>('')
	const [selectedValue, setSelectedValue] = useState<number | null>(null)
	const sendHistory = () => {
		console.log('sendHistory', selectedValue, text)
	}
	const fancySelectedValue =
		selectedValue === 0
			? 'Видно всем'
			: selectedValue === 1
			? 'Видно друзьям'
			: selectedValue === 2
			? 'близких друзей'
			: 'Видно всем'

	const handleEmojiClick = (emoji: string): void => {
		setText(text + emoji)
	}

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
	}

	// Emoji Picker

	return (
		<div className='flex justify-between'>
			<div className='new_history_content w-[60%] pt-[15px]'>
				<div className='NewHistory relative rounded-xl flex '>
					<div className='w-[10%] rounded-[100%] flex justify-end pt-[10px] pb-[20px]'>
						<img
							className='w-[28px] h-[28px] rounded-[100%]  '
							src='https://pp.userapi.com/60tZWMo4SmwcploUVl9XEt8ufnTTvDUmQ6Bj1g/mmv1pcj63C4.png'
						/>
					</div>
					{Focus ? (
						<div className='w-[90%] h-[300px] relative flex new_history_spacing_wk_ui justify-between'>
							<div className='w-full h-[100%]'>
								<textarea
									className='NewHistoryColor responsive_text_area w-full outline-none border-none bg-inherit resize-none overflow-hidden h-[80%]'
									placeholder='Что у вас нового?'
									aria-label='Что у вас нового?'
									onChange={handleChange}
									maxLength={350}
									value={text}
									rows={1}
									id='newHistoryText'
									name='newHistoryText'
								/>
								<div className='absolute w-[80%] mx-auto bottom-[70px] showBtnBorder flex items-center post_action_btn'>
									<div
										className='flex items-center post_action_btn_spacing'
										onClick={() => setTogle(true)}
									>
										<span>{fancySelectedValue}</span>
										<svg
											className='mt-1'
											fill='none'
											height='8'
											viewBox='0 0 12 8'
											width='12'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												clipRule='evenodd'
												d='M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z'
												fill='currentColor'
												fillRule='evenodd'
											></path>
										</svg>
									</div>
									<div className='flex items-center post_action_btn_spacing'>
										<span>Сейчас</span>
										<svg
											className='mt-1'
											fill='none'
											height='8'
											viewBox='0 0 12 8'
											width='12'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												clipRule='evenodd'
												d='M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z'
												fill='currentColor'
												fillRule='evenodd'
											></path>
										</svg>
									</div>
									{togle && (
										<FanctComponent
											selectedValue={selectedValue}
											setTogle={setTogle}
											setSelectedValue={setSelectedValue}
										/>
									)}
								</div>
							</div>
							{/* ============== EMOJI PICKER ============== */}
							<div className='NewHistoryColor relative'>
								<div
									className='EmojiPicker'
									onMouseEnter={() => setPickerOpen(true)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											d='M8.44 14.3a.9.9 0 0 1 1.26.13c.01.02.2.22.53.43.38.24.97.49 1.77.49a3.3 3.3 0 0 0 1.77-.49c.2-.12.39-.26.53-.43a.9.9 0 0 1 1.4 1.13 4.04 4.04 0 0 1-.97.83 5.1 5.1 0 0 1-2.73.76 5.1 5.1 0 0 1-2.73-.76 3.99 3.99 0 0 1-.97-.83.9.9 0 0 1 .14-1.26Zm1.81-4.05a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5Zm-3-9.4a9.9 9.9 0 1 0 0 19.8 9.9 9.9 0 0 0 0-19.8ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z'
											clipRule='evenodd'
										></path>
									</svg>{' '}
									{picker && (
										<EmojiPicker
											setPickerOpen={setPickerOpen}
											handleEmojiClick={handleEmojiClick}
										/>
									)}
								</div>
							</div>
							{/* end Picker */}
							{/* ============== APP_MEDI ============== */}
							<AppMedia send={sendHistory} />
							{/* APP MEDI END  */}
						</div>
					) : (
						<div className='w-[90%] flex items-center pt-[10px] pb-[16px] pl-[12px] pr-[20px] justify-between'>
							<div className='w-[50%]'>
								<input
									className='NewHistoryInput NewHistoryColor'
									placeholder='Что у вас нового?'
									aria-label='Что у вас нового?'
									onFocus={() => setFocus(true)}
								/>
							</div>
							<div className='media_selector_fix relative flex w-[35%]'>
								<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
									<span>
										<svg
											className='NewHistoryColor'
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
									<span className='medi_selector_name bg-white'>
										Фотография
									</span>
								</NavLink>
								<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
									<span>
										<svg
											className='NewHistoryColor'
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
									<span className='medi_selector_name bg-white'>
										Видеозапись
									</span>
								</NavLink>
								<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
									<span>
										<svg
											className='NewHistoryColor'
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
									<span className='medi_selector_name bg-white'>
										Аудиозапись
									</span>
								</NavLink>
								<NavLink className='medai_selector_obe mr-[10px]' to='/camera'>
									<span>
										<svg
											className='NewHistoryColor'
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
											className='NewHistoryColor'
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
						</div>
					)}
				</div>
			</div>
			{/* =========================== NEWS =================================== */}
			<div className='w-[37%] pt-[15px]'>
				<News />
			</div>
		</div>
	)
}

export { Feed }
