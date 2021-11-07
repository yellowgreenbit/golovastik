import {Link} from "react-router-dom";
import React from "react";

const NavBarMenu = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
			<div className="container-fluid">
				<Link className="navbar-brand" aria-current="page" to="home">Главная</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
				        aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="courses">Курсы</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="games">Игры</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBarMenu;