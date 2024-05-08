import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<div className='wrap'>
				<div>
					<div className='title'>
						<p>What is yo genda?</p>
					</div>
					<div className='buttons'>
						<Link to='/areyougay'>
							<button>Women</button>
						</Link>
						<Link to='/areyougay'>
							<button>Men</button>
						</Link>
						<Link to='/areyougay'>
							<button>Mekanik</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
