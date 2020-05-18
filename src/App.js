import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//MY COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Terms from './components/Terms'
import HomeGust from './components/HomeGust'

function App() {
	const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')))

	console.log(loggedIn)

	return (
		<BrowserRouter>
			<Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
			<Switch>
				<Route path="/" exact>
					{loggedIn ? <Home /> : <HomeGust />}
				</Route>
				<Route path="/about-us">
					<About />
				</Route>
				<Route path="/terms">
					<Terms />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}

export default App
