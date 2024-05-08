import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const AreYouGay = () => {
	const handleNoButtonClick = () => {
		const buttonsContainer = document.querySelector('.buttons')
		const noButton = document.querySelector('.buttons button:nth-child(2)')
		const randomXOffset = getRandomOffset(-150, 150)
		const randomYOffset = getRandomOffset(-150, 150)
		const containerRect = buttonsContainer.getBoundingClientRect()
		const buttonRect = noButton.getBoundingClientRect()

		const newX = Math.min(
			Math.max(buttonRect.left + randomXOffset, containerRect.left),
			containerRect.right - buttonRect.width
		)
		const newY = Math.min(
			Math.max(buttonRect.top + randomYOffset, containerRect.top),
			containerRect.bottom - buttonRect.height
		)

		noButton.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`
	}

	const getRandomOffset = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	return (
		<div className='App'>
			<div className='wrap'>
				<div>
					<div className='title'>
						<p>Are you gay?</p>
					</div>
					<div className='buttons'>
						<Link to='/gay-detected'>
							<button>Yes 🏳️‍🌈</button>
						</Link>
						<button onClick={handleNoButtonClick}>No</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AreYouGay
