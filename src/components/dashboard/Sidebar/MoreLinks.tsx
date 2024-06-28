import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Imore } from '../../../interface/More.props'

const MoreLinks: FC<Imore> = ({ handleMouseEnter, onMouseLeave }) => {
	return (
		<div
			className=' w-[200px] absolute bg-zinc-800 p-2 rounded-lg bottom-2 right-[70px]'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className='flex flex-col wkUiSidebarNavigationPlaceholde'>
				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'>
					<NavLink to='sdf'>О ВКонтакте</NavLink>
				</span>
				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'>
					<NavLink to='sdf'>Вакансии</NavLink>
				</span>

				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'> 
					<NavLink to='sdf'>Правовая информация</NavLink>
				</span>
				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'>
					<NavLink to='sdf'>Защита данных</NavLink>
				</span>
				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'>
					<NavLink to='sdf'>Центр цифрового комфорта</NavLink>
				</span>
				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'>
					<NavLink to='sdf'>Помощь</NavLink>
				</span>
				<span className='w-full rounded-[7px] hover:bg-zinc-700 py-1 pr-3 pl-2'>
					<NavLink to='sdf'>Язык: русский</NavLink>
				</span>
			</div>
		</div>
	)
}

export { MoreLinks }
