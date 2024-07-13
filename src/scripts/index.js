
document.addEventListener("keydown", event=> {
	if (event.key === 'Enter') {
		document.execCommand('insertLineBreak')
    event.preventDefault()
	}
})