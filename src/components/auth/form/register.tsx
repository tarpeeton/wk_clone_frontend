import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../auth.css'
import { DataPicker } from './DatePicker'





const RegisterForm: FC = () => {
	/* console.info("%c Внимание-внимание Это важно, чёрт возьми! Нив коем случае некопируйте иневставляйте что‑либо сюда, вы рискуете потерять доступксвоему аккаунту. Ввод информации сюда может дать злоумышленникам доступ квашему аккаунту VKID", "color: red;"); */

		

	const [gender, setGender] = useState<string>('')

	const handleGenderChange = (value: string) => {
		setGender(value)
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
	}

	return (
		<div className='RegisterContent min-h-screen w-full flex content-center items-center'>
			<div className='flex flex-col mx-auto'>
				<div className='bg-zinc-900 maxWith360 mx-auto p-7 rounded-xl relative'>
					{/* Navigation Button */}
					<div className='absolute top-4 left-1 w-12 h-12 flex items-start justify-center'>
						<div className='vkc__ContentHeader__navigationIconWrapper NavigateButton'>
							<button>
								<svg width='28' height='28' xmlns='http://www.w3.org/2000/svg'>
									<g fill='none' fill-rule='evenodd'>
										<path d='M28 0H0v28h28z'></path>
										<path
											d='M12.293 6.293a1 1 0 011.414 1.414L8.414 13H22a1 1 0 01.993.883L23 14a1 1 0 01-1 1H8.414l5.293 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-7-7-.073-.082A1.005 1.005 0 015 14l.004.09A1.006 1.006 0 015 14.02V14a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z'
											fill='currentColor'
											fill-rule='nonzero'
										></path>
									</g>
								</svg>
							</button>
						</div>
					</div>
					{/* End Navigation button */}
					<div className='relative w-full mx-auto text-center text-white mb-6'>
						{' '}
						<h1 className='text-xl'>Информация о себе</h1>
					</div>

					{/*  Form */}
					<form onSubmit={handleSubmit}>
						<div className='flex flex-col'>
							<div className='Inputs'>
								<label className='FormItems'>Имя и фамилия</label>
								<div className='InputsCol w-full mt-1'>
									<input
										type='text'
										className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white mb-3 cursor-text'
										placeholder='Имя'
										required={true}
									/>
									<input
										type='text'
										className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white mb-3 cursor-text'
										placeholder='фамилия'
										required={true}
									/>
								</div>
							</div>
							<div className='Selectors'>
								<p className='FormItems pt-1 pb-2'>Пол</p>
								<div className=' w-full'>
									<div className='flex flex-row items-center justify-between'>
										<div className='w-1/2 flex items-center hover:bg-zinc-800 rounded-lg p-1 cursor-pointer gap-2'>
											<input
												className='h-4 w-4 mr-2 cursor-pointer'
												type='radio'
												value='Мужской'
												checked={gender === 'Мужской'}
												onChange={() => handleGenderChange('Мужской')}
											/>
											<span className='text-white'>Мужской</span>
										</div>
										<div className='w-1/2 flex items-center hover:bg-zinc-800  rounded-lg p-1 cursor-pointer gap-2'>
											<input
												className='h-4 w-4 mr-2 cursor-pointer'
												type='radio'
												value='Женский'
												checked={gender === 'Женский'}
												onChange={() => handleGenderChange('Женский')}
											/>
											<span className='text-white'>Женский</span>
										</div>
									</div>
								</div>
							</div>
							{/*  Data Picker */}
							<div className='DatePicker flex flex-col gap-1 mt-6 '>
								<span className='FormItems'>Дата рождения</span>
								<DataPicker />
							</div>
							<div className='mt-5'>
							<button className='w-full  px-4 outline-none rounded-lg bg-white h-9'>
								<span className=' text-zinc-950  font-sans font-semibold'>
									Продолжить
								</span>
							</button>
							</div>
							
						</div>
					</form>
				</div>
				<div className='text-white mx-auto'>
					<NavLink
						className='promoLink hover:underline'
						to='https://id.vk.com/about/id'
					>
						Узнать больше о VK ID
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export { RegisterForm }
