import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Gform from "../form/GForm";
import NET from "../../network";

import {observer} from "mobx-react-lite";
import counter from "../../stores/counter";

const Ticker = observer(() => {
	return (
		<div>
			<h3>{counter.count}</h3>
			<Button onClick={() => counter.plus()} variant={"dark"} >+</Button>
			<Button onClick={() => counter.minus()} variant={"dark"} >-</Button>
		</div>
	)
})

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

	//const users = useContext(ContextData);

	useEffect(() => {
		const fetchUsers = () => {
			fetch(`${NET.APP_URL}users`)
				.then(res => res.json())
				.then(
					(result) => {
						console.log(result)
					},
					(error) => {
						console.log(error);
					}
				)
		}

		fetchUsers();
	})

	const [buttonText, setButtonText] = useState("Выключено");

	const handler = () => {
		return setButtonText(buttonText === "Выключено" ? "Включено" : "Выключено");
	}

	const formSubmit = (e) => {
		e.preventDefault();
		console.log(e)
	}

	const getUsers = (e) => {
		e.preventDefault();
	}

	return(
		<Gform onSubmit={formSubmit}>
			<Button onClick={handler} type={'submit'}>{buttonText}</Button>
			<Gli/>
			<Button onClick={getUsers} variant="warning">Тест</Button>
			<Ticker/>
		</Gform>

	)
}

const Gli = () => {
	const nums = [1,2,3,5];

	let listItems = nums.map((number) => {
		return (<li key={number.toString()}>{number}</li>)
	})

	return(
		<ul>{listItems}</ul>
	);
}

export default Test
export {Clock, MyButton, Gli}
