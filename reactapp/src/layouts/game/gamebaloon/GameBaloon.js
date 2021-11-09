import React, {useEffect} from "react";
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
		</div>
	)
})

const Baloon = (props) => {
	const [img, setImg] = useState('black_baloon');

	const handleClick = () => {
		setImg('boom');

		props.onClick();
	}

	return (
		<img
			src={`/img/${img}.png`}
			alt={'aaa'}
			onClick={() => handleClick(props)}
			width={'200px'}
			className={styles.baloon_div}
		    style={{left: `${props.left}px`}}
		/>
	)
};

const GameBaloon = observer(() => {
	const parentRef = React.createRef();

	let [baloonsArr, setBaloonArr] = useState([]);

	const startGame = () => {

		if(controller.gameIsStarted){

		}else{
			console.log('startGame');
			createBaloon();
		}
	}

	const baloonClick = (baloonIndex) => {
		controller.increaseScore();

		removeBaloon(baloonIndex);
	}

	const createBaloon = () => {

		const parentEl = parentRef.current.parentNode;
		const baloonLeft = Math.floor(Math.random() * (parentEl.offsetWidth - 200));
		const baloonIndex = baloonsArr.length.toString();
		const baloonTag = <Baloon
			left={baloonLeft}
			onClick={()=>baloonClick(baloonIndex)}
			key={baloonIndex}
		/>;

		setBaloonArr([...baloonsArr, baloonTag]);
	}

	useEffect(()=>{
		console.log('!!!?', baloonsArr)
	})

	const removeBaloon = (index) => {
		//asinc setBaloonArr
		console.log(baloonsArr)
	}

	return(
		<GeneralBox>
			<div className={styles.game_area} ref={parentRef}>
				<span>{baloonsArr.length.toString()}</span>
				<span>/ {controller.score}</span>
				{baloonsArr}
			</div>
			<Buttons onStartGame={startGame}/>
		</GeneralBox>
	)
})

export default GameBaloon;