import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLogin(props) {
	function handleLogout() {
		props.setLoggedIn(false)
		localStorage.removeItem('complexappToken')
		localStorage.removeItem('complexappUserName')
		localStorage.removeItem('complexappAvatar')
	}
	return (
		<div className="flex-row my-3 my-md-0">
			<Link to="#" className="text-white mr-2 header-search-icon">
				<i className="fas fa-search"></i>
			</Link>
			<span className="mr-2 header-chat-icon text-white">
				<i className="fas fa-comment"></i>
				<span className="chat-count-badge text-white"> </span>
			</span>
			<Link to="#" className="mr-2">
				<img className="small-header-avatar" alt="avatar" src={localStorage.getItem('cpmplexappAvatar')} />
			</Link>
			<Link className="btn btn-sm btn-success mr-2" to="/create-post">
				Create Post
			</Link>
			<button onClick={handleLogout} className="btn btn-sm btn-secondary">
				Sign Out
			</button>
		</div>
	)
}

export default HeaderLogin