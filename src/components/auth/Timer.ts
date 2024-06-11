import { useEffect, useState } from 'react'

export default function TimerCouldDown() {
	// Sonni olish uchun
	const [secondLeft, setSecondLeft] = useState<number>(0)

	useEffect(() => {
		if (secondLeft <= 0) return
		// Har soniya osha soniyadan -1 qilish uchun
		const timeout = setTimeout(() => {
			setSecondLeft(secondLeft - 1)
		}, 1000)
		// Settimeoutni tozalash uchun
		return () => clearTimeout(timeout)
	}, [secondLeft])

	// Boshlangich sonni olish uchun 
	function timerStart(seconds: number) {
		setSecondLeft(seconds)
	}
	// Hozirgi vaqt va boshlanish vaqtini olish uchun funksiyani yuboramiz
	return { secondLeft, timerStart }
}
