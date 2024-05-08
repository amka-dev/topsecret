import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import GayDetected from './GayDetected'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AreYouGay from './AreYouGay'
import WhatGenda from './WhatGenda'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/topsecret' element={<WhatGenda />} />
				<Route path='/gay-detected' element={<GayDetected />} />
				<Route path='/areyougay' element={<AreYouGay />} />
			</Routes>
		</div>
	)
}

export default App
