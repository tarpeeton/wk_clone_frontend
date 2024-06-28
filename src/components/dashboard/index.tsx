import { FC } from 'react';
import { MainNavbar } from './navbar';
import { SideBar } from './Sidebar/Siderbar';



const Dashboard: FC = () => {
    return (
        <>
            <MainNavbar />
            <div className='w-full h-screen flex content-center bg-zinc-900'>
                <SideBar />
                {/* Content */}
              
             
                {/* Recommendations */}
            </div>
        </>
    );
};


export { Dashboard };
