import { FC, useState, ChangeEvent, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { NewReply } from './Post-reply'
import MyToolTip from '../../../helpers/ToolTips'


const Reply: FC = () => {
	const [content, setContent] = useState<string>('')
	const inputDivRef = useRef<HTMLDivElement>(null)
	const [replies, setReplies] = useState<
		Array<{ content: string; time: number }>
	>([])

	const handleChange = (e: ChangeEvent<HTMLDivElement>) => {
		setContent(e.currentTarget.innerText)
	}
	const handleSubmit = () => {
		// Clear the content after submitting
		const newContent = {
			content: content,
			time: new Date().getDay(),
		}

		setReplies([newContent, ...replies])
		setContent('')
		// Clear the inputDiv content
		if (inputDivRef.current) {
			inputDivRef.current.innerText = ''
		}
	}

	return (
		<div className='replies'>
			<div className='replies_wrap pb-3'>
				{/* CONTENT SHABLON */}
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
							<div className='w-full pl-2'>
								<div className='replyauthor flex justify-between'>
									<NavLink to='user_id' className='reply_text hover:underline'>
										No Name
									</NavLink>
								</div>
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
				{/* END REPLY CONTENT SHABLON */}

				<div className='reply_link font-semibold mt-3 mb-[10px] mx-5 inline-block hover:underline cursor-pointer'>
					Показать следующие комментарии
				</div>
				{/* MY REPLIES */}

				<div className='replies_list pt-[10px]'>
					{replies.map((rep, index) => (
						<div className='post px-5' key={index}>
							<div className='reply__wrap py-[7px] ml-[44px] flex'>
								<div className='avatar_link ml-[-44px] rounded-[50%] h-[34px] w-[34px]'>
									<NavLink to='use_ID' className='rounded-[inherit]'>
										<img
											className='rounded-[inherit] '
											src='https://sun7-17.userapi.com/s/v1/ig2/ILsCxkqwF2y081DVXlPcCv2UK_g_iQWTDtl4bA8dpunVUr-K5Sw6Wtd6jCtnUWVkt4pSCbKqPzbRbB3Ri3mhxWst.jpg?size=50x50&quality=95&crop=87,0,447,447&ava=1'
										/>
									</NavLink>
								</div>
								<div className='w-full pl-2'>
									<div className='replyauthor flex justify-between'>
										<NavLink
											to='user_id'
											className='reply_text hover:underline'
										>
											No Name
										</NavLink>
										<div className='edit_delete flex gap-[8px] items-center'>

											<MyToolTip text='Редактировать'>
												<div className='edit_reply' title='delete'></div>
											</MyToolTip>

											<MyToolTip text='Удалить'>
											<div className='delete_reply'></div>
											</MyToolTip>



										</div>
									</div>
									<div className='reply_text mt-[3px]'>{rep.content}</div>
									<div className='reply_footer pt-1 flex justify-between'>
										<div className='flex'>
											<div className='reply_time  pr-2 hover:underline'>
												<span>{rep.time}</span>
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
					))}
				</div>

				{/* CREATE TEXT */}
				<div className='mt-3 mx-5 flex items-center'>
					<div className='my_avatar_rich w-[34px] h-[34px] rounded-[50%]'>
						<img
							className='rounded-[inherit]'
							src='https://sun7-22.userapi.com/s/v1/ig2/YBvsqtc1VD88HvQ9EsEmV-WVmrMTtCqEs5Mkun29w9SFWYSt-f7gPZHsV5NOAnw9mAyfTyBejlS768vRo9cff0-6.jpg?size=50x50&quality=95&crop=1,2,797,797&ava=1'
						/>
					</div>
					<NewReply
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						inputDivRef={inputDivRef}
					/>
				</div>
			</div>
		</div>
	)
}

export { Reply }
