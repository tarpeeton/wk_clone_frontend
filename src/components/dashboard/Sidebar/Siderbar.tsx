import {FC} from 'react'
import './sidebar.css'
import { SidebarLinks } from './SidebarLinks'
import { Route, Routes, Outlet } from 'react-router-dom';
import { Feed } from '../content/Feed';
import { MyPage } from '../content/MyPage';


const SideBar: FC = () => {
	return (
		<div className='MainContentSidebar flex flex-row  mx-auto'>
			<div className='wkUiSidebar'>
				<div className='flex flex-col justify-start'>
					<SidebarLinks/>
				</div>
			</div>
			<div className='relative w-[90%]'>
							<Routes>
                        <Route path='/*' element={<DashboardLayout />}>
                            <Route path='new' element={<Feed />} />
                            <Route path='my/page' element={<MyPage />} />
                        </Route>
                    </Routes>
							</div>
		</div>
	)
}

const DashboardLayout: FC = () => {
	return <Outlet />
};


export {SideBar}