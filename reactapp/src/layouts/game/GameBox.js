import {Link} from "react-router-dom";

const GameBox = () => {
	return(
		<div>
			<h1>
				GameBox
				<p>
					<Link className="navbar-brand" aria-current="page" to="baloon">Baloon</Link>
				</p>
			</h1>
		</div>
	)
}

export default GameBox;