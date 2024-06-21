import { FC, useState } from 'react'
import '../../assets/css/dashboard/navbar.css'
import { IoIosSearch } from 'react-icons/io'
import { MdClear } from 'react-icons/md'
import { HomeLinkSvg } from './navbarSvg'
const MainNavbar: FC = () => {
	const [open, setIsOpen] = useState<boolean>(false)
	const [search, setSearch] = useState<string | undefined>('')
	console.log(search)
	const handleFocuse = () => setIsOpen(true)
	const handleClear = () => setSearch('')

	return (
		<>
			<div className='ElelemtBackground h-12'>
				<div className='h-12 content-center'>
					<div className='mainContent mx-auto ContentNavbar'>
						<div className='flex my-auto gap-1  items-center text-white'>
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
										<button className='LinkAndText '>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.1c4.02 0 6.9 3.28 6.9 7.53v1.6c0 .23.2.53.72 1.08l.27.27c1.08 1.1 1.51 1.73 1.51 2.75 0 .44-.05.79-.27 1.2-.45.88-1.42 1.37-2.87 1.37h-1.9c-.64 2.33-2.14 3.6-4.36 3.6-2.25 0-3.75-1.3-4.37-3.67l.02.07H5.74c-1.5 0-2.47-.5-2.9-1.41-.2-.4-.24-.72-.24-1.16 0-1.02.43-1.65 1.51-2.75l.27-.27c.53-.55.72-.85.72-1.08v-1.6C5.1 5.38 7.99 2.1 12 2.1Zm2.47 15.8H9.53c.46 1.25 1.25 1.8 2.47 1.8 1.22 0 2.01-.55 2.47-1.8ZM12 3.9c-2.96 0-5.1 2.43-5.1 5.73v1.6c0 .85-.39 1.46-1.23 2.33l-.28.29c-.75.75-.99 1.11-.99 1.48 0 .19.01.29.06.38.1.22.43.39 1.28.39h12.52c.82 0 1.16-.17 1.28-.4.05-.1.06-.2.06-.37 0-.37-.24-.73-.99-1.48l-.28-.29c-.84-.87-1.23-1.48-1.23-2.33v-1.6c0-3.3-2.13-5.73-5.1-5.73Z"></path></svg>
										</button>
									</div>
									{/*  MUSIC */}
									<div className='flex justify-center items-center'>
										<button className='LinkAndText'>
										<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16.72 4.1a17.3 17.3 0 0 1 1.31-.24c.3-.04.41-.01.46 0 .2.07.38.21.49.4.02.04.07.14.1.44.02.3.02.7.02 1.32L8.9 8.14V7.6c0-.47 0-.78.02-1.02.01-.23.04-.33.07-.4.08-.18.21-.33.38-.45.05-.04.14-.09.36-.15.23-.07.53-.13 1-.23zm-9.62 11h-.2c-1.8 0-3.12.45-4.02 1.21a3.54 3.54 0 0 0-1.28 2.71 3.38 3.38 0 0 0 3.38 3.38c.92 0 1.94-.38 2.7-1.28.77-.9 1.22-2.23 1.22-4.02V9.98l10.2-2.12v5.24h-.2c-1.8 0-3.12.45-4.02 1.21a3.54 3.54 0 0 0-1.28 2.71 3.38 3.38 0 0 0 3.38 3.38c.92 0 1.94-.38 2.7-1.28.77-.9 1.22-2.23 1.22-4.02V6c0-.57 0-1.06-.03-1.45a2.79 2.79 0 0 0-.34-1.2 2.7 2.7 0 0 0-1.46-1.2 2.79 2.79 0 0 0-1.25-.08c-.4.05-.87.15-1.43.26l-.04.01-5.99 1.25h-.03c-.42.1-.8.17-1.1.26-.31.09-.62.2-.9.4-.44.32-.78.74-.99 1.22-.14.32-.2.64-.22.98-.02.3-.02.68-.02 1.12v.03zm8.95.59c-.48.4-.65.9-.65 1.34 0 .86.7 1.57 1.57 1.57.44 0 .94-.17 1.34-.65.41-.47.79-1.34.79-2.85v-.2h-.2c-1.5 0-2.38.38-2.85.79zM3.4 19.03c0-.44.17-.94.65-1.34.47-.41 1.34-.79 2.85-.79h.2v.2c0 1.5-.38 2.38-.79 2.85-.4.48-.9.65-1.33.65-.87 0-1.58-.7-1.58-1.58z" fill="currentColor" fill-rule="evenodd"></path></svg>
										</button>
									</div>
							</div>
						</div>
						{/* end Content */}
					</div>
				</div>
			</div>
		</>
	)
}

export { MainNavbar }
