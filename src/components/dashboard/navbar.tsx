import { FC, useState } from 'react'
import '../../assets/css/dashboard/navbar.css'
import { IoIosSearch } from 'react-icons/io'
import { MdClear } from 'react-icons/md'
import { HomeLinkSvg } from './navbarSvg'
import Example from './notification'
import { ServiceIcon } from './ServiceIcon'
import Navbarservices from './NavbarService'
import ProfileSettings from './Profile'
const MainNavbar: FC = () => {
	const [open, setIsOpen] = useState<boolean>(false)
	const [search, setSearch] = useState<string | undefined>('')
	const handleFocuse = () => setIsOpen(true)
	const handleClear = () => setSearch('')

	return (
		<>
			<div className='ElelemtBackground h-12'>
				<div className='h-12 content-center'>
					<div className='mainContent mx-auto ContentNavbar'>
						<div className='flex my-auto gap-1  items-center justify-between text-white'>
							<div className='RigthNavbarElemts flex items-center'>
								<HomeLinkSvg />
								{/* Search Input */}
								<div className='rounded-lg SearchInput flex h-full bg-neutral-700 items-center justify-around  ml-4'>
									<div className='pl-3'>
										<IoIosSearch className=' text-lg LinkAndText' />
									</div>
									<div className=' w-1/2'>
										<input
											className='bg-inherit outline-none border-none p-1'
											placeholder='Поиск'
											autoComplete='off'
											onFocus={handleFocuse}
											onChange={e => setSearch(e.target.value)}
											value={search}
										/>
									</div>
									<div className='w-1/6 flex items-center justify-center'>
										{open && (
											<div className='w-1/6 flex items-center justify-center'>
												<button className='LinkAndText' onClick={handleClear}>
													<MdClear className='w-8 h-6' />
												</button>
											</div>
										)}
									</div>
								</div>
								<div className='ml-8 flex justify-between gap-5'>
									{/* NOTIFICATION */}
									<div className='flex justify-center items-center '>
										<Example />
									</div>
									{/*  MUSIC */}
									<div className='flex justify-center items-center'>
										<button className='LinkAndText'>
											<svg
												fill='none'
												height='24'
												viewBox='0 0 24 24'
												width='24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													clip-rule='evenodd'
													d='M16.72 4.1a17.3 17.3 0 0 1 1.31-.24c.3-.04.41-.01.46 0 .2.07.38.21.49.4.02.04.07.14.1.44.02.3.02.7.02 1.32L8.9 8.14V7.6c0-.47 0-.78.02-1.02.01-.23.04-.33.07-.4.08-.18.21-.33.38-.45.05-.04.14-.09.36-.15.23-.07.53-.13 1-.23zm-9.62 11h-.2c-1.8 0-3.12.45-4.02 1.21a3.54 3.54 0 0 0-1.28 2.71 3.38 3.38 0 0 0 3.38 3.38c.92 0 1.94-.38 2.7-1.28.77-.9 1.22-2.23 1.22-4.02V9.98l10.2-2.12v5.24h-.2c-1.8 0-3.12.45-4.02 1.21a3.54 3.54 0 0 0-1.28 2.71 3.38 3.38 0 0 0 3.38 3.38c.92 0 1.94-.38 2.7-1.28.77-.9 1.22-2.23 1.22-4.02V6c0-.57 0-1.06-.03-1.45a2.79 2.79 0 0 0-.34-1.2 2.7 2.7 0 0 0-1.46-1.2 2.79 2.79 0 0 0-1.25-.08c-.4.05-.87.15-1.43.26l-.04.01-5.99 1.25h-.03c-.42.1-.8.17-1.1.26-.31.09-.62.2-.9.4-.44.32-.78.74-.99 1.22-.14.32-.2.64-.22.98-.02.3-.02.68-.02 1.12v.03zm8.95.59c-.48.4-.65.9-.65 1.34 0 .86.7 1.57 1.57 1.57.44 0 .94-.17 1.34-.65.41-.47.79-1.34.79-2.85v-.2h-.2c-1.5 0-2.38.38-2.85.79zM3.4 19.03c0-.44.17-.94.65-1.34.47-.41 1.34-.79 2.85-.79h.2v.2c0 1.5-.38 2.38-.79 2.85-.4.48-.9.65-1.33.65-.87 0-1.58-.7-1.58-1.58z'
													fill='currentColor'
													fill-rule='evenodd'
												></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className='LeftNavbarElemts '>
								<div className='flex gap-1 justify-center items-center'>
									<div className='service flex gap-5'>
										<Navbarservices />
										{/* Profile Settings */}

										<button className=' pl-1'>
											<ProfileSettings />
										</button>
									</div>
								</div>
							</div>

							{/* Account Setting & Services */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { MainNavbar }
