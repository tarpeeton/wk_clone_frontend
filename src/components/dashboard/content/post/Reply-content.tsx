import { FC , useState} from 'react'
import { NavLink } from 'react-router-dom'

const Reply: FC = () => {
	const [content, setContent] = useState('Написать комментарий.....');
	const handleInput = (e) => {
    setContent(e.target.value);
  };
	return (
		<div className='replies'>
			<div className='replies_wrap pb-3'>
				<div className='replies_list pt-[10px]'>
					<div className='post px-5'>
						<div className='reply__wrap py-[7px] ml-[44px] flex'>
							<div className='avatar_link ml-[-44px] rounded-[50%] h-[34px] w-[34px]'>
								<NavLink to='use_ID' className='rounded-[inherit]'>
									<img
										className='rounded-[inherit] '
										src='https://sun7-17.userapi.com/s/v1/ig2/ILsCxkqwF2y081DVXlPcCv2UK_g_iQWTDtl4bA8dpunVUr-K5Sw6Wtd6jCtnUWVkt4pSCbKqPzbRbB3Ri3mhxWst.jpg?size=50x50&quality=95&crop=87,0,447,447&ava=1'
									/>
								</NavLink>
							</div>
							{/* REPLY CONTENT */}
							<div className='w-full pl-2'>
								<div className='replyauthor flex justify-between'>
									<NavLink to='user_id' className='reply_text hover:underline'>
										No Name
									</NavLink>
								</div>
								{/* REPLY_TEXT */}
								<div className='reply_text'>
									Жажду видеть как они уничтожат Англию и саутгейта Все будут
									счастливы Жажду видеть как они уничтожат Англию и саутгейта
									Все будут счастливы Жажду видеть как они уничтожат Англию и
									саутгейта Все будут счастливы
								</div>
								<div className='reply_footer pt-1 flex justify-between'>
									<div className='flex'>
										<div className='reply_time  pr-2 hover:underline'>
											<span>вчера в 15:49</span>
										</div>
										<div className='repl_link_wrap reply_link hover:underline'>
											<NavLink to='reply_id'>Ответить</NavLink>
										</div>
										<div className='link_share reply_link pl-2 hover:underline'>
											<NavLink to='reply_id'>Поделиться</NavLink>
										</div>
									</div>

									<div className=' reply-like-count flex items-center hover:cursor-pointer'>
										<div className='reply_like reply_time mt-[1px]'></div>
										<div className='reply_like_count reply_time ml-1'>2</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div className='reply_link font-semibold mt-3 mb-[10px] mx-5 inline-block hover:underline cursor-pointer'>Показать следующие комментарии</div>

				{/* CREATE TEXT */}
				<div className='mt-3 mx-5 flex items-center'>
					<div className='my_avatar_rich w-[34px] h-[34px] rounded-[50%]'>
						<img className='rounded-[inherit]' src='https://sun7-22.userapi.com/s/v1/ig2/YBvsqtc1VD88HvQ9EsEmV-WVmrMTtCqEs5Mkun29w9SFWYSt-f7gPZHsV5NOAnw9mAyfTyBejlS768vRo9cff0-6.jpg?size=50x50&quality=95&crop=1,2,797,797&ava=1'/>
					</div>
					{/* Some Content Text */}
					<div className='text_wrapper w-[80%] mx-[22px]'>
						<div id='inputDiv' className='relative w-full input__reply  rounded-md flex items-center overflow-hidden' contentEditable={true} onChange={handleInput}> 
							<span className='w-[80%] overflow-hidden'>
							{content}

							</span>


						<div contentEditable={false} className='absolute right-0 w-[20%] flex gap-[6px]'>
							<div className='more_setting_files'>
								<div className='more_files w-full h-full'></div>
							</div>

							<div  className='more_setting_files'>
								<div className='more_photo w-full h-full'></div>
							</div>


							<div  className='more_setting_files'>
								<div className='more_emoji w-full h-full'></div>
							</div>
							
						</div>
						</div>
					</div>
					{/* SEND BUTTON */}
					<div className='send__button flex items-center'>
						<div className='flex items-center'>
								<button className='sendButton'>
								<svg className='send_button_svg' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="send_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="send_24__send_24"><path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path><path d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z" id="send_24__Mask" fill="currentColor"></path></g></g></svg>
								</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Reply }
