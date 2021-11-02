import {Form} from "react-bootstrap";

const Gform = (props) => {
	return(
		<Form onSubmit={props.onSubmit}>
			{props.children}
		</Form>
	)
}

export default Gform;