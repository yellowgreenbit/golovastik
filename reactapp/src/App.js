import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./routes/home/Home";
import Courses from "./routes/courses/Courses";
import Games from "./routes/games/Games";
import {disconnectSocket, initiateSocketConnection, subscribeToMessages} from "./socetdir/socketio.service"
import {useEffect} from "react";

function App() {

	console.log(1);
	useEffect(()=> {
		initiateSocketConnection();
		return () => {
			disconnectSocket();
		}
	});

	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/home" exact component={Home} />
			<Route path="/courses" component={Courses} />
			<Route path="/games" component={Games} />
		</Switch>
	);
}

export default App;
