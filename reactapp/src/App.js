import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./routes/home/Home";
import Courses from "./routes/courses/Courses";
import Games from "./routes/games/Games";
import {disconnectSocket, initiateSocketConnection, subscribeToMessages} from "./socetdir/socketio.service"
import React, {useEffect} from "react";
import GameBaloon from "./layouts/game/gamebaloon/GameBaloon";

function App() {

	useEffect(()=> {
		initiateSocketConnection();
		subscribeToMessages((msg) => {
			console.log('incoming ', msg);
			//setMessages(msg)
		});
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
			<Route path="/baloon" component={GameBaloon} />
		</Switch>
	);
}

export default App;
