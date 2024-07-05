import { FC } from 'react'
import '../../../../assets/css/dashboard/news.css'
import { NavLink } from 'react-router-dom'
const News: FC = () => {
	return (
		<>
			<div className='newContent rounded-xl sticky'>
				<NavLink
					to='news'
					className='wk_ui_list news_label_text_hover_color flex items-center justify-between'
				>
					<span className='news_label_text_items'>Новости</span>
					<div className=' flex items-center pl-[6px]'>
						<div className='wk_ui_list_icons mr-[14px] '>
							<svg
								fill='none'
								height='20'
								viewBox='0 0 20 20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									clipRule='evenodd'
									d='M7.5 7.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5.11 6A2.5 2.5 0 0 1 9.9 6h6.36a.75.75 0 0 1 0 1.5H9.89a2.5 2.5 0 0 1-4.78 0H3.75a.75.75 0 0 1 0-1.5zm7.39 8.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2.39-1.75a2.5 2.5 0 0 0-4.78 0H3.75a.75.75 0 0 0 0 1.5h6.36a2.5 2.5 0 0 0 4.78 0h1.36a.75.75 0 0 0 0-1.5z'
									fill='currentColor'
									fill-rule='evenodd'
								></path>
							</svg>
						</div>

						<div className='wk_ui_list_icons'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								viewBox='0 0 20 20'
							>
								<path
									fillRule='evenodd'
									d='M10 3a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 10 3Z'
									clip-rule='evenodd'
								></path>
							</svg>
						</div>
					</div>
				</NavLink>
				<NavLink
					to='/search/photogrophy'
					className='fotography news_label_text'
				>
					<span className='wk_ui_list_icons'>Фотографии</span>
				</NavLink>
				{/* RECOMENDATION */}
				<NavLink
					to='/recomendation'
					className='wk_ui_list news_label_text flex items-center '
				>
					<span className='news_label_text_items'>Рекомендации</span>
				</NavLink>
				{/* POISK */}
				<NavLink
					to='/search'
					className='wk_ui_list news_label_text flex items-center '
				>
					<span className='news_label_text_items'>Поиск</span>
				</NavLink>
				<div className='wk_ui_line'></div>

				<div className='flex flex-col'>
					<NavLink
						to='/search'
						className='wk_ui_list news_label_text flex items-center '
					>
						<span className='news_label_text_items'>Реакции</span>
					</NavLink>
					<NavLink
						to='/search'
						className='wk_ui_list news_label_text flex items-center '
					>
						<span className='news_label_text_items'>Обновления</span>
					</NavLink>
					<NavLink
						to='/search'
						className='wk_ui_list news_label_text flex items-center '
					>
						<span className='news_label_text_items'>Комментарии</span>
					</NavLink>
				</div>
			</div>
			<div
				id='feed-filter'
				className='feed_filter rounded-xl mt-[16px] flex justify-between items-center'
			>
				<div className='flex items-center'>
					<span className='hot_icon'>
						<img src='data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2214%22%20height%3D%2216%22%20viewBox%3D%220%200%2014%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M9.49963%208C11.4996%202%206.49963%200%206.49963%200C6.49963%203%204.65611%203.67482%202.99963%205C0.499633%207%200.255859%208.5%200.255859%2010C0.255859%2014%204.99963%2015.5%204.99963%2015.5C2.99963%2011.5%205.99963%209.5%205.99963%209.5C5.99963%2014.5%209.99963%2016%209.99963%2016C16.9996%2012.5%2011.9996%204.5%2011.9996%204.5C11.9996%207%209.49963%208%209.49963%208Z%22%20fill%3D%22%23F05C44%22%2F%3E%0A%3C%2Fsvg%3E' />
					</span>
					<span className='news_label_text_items pl-[10px]'>
						Сначала интересные
					</span>
				</div>
				<div className='sitcher flex items-center relative'>
					<input type='checkbox' id='switch' />
					<label htmlFor='switch'>Toggle</label>
				</div>
			</div>
		</>
	)
}

export { News }
