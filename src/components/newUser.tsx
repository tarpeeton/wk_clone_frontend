import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const NewUser: FC = () => {
	return (
		<>
			<div className='rounded-xl mt-4 FormElemtsBg form'>
				<div className='JoinForm'>
					<button className='JoinButton w-full border-none rounded-lg outline-none h-9 px-4'>
						<span className='text-white font-sans font-semibold p-0 m-0 text-sm'>
							Создать аккаунт
						</span>
					</button>
					<button className=' bg-inherit w-full border rounded-lg outline-none h-9 px-4 mt-3 flex justify-center items-center'>
						<span className='text-white font-sans font-semibold p-0 m-0 inline-block text-sm'>
							Создать страницу для бизнеса
						</span>
					</button>
					<div className='mt-3 text-center joinFormTextInfo'>
					После регистрации вы получите доступ ко всем возможностям VK ID
					<br/>
					<NavLink to="https://id.vk.com/about/id" className="aboutLink"> Узнать больше</NavLink>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewUser
