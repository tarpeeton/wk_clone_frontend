import { FC  , useState} from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { MoreLinks } from './MoreLinks'

const SidebarLinks:FC = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () =>  {
			setDropdownVisible(false);
	}
		
	return (
		<div className='w-full flex flex-col'>
			{/* 1 */}
			<NavLink to='/feed/my/page' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M5.84 15.63a6.97 6.97 0 0 0 8.32 0 8.2 8.2 0 0 0-8.32 0zM4.7 14.57a7 7 0 1 1 10.6 0 9.7 9.7 0 0 0-10.6 0zM10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zm-1.5 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'
							fill='currentColor'
							fillRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Моя страница</span>
				</div>
			</NavLink>
			{/* 2 */}
			<NavLink to='/feed/new' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 0 0-1.82 1.82 4.26 4.26 0 0 0-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 0 0 1.63-.4 4.15 4.15 0 0 0 1.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 0 0-.4-1.63 4.15 4.15 0 0 0-1.82-1.82 4.26 4.26 0 0 0-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 0 0 1.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8z'
							fill='currentColor'
							fillRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Новости</span>
				</div>
			</NavLink>
			{/* 3 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g
							id='message_outline_20__Page-2'
							stroke='none'
							strokeWidth='1'
							fill='none'
							fillRule='evenodd'
						>
							<g id='message_outline_20__message_outline_20'>
								<path
									id='message_outline_20__Shape'
									opacity='.4'
									d='M0 0h20v20H0z'
								></path>
								<path
									d='M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22ZM3.24 18.5a1.2 1.2 0 0 1-1.1-1.77A10.77 10.77 0 0 0 3.26 14 7 7 0 0 1 2 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4Z'
									id='message_outline_20__Icon-Color'
									fill='currentColor'
									fillRule='nonzero'
								></path>
							</g>
						</g>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Мессенджер</span>
				</div>
			</NavLink>
			{/* 4 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g
							id='phone_outline_20__Icons'
							stroke='none'
							strokeWidth='1'
							fill='none'
							fillRule='evenodd'
						>
							<g id='phone_outline_20__Icons-20/phone_outline_20'>
								<g id='phone_outline_20__phone_outline_20'>
									<path opacity='.1' d='M0 0h20v20H0z'></path>
									<path
										d='m7.78 2.7.7.83a4.13 4.13 0 0 1-.3 5.58l-.3.3c.23.38.64.88 1.23 1.48.53.53.99.9 1.35 1.14l.13.09.3-.3a4.14 4.14 0 0 1 5.58-.3l.83.7a3.45 3.45 0 0 1 .34 4.9c-.6.69-1.43 1.15-2.29 1.28l-.5.06c-3 .3-6.04-1.16-9.1-4.21-3.05-3.06-4.5-6.1-4.22-9.03l.06-.51a3.83 3.83 0 0 1 1.3-2.36l.17-.13a3.44 3.44 0 0 1 4.72.48Zm-3.91.79a2.38 2.38 0 0 0-.81 1.58c-.35 2.55.9 5.25 3.76 8.12 2.86 2.86 5.56 4.1 8.12 3.75.6-.05 1.17-.35 1.57-.8.72-.85.64-2.09-.18-2.77l-.83-.7-.14-.12a2.64 2.64 0 0 0-3.41.33l-.6.6-.09.07a.9.9 0 0 1-.86.14 7.26 7.26 0 0 1-2.35-1.74A7.23 7.23 0 0 1 6.31 9.6a.9.9 0 0 1 .21-.95l.6-.6.13-.13c.86-1 .9-2.44.08-3.42l-.7-.83-.11-.13c-.7-.7-1.85-.73-2.65-.05Z'
										id='phone_outline_20__Icon-Color'
										fill='currentColor'
										fillRule='nonzero'
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Звонки</span>
				</div>
			</NavLink>

			{/* 5 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='currentColor'>
							<g clipRule='evenodd' fillRule='evenodd'>
								<path d='M6.25 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2.06 5.07c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z'></path>
							</g>
							<path d='M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 1 1-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 0 1 0-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 0 0-2.81-.62z'></path>
						</g>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Друзья</span>
				</div>
			</NavLink>
			{/* 7 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M10 7.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM7.25 6.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0 1 10 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 0 1-.35 4.98.75.75 0 0 1 0-1.5 1 1 0 0 0 .14-1.99.75.75 0 0 1-.63-.85zM15.76 10a.75.75 0 0 0 0 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 0 0 0 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 0 0-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 0 0 0-1.5.57.57 0 0 1-.47-.2.86.86 0 0 1-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 0 1 .22 1.48 1 1 0 0 0 .14 1.99.75.75 0 1 1 0 1.5 2.5 2.5 0 0 1-.36-4.97z'
							fill='currentColor'
							fillRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Сообщества</span>
				</div>
			</NavLink>
			{/* 8 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 0 0 1.43-.32 3.5 3.5 0 0 0 1.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 0 1-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 0 0-.32-1.43 3.5 3.5 0 0 0-1.53-1.53 3.75 3.75 0 0 0-1.43-.32A43.2 43.2 0 0 0 10 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 0 0-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 0 0 3.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 0 0-2.19 2.19zM7.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z'
							fill='currentColor'
							fillRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Фотографии</span>
				</div>
			</NavLink>
			{/* 9 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill='currentColor'
							d='M5.5 11a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-1A.75.75 0 0 1 5.5 11Zm3.75-.25a.75.75 0 0 0-1.5 0v2.75a.75.75 0 0 0 1.5 0v-2.75ZM14.5 10a.75.75 0 0 1 .75.76v2.8a.75.75 0 0 1-1.5-.01v-2.8a.75.75 0 0 1 .75-.75Zm-2.25-.74a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z'
						></path>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M7.92 2c-.88 0-1.6 0-2.17.05a4.1 4.1 0 0 0-1.57.39 4 4 0 0 0-1.74 1.74 4.1 4.1 0 0 0-.4 1.57C2 6.33 2 7.04 2 7.92v4.16c0 .88 0 1.6.05 2.17.04.58.15 1.1.39 1.57a4 4 0 0 0 1.74 1.74c.48.24.99.35 1.57.4.58.04 1.29.04 2.17.04h4.16c.88 0 1.6 0 2.17-.05a4.1 4.1 0 0 0 1.57-.39 4 4 0 0 0 1.74-1.74c.24-.47.35-.99.4-1.57.04-.58.04-1.29.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 0 0-.39-1.57 4 4 0 0 0-1.74-1.74 4.1 4.1 0 0 0-1.57-.4C13.67 2 12.96 2 12.08 2H7.92ZM4.87 3.77c.22-.11.51-.19 1-.23.51-.04 1.16-.04 2.08-.04h4.1c.92 0 1.57 0 2.07.04.5.04.8.12 1.02.23a2.5 2.5 0 0 1 1.09 1.1c.11.22.19.51.23 1 .03.42.04.93.04 1.6-.38-.28-.85-.6-1.35-.9-1.04-.65-2.4-1.32-3.65-1.32-1.43 0-2.53.64-3.54 1.23l-.42.25A8.5 8.5 0 0 1 3.5 7.99v-.04c0-.92 0-1.57.04-2.07.04-.5.12-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1ZM3.5 9.5v2.55c0 .92 0 1.57.04 2.07.04.5.12.8.23 1.02a2.5 2.5 0 0 0 1.1 1.09c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h4.1c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.02-.23a2.5 2.5 0 0 0 1.09-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08V9.36a30.58 30.58 0 0 1-.17-.13c-.43-.33-1.14-.88-1.96-1.39a6.19 6.19 0 0 0-2.87-1.09c-1 0-1.73.42-2.77 1.02a70.79 70.79 0 0 1-.45.26A9.97 9.97 0 0 1 3.5 9.5Z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Музыка</span>
				</div>
			</NavLink>
			{/* 10 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						fill='currentColor'
						viewBox='0 0 20 20'
					>
						<path
							fillRule='evenodd'
							d='M10.37 2h1.31c.95 0 1.71 0 2.33.05.63.05 1.17.16 1.67.41a4.25 4.25 0 0 1 1.86 1.86c.25.5.36 1.04.4 1.67.06.61.06 1.37.06 2.33v3.36c0 .96 0 1.72-.05 2.33a4.39 4.39 0 0 1-.41 1.67 4.25 4.25 0 0 1-1.86 1.86c-.5.25-1.04.36-1.67.41-.62.05-1.38.05-2.33.05H8.32c-.96 0-1.72 0-2.33-.05a4.39 4.39 0 0 1-1.67-.41 4.25 4.25 0 0 1-1.86-1.86 4.39 4.39 0 0 1-.41-1.67C2 13.4 2 12.63 2 11.68V8.32c0-.96 0-1.72.05-2.33.05-.63.16-1.17.41-1.67a4.25 4.25 0 0 1 1.86-1.86c.5-.25 1.04-.36 1.67-.41C6.6 2 7.36 2 8.32 2h2.05ZM5 3.8c.23-.12.51-.2.96-.24a4.24 4.24 0 0 0-.8 1.51C5 5.65 5 6.33 5 7.37v5.7c0 .63 0 1.04.06 1.4a4.25 4.25 0 0 0 .9 1.97A2.67 2.67 0 0 1 5 16.2 2.75 2.75 0 0 1 3.8 15a2.92 2.92 0 0 1-.26-1.11c-.04-.55-.04-1.25-.04-2.24v-3.3c0-1 0-1.7.04-2.24.05-.54.13-.86.26-1.1A2.75 2.75 0 0 1 5 3.8ZM8.8 16.46c.21.04.48.04 1.21.04h1.65c1 0 1.7 0 2.24-.05a2.9 2.9 0 0 0 1.1-.25A2.75 2.75 0 0 0 16.2 15c.13-.25.21-.57.26-1.11.04-.55.04-1.25.04-2.24v-3.3c0-1 0-1.7-.04-2.24a2.9 2.9 0 0 0-.26-1.1A2.75 2.75 0 0 0 15 3.8a2.94 2.94 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04H10.5c-1.22 0-1.66 0-2.01.1A2.75 2.75 0 0 0 6.6 5.5c-.1.35-.11.8-.11 2.01V13c0 .73 0 1 .04 1.21a2.75 2.75 0 0 0 2.25 2.25Zm2.75-9.33.03.02 1.84 1.09.03.01c.3.18.57.34.78.49.2.15.44.35.57.65.17.39.17.83 0 1.22-.13.3-.37.5-.57.65-.2.15-.48.3-.78.49l-.03.01-1.84 1.09-.03.02c-.3.17-.57.33-.8.44-.23.1-.53.22-.86.18a1.54 1.54 0 0 1-1.1-.63 1.6 1.6 0 0 1-.26-.82c-.02-.25-.02-.57-.02-.92V8.88c0-.36 0-.67.02-.92.03-.25.08-.55.27-.82a1.54 1.54 0 0 1 1.09-.63c.33-.04.63.07.86.18.23.1.5.27.8.44ZM10 7.9a.12.12 0 0 0-.05.03.93.93 0 0 0-.02.16c-.02.18-.02.44-.02.83v2.18c0 .4 0 .65.02.83a.86.86 0 0 0 .02.16.11.11 0 0 0 .05.03.9.9 0 0 0 .11-.05c.16-.07.37-.2.71-.4l1.85-1.08.7-.43a.9.9 0 0 0 .1-.1.18.18 0 0 0 0-.1.9.9 0 0 0-.1-.1 10.2 10.2 0 0 0-.7-.43l-1.85-1.09-.7-.4A1.04 1.04 0 0 0 10 7.9Z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Видео</span>
				</div>
			</NavLink>
			{/* 11 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						fill='none'
						viewBox='0 0 20 20'
					>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M7.2 1.5a.85.85 0 0 1 .9.8l.25 3.8a.85.85 0 0 1-1.7.1L6.4 2.4a.85.85 0 0 1 .8-.9Zm5.89.18a.85.85 0 0 1 .58 1.06l-1.35 4.65a.85.85 0 0 1-1.64-.48l1.35-4.65a.85.85 0 0 1 1.06-.58Zm.59 7.08a.75.75 0 0 1 1.05-.08 5.14 5.14 0 0 1 1.77 4.07c0 2.68-2.3 5.75-6.5 5.75-3.12 0-6.5-2.22-6.5-5.75 0-.68.21-1.59.77-2.35C4.85 9.6 5.8 9 7.14 9c.39 0 1.9.13 2.79 1.91a.75.75 0 1 1-1.35.68c-.53-1.08-1.35-1.09-1.44-1.09-.83 0-1.34.35-1.66.79A2.62 2.62 0 0 0 5 12.75C5 15.18 7.4 17 10 17c3.36 0 5-2.4 5-4.25 0-.95-.22-2.06-1.24-2.93a.75.75 0 0 1-.08-1.06Z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Клипы</span>
				</div>
			</NavLink>
			{/* 12 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M11.5 4h-3c-2.32 0-4.25.43-5.58 1.76S1.02 9.15 1 12c0 .8.05 1.99.46 3 .2.5.5 1.01.98 1.4.48.39 1.09.61 1.81.61.8 0 1.37-.33 1.81-.77.31-.31.58-.72.8-1.07l.17-.24c.28-.42.55-.76.91-1 .35-.24.82-.42 1.56-.42h1c.74 0 1.21.18 1.56.42.36.24.63.58.91 1l.16.24c.23.35.5.76.8 1.07.45.44 1.02.77 1.82.77a2.8 2.8 0 0 0 1.81-.61c.47-.39.78-.9.98-1.4.4-1.01.47-2.2.46-3-.02-2.84-.6-4.9-1.92-6.23C15.75 4.43 13.82 4 11.5 4zm-1 8h-1c-1.01 0-1.79.26-2.4.68-.6.4-1 .94-1.31 1.4l-.23.34c-.21.32-.37.56-.57.76a.95.95 0 0 1-.74.32c-.4 0-.67-.12-.87-.28a1.9 1.9 0 0 1-.53-.79 6.82 6.82 0 0 1-.35-2.42c.02-2.71.57-4.28 1.48-5.19.91-.9 2.34-1.32 4.52-1.32h3c2.18 0 3.61.42 4.52 1.32.9.91 1.46 2.48 1.48 5.19 0 .75-.06 1.7-.35 2.42a1.9 1.9 0 0 1-.53.8c-.2.15-.47.27-.87.27a.95.95 0 0 1-.74-.32c-.2-.2-.36-.44-.57-.76l-.23-.34c-.3-.46-.7-1-1.3-1.4A4.13 4.13 0 0 0 10.5 12zM7.25 7.5a.75.75 0 0 0-1.5 0v.75H5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75H8a.75.75 0 0 0 0-1.5h-.75zm5.25.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z'
							fill='currentColor'
							fillRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Игры</span>
				</div>
			</NavLink>
			{/* 13 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						fill='currentColor'
						viewBox='0 0 20 20'
					>
						<path d='M10 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17ZM10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm3.07 9.06c.3.28.3.76.02 1.06a4.06 4.06 0 0 1-.85.65 4.36 4.36 0 0 1-2.24.63 4.36 4.36 0 0 1-2.24-.63 4.06 4.06 0 0 1-.85-.65.75.75 0 0 1 1-1.11l.2.18a3.16 3.16 0 0 0 1.89.71 2.88 2.88 0 0 0 1.9-.71l.1-.1a.75.75 0 0 1 1.07-.03ZM7.62 7.25a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25Zm4.75 0a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25Z'></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Стикеры</span>
				</div>
			</NavLink>
			{/* 14 */}
			<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
				<div className='wkUiSidebarSpacing'>
					<svg
						className='wkUiSidebarColor'
						fill='none'
						height='20'
						viewBox='0 0 20 20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							d='M7.25 5.75a2.75 2.75 0 0 1 5.5 0V6h-5.5zM5.75 6v-.25a4.25 4.25 0 0 1 8.5 0V6c1.01.02 1.62.08 2.11.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v.5c0 2.52 0 3.78-.49 4.74a4.5 4.5 0 0 1-1.97 1.97c-.96.49-2.22.49-4.74.49H9.2c-2.52 0-3.78 0-4.74-.49a4.5 4.5 0 0 1-1.97-1.97C2 15.08 2 13.82 2 11.3v-.5c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31c.5-.25 1.1-.31 2.12-.33zm-.8 1.54c.43-.04.99-.04 1.85-.04h6.4c.86 0 1.42 0 1.85.04.4.03.56.09.63.12.28.15.51.38.66.66.03.07.1.22.12.63.04.43.04.99.04 1.85v.5c0 1.28 0 2.16-.06 2.83-.05.66-.15 1-.27 1.23a3 3 0 0 1-1.3 1.31c-.24.12-.58.22-1.24.27-.67.06-1.55.06-2.83.06H9.2c-1.28 0-2.16 0-2.83-.06-.66-.05-1-.15-1.23-.27a3 3 0 0 1-1.31-1.3 3.24 3.24 0 0 1-.27-1.24c-.06-.67-.06-1.55-.06-2.83v-.5c0-.86 0-1.42.04-1.85.03-.4.09-.56.12-.63.15-.28.38-.51.66-.66.07-.03.22-.1.63-.12zm.8 2.33a.87.87 0 1 1 1.75 0 .87.87 0 0 1-1.75 0zM13.38 9a.88.88 0 1 0 0 1.75.88.88 0 0 0 0-1.75z'
							fill='currentColor'
							fillRule='evenodd'
						></path>
					</svg>
				</div>
				<div className='wkUisidebarHeigth'>
					<span className='wkUiSidebarNavigationPlaceholde'>Маркет</span>
				</div>
			</NavLink>

			{/*  ======================================================================= */}

			<div className='wkUiSidebarBorder py-3 mt-2'>
				<NavLink to='sdf' className='flex items-center'>
					<div className='wkUiSidebarSpacing'>
						<svg
							className='wkUiSidebarColor'
							fill='none'
							height='20'
							viewBox='0 0 20 20'
							width='20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								clipRule='evenodd'
								d='M11.76 7.7c-.28-.27-.52-.51-.7-.73a2.3 2.3 0 0 1-.47-.77 2.25 2.25 0 0 1 0-1.4c.1-.3.27-.54.46-.77.19-.22.45-.48.73-.76l.25-.24.24-.25c.28-.28.54-.54.76-.73.23-.19.47-.36.77-.46.46-.14.94-.14 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7l.26.28.27.26c.28.28.52.52.7.74.2.23.37.47.47.77.14.46.14.94 0 1.4-.1.3-.27.54-.46.77-.19.22-.45.48-.73.76l-.25.24-.24.25c-.28.28-.54.54-.76.73-.23.19-.47.36-.77.46-.46.14-.94.14-1.4 0a2.3 2.3 0 0 1-.77-.46 13.4 13.4 0 0 1-.74-.7l-.26-.28-.27-.26zm4.4-1.03-.25.24-.24.25c-.3.3-.5.5-.67.64a.85.85 0 0 1-.27.18.75.75 0 0 1-.46 0A.86.86 0 0 1 14 7.8c-.16-.14-.36-.33-.67-.64l-.24-.25-.25-.24c-.3-.3-.5-.5-.64-.67a.85.85 0 0 1-.18-.27.75.75 0 0 1 0-.46.85.85 0 0 1 .18-.27c.14-.16.33-.36.64-.67l.25-.24.24-.25c.3-.3.5-.5.67-.64a.86.86 0 0 1 .27-.18.75.75 0 0 1 .46 0c.04.01.11.05.27.18.16.14.36.33.67.64l.24.25.25.24c.3.3.5.5.64.67.13.16.17.23.18.27.05.15.05.31 0 .46a.86.86 0 0 1-.18.27c-.14.16-.33.36-.64.67zM11 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 0 1-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02-.3-.03-.59-.08-.87-.23a2.25 2.25 0 0 1-.98-.98 2.3 2.3 0 0 1-.23-.87c-.02-.28-.02-.63-.02-1.02v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06.75.75 0 0 1-.33-.33.86.86 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 0 1 .33-.33.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.86.86 0 0 1-.06.32.75.75 0 0 1-.33.33.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02zM2 5.12v.76c0 .4 0 .74.02 1.02a2.25 2.25 0 0 0 1.2 1.86c.3.14.59.2.88.22.28.02.65.02 1.05.02h.7c.4 0 .77 0 1.05-.02a2.25 2.25 0 0 0 1.86-1.2c.14-.3.2-.59.22-.88C9 6.62 9 6.27 9 5.88v-.76c0-.4 0-.74-.02-1.02a2.3 2.3 0 0 0-.23-.87 2.25 2.25 0 0 0-.98-.98 2.3 2.3 0 0 0-.87-.23C6.62 2 6.25 2 5.85 2h-.7c-.4 0-.77 0-1.05.02a2.25 2.25 0 0 0-1.86 1.2c-.14.3-.2.59-.22.88C2 4.38 2 4.73 2 5.12zM5.5 7.5h.35c.43 0 .71 0 .92-.02.2-.01.28-.04.32-.06a.75.75 0 0 0 .33-.33.85.85 0 0 0 .06-.32c.02-.2.02-.49.02-.92v-.7c0-.43 0-.71-.02-.92a.85.85 0 0 0-.06-.32.75.75 0 0 0-.33-.33.86.86 0 0 0-.32-.06c-.2-.02-.49-.02-.92-.02h-.7c-.43 0-.71 0-.92.02a.86.86 0 0 0-.32.06.75.75 0 0 0-.33.33.85.85 0 0 0-.06.32c-.02.2-.02.49-.02.92v.7c0 .43 0 .71.02.92.01.2.04.28.06.32.07.14.19.26.33.33.04.02.11.05.32.06.2.02.49.02.92.02zM2 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 0 1-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02a2.25 2.25 0 0 1-1.86-1.2 2.3 2.3 0 0 1-.22-.88C2 15.62 2 15.27 2 14.88v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06.75.75 0 0 1-.33-.33.85.85 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 0 1 .33-.33.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.85.85 0 0 1-.06.32.75.75 0 0 1-.33.33.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02z'
								fill='currentColor'
								fillRule='evenodd'
							></path>
						</svg>
					</div>
					<div className='wkUisidebarHeigth'>
						<span className='wkUiSidebarNavigationPlaceholde'>Сервисы</span>
					</div>
				</NavLink>
				<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
					<div className='wkUiSidebarSpacing'>
						<svg
							className='wkUiSidebarColor'
							fill='none'
							height='20'
							viewBox='0 0 20 20'
							width='20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								clipRule='evenodd'
								d='M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-8.5-7a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm7.25-4a.75.75 0 0 0-.75.75v3h-.25a.75.75 0 0 0 0 1.5H8V12h-.25a.75.75 0 0 0 0 1.5H8v.5a.75.75 0 0 0 1.5 0v-.5H11a.75.75 0 0 0 0-1.5H9.5v-.75h1.63a2.63 2.63 0 0 0 0-5.25zm2.38 3.75H9.5V7.5h1.63a1.13 1.13 0 0 1 0 2.25z'
								fill='currentColor'
								fillRule='evenodd'
							></path>
						</svg>
					</div>
					<div className='wkUisidebarHeigth'>
						<span className='wkUiSidebarNavigationPlaceholde'>VK Pay</span>
					</div>
				</NavLink>
			</div>
			{/*  END Sidebar  */}
			<div className='wkUiSidebarBorder  py-3 mt-2'>
				<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
					<div className='wkUiSidebarSpacing'>
						<svg
							className='wkUiSidebarColor'
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='none'
							viewBox='0 0 20 20'
						>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M9.32 1.5h1.36c.96 0 1.72 0 2.33.05.63.05 1.17.16 1.67.41a4.25 4.25 0 0 1 1.86 1.86c.25.5.36 1.04.41 1.67.05.61.05 1.38.05 2.33v6.57c0 .77 0 1.4-.04 1.9-.05.48-.14.98-.46 1.37a2.25 2.25 0 0 1-1.77.84c-.5 0-.94-.25-1.34-.52-.41-.27-.9-.68-1.5-1.17l-.85-.69c-.27-.22-.45-.37-.6-.47a.82.82 0 0 0-.24-.13.75.75 0 0 0-.4 0 .82.82 0 0 0-.24.13c-.15.1-.33.25-.6.47l-.85.7c-.6.48-1.09.89-1.5 1.16-.4.27-.84.51-1.34.52a2.25 2.25 0 0 1-1.77-.84c-.32-.4-.41-.89-.46-1.37-.04-.5-.04-1.13-.04-1.9V7.82c0-.96 0-1.72.05-2.33.05-.63.16-1.17.41-1.67a4.25 4.25 0 0 1 1.86-1.86c.5-.25 1.04-.36 1.67-.41.61-.05 1.38-.05 2.33-.05Zm-2.2 1.55c-.54.04-.87.12-1.12.25a2.75 2.75 0 0 0-1.2 1.2c-.13.25-.21.58-.25 1.11-.05.55-.05 1.25-.05 2.24v6.5c0 .82 0 1.39.04 1.8.04.43.1.54.13.57a.75.75 0 0 0 .59.28c.03 0 .16-.02.51-.26.35-.23.79-.6 1.42-1.11l.84-.68c.25-.21.47-.4.67-.53.2-.15.43-.27.7-.35a2.25 2.25 0 0 1 1.2 0c.27.08.5.2.7.35.2.14.42.32.67.53l.84.68c.63.52 1.07.88 1.42 1.1.35.25.48.27.51.27a.75.75 0 0 0 .6-.28c.01-.03.08-.14.12-.57.04-.41.04-.98.04-1.8v-6.5c0-1 0-1.7-.05-2.24a2.91 2.91 0 0 0-.25-1.1A2.75 2.75 0 0 0 14 3.3a2.91 2.91 0 0 0-1.11-.25C12.34 3 11.64 3 10.65 3h-1.3c-1 0-1.7 0-2.24.05Z'
								clipRule='evenodd'
							></path>
						</svg>
					</div>
					<div className='wkUisidebarHeigth'>
						<span className='wkUiSidebarNavigationPlaceholde'>Закладки</span>
					</div>
				</NavLink>
				<NavLink to='sdf' className='flex items-center wkUisidebarHeigth'>
					<div className='wkUiSidebarSpacing'>
						<svg
							className='wkUiSidebarColor'
							fill='none'
							height='20'
							viewBox='0 0 20 20'
							width='20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g fill='currentColor'>
								<path d='M10 6.25c-.58 0-1.07.4-1.21.94a.75.75 0 0 1-1.45-.38 2.75 2.75 0 0 1 5.41.69c0 1.21-.65 1.84-1.14 2.3h-.01c-.48.45-.77.73-.86 1.3a.75.75 0 0 1-1.48-.2c.16-1.12.8-1.71 1.25-2.14l.07-.06c.45-.42.67-.66.67-1.2 0-.69-.56-1.25-1.25-1.25zM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'></path>
								<path
									clipRule='evenodd'
									d='M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0z'
									fillRule='evenodd'
								></path>
							</g>
						</svg>
					</div>
					<div className='wkUisidebarHeigth'>
						<span className='wkUiSidebarNavigationPlaceholde'>Помощь</span>
					</div>
				</NavLink>
			</div>
			{/* =======================BOTTOM +++++++++++++++ */}
			<div className='flex flex-wrap relative'>
				<NavLink className='wk_sidebar_recomendations' to='sdf'>
					Блог
				</NavLink>
				<NavLink className='wk_sidebar_recomendations' to='sdf'>
					Разработчикам
				</NavLink>
				<NavLink className='wk_sidebar_recomendations' to='sdf'>
					Для бизнеса
				</NavLink>
				<NavLink className='wk_sidebar_recomendations' to='sdf'>
					Авторам
				</NavLink>
				{isDropdownVisible && <MoreLinks handleMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />}

				<div className='wk_sidebar_recomendations' onMouseEnter={handleMouseEnter }  onMouseLeave={handleMouseLeave}>
					<button className='flex justify-center items-center gap-1' >
						Ещё
						<svg
							className='mt-1'
							fill='none'
							height='8'
							viewBox='0 0 12 8'
							width='12'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								clipRule='evenodd'
								d='M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z'
								fill='currentColor'
								fillRule='evenodd'
							></path>
						</svg>
					</button>
				</div>
				
			</div>
			<div className='wkUiSidebarBorder pt-[8px]'>
				<NavLink to='' className='wk_sidebar_recomendations '>
					<span>
						<span className='flex items-center gap-0'>
						Применяются 
						рекомендательные технологии

						</span>


					</span>
				</NavLink>
				</div>
		</div>
	)
}

export { SidebarLinks }
