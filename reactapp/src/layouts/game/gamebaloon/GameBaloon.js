import React from "react";
import GeneralBox from "../../generalbox/GeneralBox";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import controller from "./controller";
import styles from "./gamebaloon.module.scss";

const Buttons = observer((props) => {

	const startHandler = () => {
		props.onStartGame();
		controller.start();
	}

	return (
		<div>
			<h3>{controller.count}</h3>
			<Button onClick={startHandler} variant={"dark"} >Start!</Button>
			<Button onClick={() => controller.stop()} variant={"dark"} >Stop!</Button>
			<Button onClick={() => controller.plus()} variant={"dark"} >+</Button>
			<Button onClick={() => controller.minus()} variant={"dark"} >-</Button>
		</div>
	)
})

const Baloon = (props) => {
	//const [img, setImg] = useState('black_baloon');
	//const [state, setState] = useState('black_baloon');

	//const [rendered, setRendered] = useState(true);
	//const [left, setLeft] = useState(0);

	const handleClick = (props) => {
		console.log('click')

		//props.onClick();
	}

/*
	const destroy = () => {
		setRendered(false);
	};

	const create = () => {
		setImg("black_baloon");
		setRendered(true);
		setLeft(Math.floor(Math.random() * (1000 + 1)));
	}

	let image = <img src={`/img/${img}.png`} onClick={onclick} width={'20%'}
	                 style={{position: "relative", left: `${left}px`}}
	/>;
	if (!rendered) {
		image = ""
	}
*/
	return (
			<img src={`/img/black_baloon.png`} alt={'aaa'} onClick={() => handleClick(props)} width={'200px'}
			     style={{position: "absolute", left: `${props.left}px`}}
			/>
	)
};

const GameBaloon = observer(() => {
	const parentRef = React.createRef();

	let [baloonsArr, setBaloonArr] = useState([]);

	const startGame = () => {
		createBaloon();

		if(controller.gameIsStarted){

		}else{
			console.log('startGame');
			//createBaloon();
		}
	}

	const createBaloon = () => {

		const parentEl = parentRef.current.parentNode;

		console.log(parentEl.width)

		let baloonLeft = Math.floor(Math.random() * (parentEl.offsetWidth - 200));

		let baloonTag = <Baloon left={baloonLeft} onClick={createBaloon} key={baloonsArr.length.toString()}/>;

		setBaloonArr([...baloonsArr, baloonTag]);

		//setLeft(Math.floor(Math.random() * (1000 + 1)));
	}



	return(
		<GeneralBox>
			<div className={styles.game_area} ref={parentRef}>
				{baloonsArr}
			</div>
			<Buttons onStartGame={startGame}/>
		</GeneralBox>
	)
})

export default GameBaloon;