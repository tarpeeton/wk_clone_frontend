import {useEffect, useState } from 'react'

	

export default function TimerCouldDown(){
	const [secondLeft, setSecondLeft] = useState<number>(0)

	useEffect(() => {
		if (secondLeft <= 0) return
		const timeout = setTimeout(() => {
			setSecondLeft(secondLeft - 1)
		}, 1000)
		return () => clearTimeout(timeout)
	}, [secondLeft])

function timerStart(seconds: number){
	setSecondLeft(seconds)
}
return {secondLeft , timerStart}

}