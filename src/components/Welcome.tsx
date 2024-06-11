import { FC } from 'react'

import HeaderComponent from './header/header'
import Content from './content/content'


const HomePage: FC = () => {
	return (
		<>
	{/* Header */}
	<HeaderComponent/>
			{/* Content */}
			<Content/>
	
		</>
	)
}

export default HomePage
