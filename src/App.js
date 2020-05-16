import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//MY COMPONENTS
import Header from './components/Header'
import HomeGust from './components/HomeGust'
import Footer from './components/Footer'
import About from './components/About'
import Terms from './components/Terms'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact>
					<HomeGust />
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
