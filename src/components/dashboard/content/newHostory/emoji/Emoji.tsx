import { FC, memo } from 'react'
import { EmojiPickerProps } from '../../../../../interface/Emoji.props'
import {
	animals,
	Emoji,
	flags,
	food_drink,
	objects,
	sport,
	symbols,
	travel,
	user_and_hands,
} from './AllEmoji'

const EmojiPicker: FC<EmojiPickerProps> = ({
	setPickerOpen,
	handleEmojiClick
}) => {
	return (
		<div
			onMouseEnter={() => setPickerOpen(true)}
			onMouseLeave={() => setPickerOpen(false)}
			className='emoji_picker_content absolute bg-zinc-800 w-[387px] rounded-lg flex flex-col cursor-pointer'
		>
			<div className='emojiPicker_placeholder'>
				<h5 className='emoji_picker_names'>Недавние</h5>
			</div>

			{/* Recent Emojis */}
			<div className='emoji_keyboar_row'>
				{Emoji.emoji.map((e, i) => (
					<div
						key={i}
						className=' mb-[5px] EmojiKeyboardRow-module__emoji--zhit4 EmojiItem-module__item--uN2hU'
						onClick={() => handleEmojiClick(e)}
					>
						<i className='Emoji-module__emoji--TaIGF' data-emoji={e}>
							{e}
						</i>
					</div>
				))}
			</div>

			{/* Other Emoji Categories */}
			{[
				{ category: 'Жесты и люди', data: user_and_hands },
				{ category: 'Символы', data: symbols },
				{ category: 'Животные и растения', data: animals },
				{ category: 'Еда и напитки', data: food_drink },
				{ category: 'Спорт', data: sport },
				{ category: 'Путешествия и транспорт', data: travel },
				{ category: 'Предметы', data: objects },
				{ category: 'Флаги', data: flags },
			].map(({ category, data }, index) => (
				<div key={index} className='emojiPicker_placeholder'>
					<h5 className='emoji_picker_names'>{category}</h5>
					<div
						className='emoji_keyboar_row EmojiKeyboardRow-module__row--p_0Uh EmojiKeyboardRow-module__rowWide--GoPtY'
						data-section-index='1'
						data-row-index='0'
					>
						{data.emoji.map((e, i) => (
							<div
								key={i}
								className=' mb-[5px] EmojiKeyboardRow-module__emoji--zhit4 EmojiItem-module__item--uN2hU'
								onClick={() => handleEmojiClick(e)}
							>
								<i className='Emoji-module__emoji--TaIGF' data-emoji={e}>
									{e}
								</i>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default memo(EmojiPicker)
