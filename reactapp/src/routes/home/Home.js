import React from "react";
import GeneralBox from "../../layouts/generalbox/GeneralBox";
import {Form} from "react-bootstrap";
import InputArea from "./components/InputArea";
import {initiateSocketConnection} from "../../socetdir/socketio.service";

const Home = () => {

	return (
		<GeneralBox>
			<div>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<InputArea />
					</Form.Group>
				</Form>
			</div>
		</GeneralBox>
	)
}

export default Home