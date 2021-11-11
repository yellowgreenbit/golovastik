import React, {useEffect, useRef} from "react";
import GeneralBox from "../../generalbox/GeneralBox";
import Baloon from "./Baloon";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import controller from "./controller";
import styles from "./gamebaloon.module.scss";
import useSound from "use-sound";
import baloonPop from './sounds/pop.mp3'
import {reaction} from "mobx";


const Buttons = observer((props) => {

	const startHandler = () => {
		props.onStartGame();
		controller.start();
	}

	return (
		<div>
			<h3>{controller.timer}</h3>
			<Button onClick={startHandler} variant={"dark"} >Start!</Button>
			<Button onClick={() => controller.stop()} variant={"dark"} >Stop!</Button>
		</div>
	)
})

const GameBaloon = observer(() => {

	const [playbackRate, setPlaybackRate] = React.useState(0.8);

	const [play] = useSound(baloonPop,{
		playbackRate
	});

	const parentRef = useRef();

	reaction(
		() => controller.emitNewBaloon,
		newBaloon => {
			if(newBaloon){
				createBaloon(false);
			}

		}
	)

	const startGame = () => {

		if(controller.gameIsStarted){

		}else{
			console.log('startGame');
			createBaloon(true);
		}
	}

	const baloonClick = () => {
		const min = 0.7;
		const max = 1;

		setPlaybackRate((Math.random() * (max - min) + min).toFixed(2));
		play();
		controller.increaseScore();
	}

	const baloonBoom = (baloonIndex) => {
		removeBaloon(baloonIndex);
	}

	const createBaloon = (parentBaloon) => {
		const parentEl = parentRef.current.parentNode;
		const baloonLeft = Math.floor(Math.random() * (parentEl.offsetWidth - 200));
		const baloonIndex = controller.countBaloons.toString();
		const baloonTag = <Baloon
			left = { baloonLeft }
			onClick = { () => baloonClick(baloonIndex) }
			onBoom = { () => baloonBoom(baloonIndex) }
			key = { baloonIndex }
		/>;

		controller.addBaloon(
			baloonTag, () => {
				removeBaloon(baloonIndex, parentBaloon);
			}
		);

	}

	const removeBaloon = (index, parentBaloon) => {
		//@todo add class dieBaloon

		controller.removeBaloon(index);

		if(parentBaloon)
			createBaloon(true);
	}

	return(
		<GeneralBox>
			<div className={styles.game_area} ref={parentRef}>

				<span className={styles.score}>{controller.score}</span>
				<span className={styles.score}> из {controller.countBaloons.toString()}</span>
				{
					controller.baloonArray.map(
					el => {
						return el
					})
				}
			</div>
			<Buttons onStartGame={startGame}/>
		</GeneralBox>
	)
})

export default GameBaloon;