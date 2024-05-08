import React from 'react'
import './App.css'
import GayDetected from './Pages/GayDetected'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AreYouGay from './Pages/AreYouGay'
import WhatGenda from './WhatGenda'
import Mekanik from './Pages/Mekanik'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/topsecret' element={<WhatGenda />} />
				<Route path='/gay-detected' element={<GayDetected />} />
				<Route path='/areyougay' element={<AreYouGay />} />
				<Route path='/mekanik' element={<Mekanik />} />
			</Routes>
		</div>
	)
}

export default App
