import React, { FC, useState } from 'react'

import Datepicker from "tailwind-datepicker-react"



const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1960-01-01"),
	theme: {
		background: "bg-zinc-900 dark:bg-zinc-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		input: "",
		inputIcon: "",
		selected: "bg-sky-600",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>{"<"}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: "top-0",
	defaultDate: new Date("2022-01-01"),
	language: "ru",
	disabledDates: [],
	weekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Tanlangan Vaqt",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}



const DataPicker:FC = () => { 
	const [show, setShow] = useState <boolean> (false)
	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

	return (
<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}/>
	)
}





export  {DataPicker}