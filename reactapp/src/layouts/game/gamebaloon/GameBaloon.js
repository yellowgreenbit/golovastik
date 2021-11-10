import React, {useEffect} from "react";
import GeneralBox from "../../generalbox/GeneralBox";
import Baloon from "./Baloon";
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
			<h3>{controller.timer}</h3>
			<Button onClick={startHandler} variant={"dark"} >Start!</Button>
			<Button onClick={() => controller.stop()} variant={"dark"} >Stop!</Button>
		</div>
	)
})

const GameBaloon = observer(() => {
	const parentRef = React.createRef();

	const startGame = () => {

		if(controller.gameIsStarted){

		}else{
			console.log('startGame');
			createBaloon();
		}
	}

	const baloonClick = () => {
		controller.increaseScore();
	}

	const baloonBoom = (baloonIndex) => {
		removeBaloon(baloonIndex);
	}

	const createBaloon = () => {
		const parentEl = parentRef.current.parentNode;
		const baloonLeft = Math.floor(Math.random() * (parentEl.offsetWidth - 200));
		const baloonIndex = controller.baloonArray.length.toString();
		const baloonTag = <Baloon
			left = { baloonLeft }
			onClick = { () => baloonClick(baloonIndex) }
			onBoom = { () => baloonBoom(baloonIndex) }
			key = { baloonIndex }
		/>;
		controller.addBaloon(
			baloonTag, () => {
				removeBaloon(baloonIndex);
			}
		);
	}

	const removeBaloon = (index) => {

		//@todo add class dieBaloon

		controller.removeBaloon(index);

		//@todo initiate new Baloon
	}

	return(
		<GeneralBox>
			<div className={styles.game_area} ref={parentRef}>
				<span className={styles.score}>{controller.countBaloons.toString()}</span>
				<span className={styles.score}>/ {controller.score}</span>
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