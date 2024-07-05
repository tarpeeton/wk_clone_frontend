import { FC } from 'react'
import { HomeLinkSvg } from '../dashboard/navbar/navbarSvg'

const HeaderComponent: FC = () => {
	return (
		<>
			<div className='ElelemtBackground h-12'>
				<div className='h-12 content-center'>
					<div className='mainContent w-65 mx-auto'>
						<div className='flex my-auto gap-1  items-center text-white'>
							<HomeLinkSvg />
						</div>
						{/* end Content */}
					</div>
				</div>
			</div>
		</>
	)
}

export default HeaderComponent
