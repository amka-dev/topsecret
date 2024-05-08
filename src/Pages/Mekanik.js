import React, { useState } from 'react'
import mekanik from '../img/images.jpg'
import mekanik2 from '../img/mekanik.mp3'
import playIcon from '../img/play.png'
import pauseIcon from '../img/pause.png'
import '../App.css'

const Mekanik = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = React.useRef(null)

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	return (
		<div className='mekanik-main'>
			<h1>Congrats! You are mekanik!</h1>
			<img src={mekanik} alt='Mekanik' className='mekanik-img' />
			<audio controls autoPlay ref={audioRef} src={mekanik2} type='audio/mpeg' className='audio' />
			<button onClick={togglePlay}>
				<img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} />
			</button>
		</div>
	)
}

export default Mekanik
