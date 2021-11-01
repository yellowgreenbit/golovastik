import {Form} from "react-bootstrap";
import {sendMessage} from "../../../socetdir/socketio.service";

const InputArea = () => {

	const onChange = (event) => {
		sendMessage(event.target.value);
	}

	return(
		<Form.Control as="textarea" rows={3} onChange={onChange}/>
	)
}

export default InputArea;