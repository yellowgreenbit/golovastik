import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const Test = () => {

	function formatName(user){
		if (user)
			return user.firstName + ' ' + user.lastName;
		return 'Привет, незнакомец'
	}

	const user = {
		firstName: 'Иван',
		lastName: 'Васильевич'
	}

	const element = (
		<h1>
			Здравствуй, {formatName(user)}
		</h1>
	)

	return element;
}

const Clock = () => {
	const getDateTime = () => {
		return new Date().toLocaleTimeString();
	}

	const [time, setTime] = useState(0);

	useEffect(()=>{
		setInterval(() => setTime(getDateTime()),
			1000);
	}, [time]);

	return (
		<div>
			Сейчас : { time }
		</div>
	)
}

const MyButton = () => {
	const handler = () => {
	//	alert(11)
	}

	const mouseOver = () => {
		console.log(1221)
	}

	return(
		<Button onClick={handler} onMouseMove={mouseOver}>Активация портала</Button>
	)
}

export default Test
export {Clock, MyButton}
