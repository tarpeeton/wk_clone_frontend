import {FC, useState} from 'react'
import '../../../assets/css/dashboard/main.css'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { PostContent } from './post/Post-content'

const MainContent:FC = () => {
	const [modal , setIsmodal] = useState<boolean>(false)

	console.log(modal)
	return(

		<div>
				<div className='wk-ui-content'>
					<div className='wk-ui-header flex justify-between'>
						<div className='wk-ui-typography'>Истории</div>
						<span >
							<button className='wk-ui-setting-button' onClick={() => setIsmodal(!modal)} >Настройки</button>
						</span>
					</div>
					<div className='wk-ui-spacing'></div>
					<div className='some-content'>
						<div className='history'>
							<div className='wk-ui-bg-image relative'>
							<LazyLoadImage className="bg-image"  src='https://sun7-22.userapi.com/s/v1/ig2/AMGCz_fEpTHoDx9GUCUoPfA9Cd39fw2Jd_f2cET7oGULKJyKga-p79Z0u5ty13Z5vSQTQqBoS3IcOI78vtv5eOze.jpg?size=200x200&quality=95&crop=1,2,797,797&ava=1'/>
							<div className='story-card-gradient flex'>
							<div className='stroy-module-content'>
								<div className='story-card-moduel '>
									<div className='story-card-avatar my-0  mx-auto hover:cursor-pointer transition-all ease-in-out'>
									<svg className='add-story' aria-hidden="true" display="block"  viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 10 3" clip-rule="evenodd"></path></svg>
									</div>
									<div>
										<span className=' text-xs text-white z-50 '>История</span>
									</div>
								</div>
							</div>
							</div>
							
							</div>
						</div>
					</div>
				</div>
				{/* POST CONTENT */}

				<PostContent/>
		</div>
	)
}





export {MainContent}