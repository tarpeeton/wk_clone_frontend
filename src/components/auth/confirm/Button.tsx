import { FC, MouseEvent } from 'react'
import { IButtonProps } from '../../../interface/button.props'
import { useNavigate } from 'react-router-dom'

export const Button: FC<IButtonProps> = ({ secondLeft }) => {
	const navigate = useNavigate()
	const navigateToRegister = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		navigate('/auth/register')
	}
	
	return (
		<div className='flex flex-col gap-2 mt-3'>
			<button
				onClick={navigateToRegister}
				className='w-full  px-4 outline-none rounded-lg bg-white h-9'
			>
				<span className=' text-zinc-950  font-sans font-semibold'>
					Продолжить
				</span>
			</button>
			{secondLeft ? (
				<span className='mx-auto infoSend flex h-9 items-center text-sm'>
					SMS придёт в течение {secondLeft}
				</span>
			) : (
				<button className='w-full  px-4 outline-none rounded-lg h-9  hover:bg-zinc-800'>
					<span className='text-white  font-sans font-semibold'>
						Отправить ещё раз
					</span>
				</button>
			)}
		</div>
	)
}
