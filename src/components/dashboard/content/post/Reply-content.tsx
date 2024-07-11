import {FC} from 'react'
import { NavLink } from 'react-router-dom'


const Reply:FC = () => {
	return(
		<div className='replies'>
				<div className='replies_wrap pb-3'>
					<div className='replies_list pt-[10px]'>
						<div className='post px-5'>
							<div className='reply__wrap py-[7px] ml-[44px]'>
									<div  className='avatar_link ml-[-44px] rounded-[50%] h-[34px] w-[34px]'>
										<NavLink to='use_ID' className='rounded-[inherit]'>
										<img className='rounded-[inherit] ' src='https://sun7-17.userapi.com/s/v1/ig2/ILsCxkqwF2y081DVXlPcCv2UK_g_iQWTDtl4bA8dpunVUr-K5Sw6Wtd6jCtnUWVkt4pSCbKqPzbRbB3Ri3mhxWst.jpg?size=50x50&quality=95&crop=87,0,447,447&ava=1' />
										</NavLink>
									
									</div>
									{/* REPLY CONTENT */}
							<div className='w-full'>
								<div className='replyauthor flex justify-between'>
									<NavLink to='user_id' className='reply_text hover:underline'>No Name</NavLink>
								</div>
								{/* REPLY_TEXT */}
								<div className='reply_text'>
								Жажду видеть как они уничтожат Англию и саутгейта 
								Все будут счастливы 
								Жажду видеть как они уничтожат Англию и саутгейта 
								Все будут счастливы 
								Жажду видеть как они уничтожат Англию и саутгейта 
								Все будут счастливы 
								</div>
								<div className='reply_footer pt-1 flex justify-between'>
									<div className='flex'>
									<div className='reply_time  pr-2 hover:underline'>
											<span>вчера в 15:49</span>
										</div>
										<div className='repl_link_wrap reply_link hover:underline'>
											<NavLink to='reply_id'
											>
Ответить
											</NavLink>
										</div>
										<div className='link_share reply_link pl-2 hover:underline'>
											<NavLink to='reply_id'
											>
Поделиться
											</NavLink>
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
				</div>
		</div>
	)
}



export {Reply}