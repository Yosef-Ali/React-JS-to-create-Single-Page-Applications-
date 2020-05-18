import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderLogOut from './HeaderLogOut'
import HeaderLogin from './HeaderLogin'

function Header(props) {
	const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')))
	return (
		<header className="header-bar bg-primary mb-3">
			<div className="container d-flex flex-column flex-md-row align-items-center p-3">
				<h4 className="my-0 mr-md-auto font-weight-normal">
					<Link to="/" className="text-white">
						ComplexApp
					</Link>
				</h4>
				{loggedIn ? <HeaderLogin setLoggedIn={setLoggedIn} /> : <HeaderLogOut setLoggedIn={setLoggedIn} />}
			</div>
		</header>
	)
}

export default Header
