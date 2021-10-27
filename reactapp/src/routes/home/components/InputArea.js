import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {initiateSocketConnection, sendMessage, subscribeToMessages} from "../../../socetdir/socketio.service";

const InputArea = () => {

	const [messages, setMessages] = useState([]);

	console.log(2);
	useEffect( () => {
		initiateSocketConnection();

		subscribeToMessages((msg) => {
			console.log('incoming ', msg);
			setMessages(msg)
		});
	})

	const onChange = (event) => {
		//console.log(event.target.value);
		sendMessage(event.target.value);
	}

	return(
		<Form.Control as="textarea" rows={3} onChange={onChange} value={messages}/>
	)
}

export default InputArea;