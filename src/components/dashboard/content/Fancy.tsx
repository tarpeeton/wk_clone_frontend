import {FC } from 'react'
import { IFancy } from '../../../interface/Fancy.props'




const FanctComponent:FC<IFancy> = ({setTogle , selectedValue , setSelectedValue}) => {

	const handleSelection = (value: number) => {
    setSelectedValue(value);
  };

  const isChecked = (value: number) => selectedValue === value;
	
	return (
			<div className='flex flex-col absolute top-[100%] bg-zinc-800 rounded-lg z-50 py-2 w-[210px] font-semibold' onMouseLeave={() => setTogle(false)}>
				<div
				role='radio'
					data-value="0"
					aria-checked={isChecked(0)}
					className='FancyElemnt flex justify-between'
					onClick={() => handleSelection(0)}
				>
					Видно всем
					{isChecked(0) && (
						<span className='FancyElemnt_color'>
							<svg
								width='16'
								height='16'

								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M13.74 3.76c.35.34.35.9 0 1.23l-7.31 7.25a.88.88 0 0 1-1.25 0L2.26 9.36a.87.87 0 0 1 0-1.23.88.88 0 0 1 1.24 0l2.3 2.26 6.7-6.63a.88.88 0 0 1 1.24 0Z'
									fill='currentColor'
								></path>
							</svg>
						</span>
					)}
				</div>
				<div
				role='radio'
					data-value="0"
					aria-checked={isChecked(1)}
					className='FancyElemnt flex justify-between'
					onClick={() => handleSelection(1)}
				>
					Видно друзьям
					{isChecked(1) && (
						<span className='FancyElemnt_color'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M13.74 3.76c.35.34.35.9 0 1.23l-7.31 7.25a.88.88 0 0 1-1.25 0L2.26 9.36a.87.87 0 0 1 0-1.23.88.88 0 0 1 1.24 0l2.3 2.26 6.7-6.63a.88.88 0 0 1 1.24 0Z'
									fill='currentColor'
								></path>
							</svg>
						</span>
					)}
				</div>
				<div
				role='radio'
					data-value="0"
					aria-checked={isChecked(2)}
					className='FancyElemnt flex justify-between FancyElemnt_color FancyElemnt'
					onClick={() => handleSelection(2)}
				>
					Выбрать близких друзей
					{isChecked(2) && (
						<span className='FancyElemnt_color'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M13.74 3.76c.35.34.35.9 0 1.23l-7.31 7.25a.88.88 0 0 1-1.25 0L2.26 9.36a.87.87 0 0 1 0-1.23.88.88 0 0 1 1.24 0l2.3 2.26 6.7-6.63a.88.88 0 0 1 1.24 0Z'
									fill='currentColor'
								></path>
							</svg>
						</span>)}
		</div>
		</div>
	)}


export default FanctComponent;