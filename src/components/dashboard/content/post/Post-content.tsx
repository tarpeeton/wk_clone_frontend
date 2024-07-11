import {FC, useCallback , useState} from 'react'
import  '../../../../assets/css/dashboard/Posts.css'
import { NavLink } from 'react-router-dom'
import { Reply } from './Reply-content'


const PostContent:FC = () => {
	const [clicker , setClicker] = useState<boolean>(false)
	const [count , setCount] = useState<number>(0)

	const likesUpdate = useCallback(() => {
		setCount((prevCount) => {
				if (!clicker) {
						return prevCount + 1;
				} else {
						return prevCount - 1;
				}
		});
}, [clicker]);
		
		
	return (
		<div className='main-post-content flex flex-col'>
			<div className='post-content-header flex pt-4 px-5 items-center' >
				<div className='avatar-rich w-[40px] h-[40px] rounded-[50%] mr-3'>
					<NavLink to='/avatr' className=' rounded-[inherit]'>
						<img className='chanel-image rounded-[inherit]'  src='https://sun7-19.userapi.com/s/v1/ig2/aZ-ZIURkpvxTsdImPTF4SRln5ZuvuEW9KIewiyudI1h5FoITH3KkklBYbBcpO34_eZKf3K7mTl9PjWL7EbBWI3XF.jpg?quality=95&crop=31,32,760,760&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=DkhBTOmkoun_bIysb-2bYP6-dxbCIeSWcppZ9LKvZqY&cs=100x100'/>
					</NavLink>
				</div>
				{/* POST HEADER INFO */}
				<div className='w-[80%] flex flex-col mr-1'>
					<span className='author-name flex items-center'>
						<NavLink to="/chanel-id" className='channel-name'>
						Смотри АПЛ | трансляции
						</NavLink>
					</span>
					<span className='chanel-time flex items-center'>
						<NavLink to='/chanel-time' className='subtitle'>
						сегодня в 0:12
						</NavLink>
					</span>
				</div>
				{/* Actions */}
				<div className='flex items-center my-0 mx-auto'>
				<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="more_horizontal_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="more_horizontal_24__more_horizontal_24"><path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path><path d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z" id="more_horizontal_24__Mask" fill="#656565"></path></g></g></svg>
				</div>

			</div>
			{/* CONTENT INFO TEXT */}
			<div className='wall-text'>
				<p> «Криштиану хочет сыграть в официальном матче вместе со своим сыном – именно по этой причине он все еще не сдается и продолжает играть на высшем уровне» </p>
				<br/>
				<p>
				– экс-форвард «Челси» Адриан Муту после недавней встречи с Криштиану Роналду
				</p>

				<div className=' mt-3'>
				<img src='https://sun7-22.userapi.com/impg/JrQqz4VmRnmOuoBlrCxftiWhFtI01ZjTqQE7Qg/A-3liad0UL8.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&sign=4728f02d20eb999d14bbd631ae730d1e&from=bu&u=V9eseJk-UGTo9abWvENIzuAjWISoOMlpKDX_p5srRt0&cs=807x807'/>
				</div>
			</div>
			{/* LIKES WIEVERS */}
			<div className='likes-views px-5'>
				<div className=' flex items-center justify-between py-[12px]'>
					<div className='likes-btn flex  gap-3 '>
						{/* LIke */}
						<button  onClick={() => {
                                setClicker(!clicker);
                                likesUpdate();
                            }}  className='like flex items-center rounded-3xl hover:cursor-pointer'>
							<div><svg className='like-count' height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
							
							</div>
							<div className='ml-[4px]'><span className='count'>{count}</span></div>
						</button>
						{/* COMMENT */}
						<div    className='like flex items-center rounded-3xl hover:cursor-pointer'>
							<div>
							<svg className='like-count' height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
							
							</div>
							<div className='ml-[4px]'><span className='count'>{count}</span></div>
						</div>
						{/* SHARE */}

						<div className='like flex items-center rounded-3xl hover:cursor-pointer'>
							<div>
							<svg className='like-count' height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
							</div>
							<div className='ml-[4px]'><span className='count'>{count}</span></div>
						</div>
						
					</div>
					<div className='viewers__count flex items-center gap-[4px]'>
						<span className='gray__color mt-[3px]'>
						<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path><path clip-rule="evenodd" d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" fill-rule="evenodd"></path></g></svg>
						</span>
						<span className='gray__color'>96k</span>
					</div>
				</div>
			</div>

			{/* REPLY_CONTENT */}
			<Reply/>
		</div>
	)
}



export {PostContent}