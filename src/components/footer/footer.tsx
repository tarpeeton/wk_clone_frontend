import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Footer: FC = () => {
	return (
		<div className='footerNav flex w-3/4  mx-auto justify-around mt-6'>
			<div className='footerCopy flex items-center gap-1'>
				<NavLink to='sdf' className='hover:underline size13Px'>
					ВКонтакте
				</NavLink>
				<span className='joinFormTextInfo  text-xs'>© 2006-2024</span>
			</div>
			<div className='footerLinks'>
				<NavLink to='/about' className='bnav_a size13Px'>
					О ВКонтакте
				</NavLink>

				<NavLink to='' className='bnav_a size13Px'>
					Правила
				</NavLink>
				<NavLink to='' className='bnav_a size13Px' target='_blank'>
					Для бизнеса
				</NavLink>

				<NavLink to='' className='bnav_a size13Px'>
					Разработчикам
				</NavLink>
			</div>
			<div className='footerLang  flex '>
				<div>
					<NavLink to='O‘zbekcha' className='bnav_a size13Px'>
						O‘zbekcha
					</NavLink>
				</div>
				<div>
					<NavLink to='Русский' className='bnav_a size13Px'>
						Русский
					</NavLink>
				</div>
				<div>
					<NavLink to='English' className='bnav_a size13Px'>
						English
					</NavLink>
				</div>
				<div>
					<NavLink to='все языки »' className='bnav_a size13Px'>
						все языки »
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Footer
