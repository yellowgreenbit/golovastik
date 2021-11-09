import {Link} from "react-router-dom";
import React from "react";

const NavBarMenu = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
			<div className="container-fluid">
				<Link className="navbar-brand" aria-current="page" to="home">
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
					     className="bi bi-house" viewBox="0 0 16 16">
						<path fillRule="evenodd"
						      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
						<path fillRule="evenodd"
						      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
					</svg>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
				        aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="courses">
								Курсы
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="games">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
									     className="bi bi-joystick" viewBox="0 0 20 20">
									<path
										d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
									<path
										d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
								</svg>
								</span>

								Игры
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBarMenu;