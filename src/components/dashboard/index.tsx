import { FC } from 'react';
import { MainNavbar } from './navbar/navbar';
import { SideBar } from './Sidebar/Siderbar';



const Dashboard: FC = () => {
    return (
        <>
            <MainNavbar />
            <div className='w-full flex content-center bg-zinc-900'>
                <SideBar />
            </div>
        </>
    );
};


export { Dashboard };
