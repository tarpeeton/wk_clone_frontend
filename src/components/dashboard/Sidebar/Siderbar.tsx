import {FC} from 'react'
import './sidebar.css'
import { SidebarLinks } from './SidebarLinks'



const SideBar: FC = () => {
	return (
		<div className='MainContentSidebar flex justify-start mx-auto'>
			<div className='wkUiSidebar'>
				<div className='flex flex-col justify-start'>
					<SidebarLinks/>
				</div>
			</div>
		</div>
	)
}



export {SideBar}