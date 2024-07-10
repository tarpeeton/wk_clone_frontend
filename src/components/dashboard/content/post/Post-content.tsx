import {FC} from 'react'
import  '../../../../assets/css/dashboard/Posts.css'
import { NavLink } from 'react-router-dom'


const PostContent:FC = () => {
	return (
		<div className='mainContent flex'>
			<div className='post-content-header flex pt-4 px-5 items-center' >
				<div className='avatar-rich w-[40px] h-[40px] rounded-[50%]'>
					<NavLink to='/avatr' className=' rounded-[inherit]'>
						<img className='chanel-image rounded-[inherit]'  src='https://sun7-19.userapi.com/s/v1/ig2/aZ-ZIURkpvxTsdImPTF4SRln5ZuvuEW9KIewiyudI1h5FoITH3KkklBYbBcpO34_eZKf3K7mTl9PjWL7EbBWI3XF.jpg?quality=95&crop=31,32,760,760&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=DkhBTOmkoun_bIysb-2bYP6-dxbCIeSWcppZ9LKvZqY&cs=100x100'/>
					</NavLink>
				</div>
				{/* POST HEADER INFO */}
				<div className='flex flex-col mr-1'>
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

			</div>
		</div>
	)
}



export {PostContent}