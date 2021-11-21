import styles from "./gamebaloon.module.scss";
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import controller from "./controller";

const StatisticScreen = (props) => {
	const [cls, setCls] = useState(styles.statisticScreen_active);

	var txt = '';

	const startHandler = (e) => {
		props.onStartGame()
		setCls(styles.statisticScreen_unactive);
	}

	const hideHandler = (event) => {
		if(event.propertyName === 'opacity'){
			setCls(styles.statisticScreen_unvisible);
			props.onStartGame();
		}
	}

	useEffect(()=>{
		switch (props.gameState){
			case 'paused':
				setCls(styles.statisticScreen_unactive)
			case 'stopByTime':
				setCls(styles.statisticScreen_active)
		}

	})

	const getTxtContext = () => {
		switch (props.gameState){
			case 'paused':
				return(<div>
					<h2>Сбивай шарики и получай очки!</h2>
					<h2>Больше сбитых шариков - больше очков!</h2>
				</div>);
			case 'stopByTime':
				let persentScore = controller.score / controller.countBaloons * 100;
				const star = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffae00" stroke={'ff8800'}
							    className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
				switch (true){
					case (persentScore > 90):
						return (<div className={styles.starsBox}>{star}{star}{star}</div>)
					case (persentScore > 80):
						return (<div className={styles.starsBox}>{star}{star}</div>)
					case (persentScore > 70):
						return (<div className={styles.starsBox}>{star}</div>)
					default: return (<div><h3>Попробуй еще...</h3></div>)
				}
			case 'running':
				return (<div><h3>Игра началась!</h3></div>)
		}
	}

	return(
		<div className={cls} onTransitionEnd={event => hideHandler(event)}>
			<div className={styles.textContent}>
				{getTxtContext()}
				<Button variant={"warning"} size="lg" onClick={startHandler}>Старт!</Button>
			</div>
		</div>
	)
}

export default StatisticScreen;