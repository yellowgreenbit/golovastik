import React, {useEffect, useRef, useState} from "react";
import GeneralBox from "../../generalbox/GeneralBox";
import Baloon from "./Baloon";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import controller from "./controller";
import styles from "./gamebaloon.module.scss";
import useSound from "use-sound";
import baloonPop from './sounds/pop.mp3'
import {reaction} from "mobx";
import BaloonScore from "./BaloonScore";
import ClockTimer from "./ClockTimer";
import StatisticScreen from "./StatisticScreen";

//@todo разные шарики
//@todo сложность

const Buttons = observer((props) => {

	const startHandler = () => {
		props.onStartGame();
	}

	const endHandler = () => {
		props.onEndGame();
	}

	return (
		<div>
			<ClockTimer time={controller.timer} gameTime={controller.gameTime}/>
			<h3>{controller.timer}</h3>
			<Button onClick={startHandler} variant={"dark"} >Start!</Button>
			<Button onClick={endHandler} variant={"dark"} >Stop!</Button>
		</div>
	)
})

const GameBaloon = observer(() => {

	const [playbackRate, setPlaybackRate] = React.useState(0.8);

	const [play] = useSound(baloonPop,{
		volume: 0.5,
		playbackRate
	});

	const parentRef = useRef();

	const [gameState, setGameState] = useState('paused');

	useEffect(() => {

		if(controller.gameIsStarted) {
			const onBaloonEvent = reaction(
				() => controller.emitNewBaloon,
				(newBaloon, old, reaction) => {
					if (newBaloon) {
						console.log('createBaloon from mobx')
						createBaloon(false);
					}
				}
			)
			const onGameEnd = reaction(
				() => controller.endGame,
				() => {
					setGameState('stopByTime');
					endGame()
					//controller.stop();
				}
			)

			return () => {
				onBaloonEvent()
			};
		}
	}, [controller.gameIsStarted])

	const startGame = () => {
		if(controller.gameIsStarted){

		}else{
			controller.start();
			console.log('startGame');
			createBaloon(true);
			setGameState('running');
		}
	}

	const endGame = () => {
		controller.stop()
	}

	const baloonClick = () => {
		const min = 0.7;
		const max = 1;

		setPlaybackRate((Math.random() * (max - min) + min).toFixed(2));
		play();
		controller.increaseScore();
	}

	const baloonBoom = (baloonIndex, parentBaloon) => {
		removeBaloon(baloonIndex, parentBaloon);
	}

	const createBaloon = (parentBaloon) => {
		const parentEl = parentRef.current.parentNode;
		const baloonLeft = Math.floor(Math.random() * (parentEl.offsetWidth - 200));
		const baloonIndex = controller.countBaloons.toString();
		const baloonTag = <Baloon
			left = { baloonLeft }
			onClick = { () => baloonClick(baloonIndex) }
			onBoom = { () => baloonBoom(baloonIndex, parentBaloon) }
			key = { baloonIndex }
			baloonLifeTime = {controller.baloonLifeTime}
		/>;

		controller.addBaloon(
			baloonTag, () => {
				removeBaloon(baloonIndex, parentBaloon);
			}
		);

	}

	const removeBaloon = (index, parentBaloon) => {
		controller.removeBaloon(index);

		if(parentBaloon)
			createBaloon(true);
	}

	return(
		<GeneralBox>
			<div className={styles.game_area} ref={parentRef}>
				<StatisticScreen onStartGame={startGame} gameState={gameState}/>
				<BaloonScore/>
				<span className={styles.score}> из {controller.countBaloons.toString()}</span>
				{
					controller.baloonArray.map(	el => el )
				}

			</div>
			<ClockTimer time={controller.timer} gameTime={controller.gameTime}/>
		</GeneralBox>
	)

	//<Buttons onStartGame={startGame} onEndGame={endGame}/>
})

export default GameBaloon;